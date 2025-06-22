"use client";
import React, { useRef, Children, cloneElement, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useStore } from "@/context/store-context";

const SectionContainer = ({ children }) => {
  const { changeSection, loadSection } = useStore();
  const containerRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState({});
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

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedSections = { ...visibleSections };

        entries.forEach((entry) => {
          const id = entry.target.dataset.sectionId;
          if (id) {
            let opacity = entry.intersectionRatio;

            if (entry.boundingClientRect.top > 0) {
              opacity = Math.min(entry.intersectionRatio * 1.5, 1);
            } else if (entry.boundingClientRect.top < 0) {
              opacity = Math.min(entry.intersectionRatio * 1.5, 1);
            }

            updatedSections[id] = opacity;
          }
        });

        setVisibleSections(updatedSections);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-10% 0px",
      }
    );

    const sections =
      containerRef.current?.querySelectorAll("[data-section-id]");
    if (sections) {
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  const wrappedChildren = Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === "section") {
      return (
        <motion.section
          {...child.props}
          data-section-id={index}
          // style={{
          //   ...child.props.style,
          //   opacity:
          //     visibleSections[index] !== undefined ? visibleSections[index] : 1,
          // }}
        >
          {child.props.children}
        </motion.section>
      );
    }
    return child;
  });

  return <div ref={containerRef}>{wrappedChildren}</div>;
};

export default SectionContainer;
