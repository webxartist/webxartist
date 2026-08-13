"use client";
import { event } from "@/lib/analytics";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* =====================================================
     SHOW POPUP
  ===================================================== */

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("webxartist_contact_popup");

    if (alreadyShown) return;

    let triggered = false;

    const showPopup = () => {
      if (triggered) return;

      triggered = true;

      setIsOpen(true);

      sessionStorage.setItem("webxartist_contact_popup", "true");

      window.removeEventListener("scroll", handleScroll);
    };

    /* Show after 15 seconds */
    const timer = setTimeout(showPopup, 15000);

    /* Show after 50% page scroll */
    function handleScroll() {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) return;

      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollPercentage >= 50) {
        showPopup();
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(timer);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE POPUP
  ===================================================== */

  const closePopup = () => {
    setIsOpen(false);
  };

  /* =====================================================
     HANDLE INPUT
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  /* =====================================================
     SUBMIT FORM
  ===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      // Google Analytics - successful popup form submission
      event("popup_form_submit", {
        form_name: "contact_popup",
      });

      setSuccess(true);

      setForm(initialForm);

      /* Close after success */
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Contact Popup Error:", err);

      setError(
        err.message || "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* =================================================
              BACKDROP
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="
              fixed
              inset-0
              z-[9998]
              h-dvh
              w-screen
              max-w-full
              overflow-hidden
              bg-black/60
              backdrop-blur-[3px]
            "
          />

          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-dvh
              w-screen
              max-w-full
              items-center
              justify-center
              overflow-x-hidden
              p-3
              sm:p-4
            "
          >
            {/* =================================================
                POPUP CARD
            ================================================= */}

            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                min-w-0
                w-full
                max-w-[500px]
                max-h-[90dvh]
                overflow-x-hidden
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-[#080a20]
                text-white
                shadow-2xl
              "
            >
              {/* =================================================
                  BACKGROUND GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-cyan-500/10
                  blur-[70px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-40
                  w-40
                  rounded-full
                  bg-orange-500/10
                  blur-[70px]
                "
              />

              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={closePopup}
                aria-label="Close contact form"
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-slate-400
                  transition
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={18} />
              </button>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  min-w-0
                  p-5
                  sm:p-7
                "
              >
                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {success ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      flex
                      min-h-[300px]
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >
                    <div
                      className="
                        mb-5
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-cyan-400/10
                      "
                    >
                      <CheckCircle2 size={34} className="text-cyan-400" />
                    </div>

                    <h2 className="text-2xl font-bold">Thank You!</h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                      Your enquiry has been received. Our team will contact you
                      shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="min-w-0 pr-8">
                      <div
                        className="
                          mb-4
                          inline-flex
                          max-w-full
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[1.5px]
                          text-slate-300
                        "
                      >
                        <Sparkles
                          size={12}
                          className="shrink-0 text-cyan-400"
                        />

                        <span>Free Consultation</span>
                      </div>

                      <h2
                        className="
                          break-words
                          text-2xl
                          font-bold
                          leading-tight
                          sm:text-3xl
                        "
                      >
                        Let's Grow Your{" "}
                        <span
                          className="
                            bg-gradient-to-r
                            from-cyan-400
                            via-orange-400
                            to-amber-300
                            bg-clip-text
                            text-transparent
                          "
                        >
                          Business
                        </span>
                      </h2>

                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                        Tell us what you need and we'll help you find the right
                        solution.
                      </p>
                    </div>

                    {/* =================================================
                        FORM
                    ================================================= */}

                    <form
                      onSubmit={handleSubmit}
                      className="
                        mt-6
                        min-w-0
                        space-y-4
                      "
                    >
                      {/* NAME */}

                      <div className="min-w-0">
                        <label
                          htmlFor="popup-name"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-medium
                            text-slate-300
                          "
                        >
                          Name
                        </label>

                        <input
                          id="popup-name"
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="
                            block
                            min-w-0
                            w-full
                            max-w-full
                            rounded-lg
                            border
                            border-white/10
                            bg-white/5
                            px-3.5
                            py-3
                            text-sm
                            text-white
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-600
                            focus:border-cyan-400/50
                            focus:bg-white/[0.07]
                          "
                        />
                      </div>

                      {/* EMAIL + PHONE */}

                      <div
                        className="
                          grid
                          min-w-0
                          grid-cols-1
                          gap-4
                          sm:grid-cols-2
                        "
                      >
                        {/* EMAIL */}

                        <div className="min-w-0">
                          <label
                            htmlFor="popup-email"
                            className="
                              mb-1.5
                              block
                              text-xs
                              font-medium
                              text-slate-300
                            "
                          >
                            Email
                          </label>

                          <input
                            id="popup-email"
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="
                              block
                              min-w-0
                              w-full
                              max-w-full
                              rounded-lg
                              border
                              border-white/10
                              bg-white/5
                              px-3.5
                              py-3
                              text-sm
                              text-white
                              outline-none
                              transition
                              duration-300
                              placeholder:text-slate-600
                              focus:border-cyan-400/50
                              focus:bg-white/[0.07]
                            "
                          />
                        </div>

                        {/* PHONE */}

                        <div className="min-w-0">
                          <label
                            htmlFor="popup-phone"
                            className="
                              mb-1.5
                              block
                              text-xs
                              font-medium
                              text-slate-300
                            "
                          >
                            Phone
                          </label>

                          <input
                            id="popup-phone"
                            type="tel"
                            name="phone"
                            required
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="
                              block
                              min-w-0
                              w-full
                              max-w-full
                              rounded-lg
                              border
                              border-white/10
                              bg-white/5
                              px-3.5
                              py-3
                              text-sm
                              text-white
                              outline-none
                              transition
                              duration-300
                              placeholder:text-slate-600
                              focus:border-cyan-400/50
                              focus:bg-white/[0.07]
                            "
                          />
                        </div>
                      </div>

                      {/* SERVICE */}

                      <div className="min-w-0">
                        <label
                          htmlFor="popup-service"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-medium
                            text-slate-300
                          "
                        >
                          Service
                        </label>

                        <select
                          id="popup-service"
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="
                            block
                            min-w-0
                            w-full
                            max-w-full
                            rounded-lg
                            border
                            border-white/10
                            bg-white/5
                            px-3.5
                            py-3
                            text-sm
                            text-white
                            outline-none
                            transition
                            duration-300
                            focus:border-cyan-400/50
                            focus:bg-white/[0.07]
                          "
                        >
                          <option value="" disabled className="bg-[#080a20]">
                            Select a service
                          </option>

                          <option
                            value="Website Development"
                            className="bg-[#080a20]"
                          >
                            Website Development
                          </option>

                          <option value="Google Ads" className="bg-[#080a20]">
                            Google Ads
                          </option>

                          <option value="Meta Ads" className="bg-[#080a20]">
                            Meta Ads
                          </option>

                          <option value="SEO" className="bg-[#080a20]">
                            SEO
                          </option>

                          <option
                            value="Google My Business"
                            className="bg-[#080a20]"
                          >
                            Google My Business
                          </option>

                          <option
                            value="Social Media Management"
                            className="bg-[#080a20]"
                          >
                            Social Media Management
                          </option>

                          <option
                            value="Content Creation"
                            className="bg-[#080a20]"
                          >
                            Content Creation
                          </option>

                          <option
                            value="Email Marketing"
                            className="bg-[#080a20]"
                          >
                            Email Marketing
                          </option>

                          <option
                            value="Website Maintenance & Support"
                            className="bg-[#080a20]"
                          >
                            Website Maintenance & Support
                          </option>

                          <option value="Other" className="bg-[#080a20]">
                            Other
                          </option>
                        </select>
                      </div>

                      {/* MESSAGE */}

                      <div className="min-w-0">
                        <label
                          htmlFor="popup-message"
                          className="
                            mb-1.5
                            block
                            text-xs
                            font-medium
                            text-slate-300
                          "
                        >
                          Requirement
                        </label>

                        <textarea
                          id="popup-message"
                          name="message"
                          required
                          rows={2}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Briefly tell us about your requirement..."
                          className="
                            block
                            min-h-[70px]
                            min-w-0
                            w-full
                            max-w-full
                            resize-none
                            rounded-lg
                            border
                            border-white/10
                            bg-white/5
                            px-3.5
                            py-3
                            text-sm
                            text-white
                            outline-none
                            transition
                            duration-300
                            placeholder:text-slate-600
                            focus:border-cyan-400/50
                            focus:bg-white/[0.07]
                          "
                        />
                      </div>

                      {/* ERROR */}

                      {error && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="
                            break-words
                            rounded-lg
                            border
                            border-red-400/20
                            bg-red-400/10
                            px-3
                            py-2.5
                            text-xs
                            text-red-300
                          "
                        >
                          {error}
                        </motion.div>
                      )}

                      {/* SUBMIT BUTTON */}

                      <button
                        type="submit"
                        disabled={loading}
                        className="
                          group
                          flex
                          w-full
                          min-w-0
                          items-center
                          justify-center
                          gap-2
                          rounded-lg
                          bg-gradient-to-r
                          from-cyan-400
                          to-cyan-500
                          px-5
                          py-3.5
                          text-sm
                          font-bold
                          text-[#06101c]
                          transition
                          duration-300
                          hover:from-cyan-400
                          hover:to-orange-400
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        {loading ? (
                          <>
                            <span
                              className="
                                h-4
                                w-4
                                shrink-0
                                animate-spin
                                rounded-full
                                border-2
                                border-[#06101c]/30
                                border-t-[#06101c]
                              "
                            />

                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Get Free Consultation</span>

                            <ArrowRight
                              size={17}
                              className="
                                shrink-0
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            />
                          </>
                        )}
                      </button>

                      {/* PRIVACY */}

                      <p className="text-center text-[11px] text-slate-500">
                        No spam. Your information is safe with us.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
