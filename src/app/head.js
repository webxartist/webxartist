export default function Head() {
  return (
    <>
      {/* Viewport & Performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Webxartist",
            url: "https://www.webxartist.com",
            logo: "https://www.webxartist.com/logo.png",
            description:
              "Webxartist provides expert web development, design, and branding services.",
            sameAs: [
              "https://www.facebook.com/webxartist",
              "https://www.instagram.com/webxartist",
              "https://twitter.com/webxartist",
              "https://www.linkedin.com/company/webxartist",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+918169413149",
              contactType: "Customer Service",
              areaServed: "Global",
              availableLanguage: ["English", "Hindi"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "WebXArtist Agency, Mumbra-Kausa, Thane",
              addressLocality: "Thane",
              postalCode: "400612",
              addressCountry: "India",
            },
          }),
        }}
      />

      {/* Google Analytics (Optional - replace ID) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXX-X"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXXX-X');
          `,
        }}
      />
    </>
  );
}
