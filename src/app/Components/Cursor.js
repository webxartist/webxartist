"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Settings2,
  MousePointer2,
  Sparkles,
  Crown,
  TrendingUp,
  X,
} from "lucide-react";

const cursorOptions = [
  {
    id: "normal",
    label: "Classic",
    hint: "Default cursor / no overlay",
    icon: MousePointer2,
    swatch: "bg-slate-500",
  },
  {
    id: "glow",
    label: "Brand Glow",
    hint: "Soft gradient glow",
    icon: Sparkles,
    swatch: "bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300",
  },
  {
    id: "trail",
    label: "Success Trail",
    hint: "Comet-style gold trail",
    icon: Sparkles,
    swatch: "bg-gradient-to-r from-amber-300 to-yellow-500",
  },
  {
    id: "premium",
    label: "Premium Ring",
    hint: "Rotating gold ring",
    icon: Crown,
    swatch: "bg-gradient-to-r from-amber-300 to-orange-400",
  },
  {
    id: "growth",
    label: "Growth Pulse",
    hint: "Radar-style pulse",
    icon: TrendingUp,
    swatch: "bg-gradient-to-r from-cyan-400 to-blue-400",
  },
];

export default function CursorSwitcher() {
  const [cursorType, setCursorType] = useState("growth");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // slightly firmer spring on touch so the cursor keeps up with a dragging finger
  const springConfig = isTouch
    ? { stiffness: 420, damping: 38, mass: 0.4 }
    : { stiffness: 280, damping: 32, mass: 0.5 };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // chained springs create a lagging "comet" trail for the trail style — softer, more fluid lag
  const t1x = useSpring(mouseX, { stiffness: 170, damping: 24, mass: 0.6 });
  const t1y = useSpring(mouseY, { stiffness: 170, damping: 24, mass: 0.6 });
  const t2x = useSpring(t1x, { stiffness: 130, damping: 22, mass: 0.7 });
  const t2y = useSpring(t1y, { stiffness: 130, damping: 22, mass: 0.7 });
  const t3x = useSpring(t2x, { stiffness: 100, damping: 20, mass: 0.8 });
  const t3y = useSpring(t2y, { stiffness: 100, damping: 20, mass: 0.8 });

  // Unified pointer handling: mouse cursor is always tracked while on-screen;
  // touch is only tracked (and only visible) while a finger is actually down and dragging.
  useEffect(() => {
    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsTouch(e.pointerType === "touch");
      setIsVisible(true);
    };

    const handlePointerDown = (e) => {
      if (e.pointerType === "touch") {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsTouch(true);
        setIsVisible(true);
      }
    };

    const handlePointerUp = (e) => {
      if (e.pointerType === "touch") {
        setIsVisible(false);
      }
    };

    const handlePointerLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (cursorType === "normal" || isTouch) {
      document.body.style.cursor = "auto";
    } else {
      document.body.style.cursor = "none";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [cursorType, isTouch]);

  const selectCursor = (type) => {
    setCursorType(type);
    setMenuOpen(false);
  };

  const showCursor = cursorType !== "normal" && isVisible;
  // touch fingers are imprecise — render the overlay a touch larger for visibility
  const scaleClass = isTouch ? "scale-125" : "scale-100";

  return (
    <div>
      {/* ---------- CURSOR RENDERERS ---------- */}
      <AnimatePresence>
        {showCursor && cursorType === "glow" && (
          <motion.div
            key="glow"
            className={`fixed z-[999] pointer-events-none ${scaleClass}`}
            style={{
              left: springX,
              top: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-0 w-12 h-12 -m-3.5 rounded-full bg-gradient-to-r from-cyan-400/25 via-orange-400/25 to-amber-300/25 blur-xl" />
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_14px_rgba(255,178,56,0.45)]" />
          </motion.div>
        )}

        {showCursor && cursorType === "trail" && (
          <motion.div
            key="trail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={`fixed z-[999] pointer-events-none w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.6)] ${scaleClass}`}
              style={{
                left: springX,
                top: springY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
            <motion.div
              className="fixed z-[998] pointer-events-none w-2 h-2 rounded-full bg-amber-300/50 blur-[0.5px]"
              style={{
                left: t1x,
                top: t1y,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
            <motion.div
              className="fixed z-[997] pointer-events-none w-1.5 h-1.5 rounded-full bg-amber-300/30 blur-[0.5px]"
              style={{
                left: t2x,
                top: t2y,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
            <motion.div
              className="fixed z-[996] pointer-events-none w-1 h-1 rounded-full bg-amber-300/15 blur-[0.5px]"
              style={{
                left: t3x,
                top: t3y,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          </motion.div>
        )}

        {showCursor && cursorType === "premium" && (
          <motion.div
            key="premium"
            className={`fixed z-[999] pointer-events-none ${scaleClass}`}
            style={{
              left: springX,
              top: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="w-9 h-9 rounded-full border border-dashed border-amber-300/50"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Crown
                className="w-3.5 h-3.5 text-amber-300/90"
                fill="currentColor"
              />
            </div>
          </motion.div>
        )}

        {showCursor && cursorType === "growth" && (
          <motion.div
            key="growth"
            className={`fixed z-[999] pointer-events-none ${scaleClass}`}
            style={{
              left: springX,
              top: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0 w-8 h-8 -m-4 rounded-full border border-cyan-400/30"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <div className="relative flex items-center justify-center w-5 h-5 -m-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]">
              <TrendingUp
                className="w-2.5 h-2.5 text-[#080a20]"
                strokeWidth={3}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- TOGGLE BUTTON ----------
          mobile: bottom-left, clear of body text
          desktop (sm+): original top-left position */}
      <motion.button
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed bottom-[6.5rem] left-5 sm:bottom-auto sm:top-[22%] z-[1000] flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0f2e]/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-cyan-400/40 transition-colors duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Cursor style settings"
      >
        <motion.div
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? (
            <X className="text-lg text-slate-300" />
          ) : (
            <Settings2 className="text-lg text-slate-300" />
          )}
        </motion.div>
      </motion.button>

      {/* ---------- PANEL ----------
          mobile: opens upward above the bottom button
          desktop (sm+): opens downward below the top button */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed bottom-[10rem] left-5 sm:bottom-auto sm:top-[calc(22%+58px)] z-[1000] w-64 bg-[#0b0f2e]/95 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl font-poppins"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-2 pt-1 pb-3">
              <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-slate-400">
                Cursor Style
              </h3>
            </div>

            <div className="space-y-1.5">
              {cursorOptions.map((opt) => {
                const active = cursorType === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => selectCursor(opt.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                      active
                        ? "bg-white/[0.08] border border-cyan-400/30"
                        : "bg-white/[0.02] border border-transparent hover:bg-white/[0.05]"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${opt.swatch}`}
                    >
                      <opt.icon className="w-3.5 h-3.5 text-[#080a20]" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[13px] font-semibold text-white">
                        {opt.label}
                      </span>
                      <span className="block text-[11px] text-slate-500 truncate">
                        {opt.hint}
                      </span>
                    </span>
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
