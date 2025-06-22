"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const StickyLogoSection = () => {
  const sectionRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Initialize with 0 opacity
    setOpacity(0);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = rect.top;
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate opacity based on position
      let opacityValue = 1;

      // Fade in when entering from the bottom
      if (scrollPosition > 0) {
        opacityValue = Math.max(0, 1 - scrollPosition / (viewportHeight * 0.5));
      }
      // Fade out when scrolling out the top
      else if (scrollPosition < 0) {
        const scrolledPast = Math.abs(scrollPosition);
        opacityValue = Math.max(0, 1 - scrolledPast / (sectionHeight * 0.5));
      }

      setOpacity(opacityValue);
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-full bg-transparent"
      style={{ opacity }}
    >
      <div className="sticky top-0 left-0 right-0 flex h-screen items-center justify-center">
        <div className="relative z-10 w-full max-w-md px-4">
          <img src="/assets/logo.webp" alt="logo" className="w-full h-auto" />
        </div>
      </div>
    </motion.section>
  );
};

export default StickyLogoSection;
