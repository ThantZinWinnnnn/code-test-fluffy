"use client";
import React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useStore } from "@/context/store-context";

const SectionContainer = ({ children }) => {
  const { changeSection, loadSection } = useStore();

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = parseFloat(latest.toFixed(2));

    if (progress > 0.7 && progress <= 1) {
      changeSection(2);
    } else if (progress > 0.3 && progress < 0.7) {
      changeSection(1);
    } else {
      changeSection(0);
    }
  });

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      loadSection(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadSection]);

  return <div>{children}</div>;
};

export default SectionContainer;
