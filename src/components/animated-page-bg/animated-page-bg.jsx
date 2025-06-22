"use client";
import React from "react";
import styles from "./animated-page-bg.module.scss";
import clsx from "clsx";
import { useStore } from "@/context/store-context";

const AnimatedPageBackground = () => {
  const { currentSection } = useStore();

  const isFaunaPageActive = currentSection === 2;
  const areBubblesVisible = currentSection > 0;

  const bubbleLayerClasses = clsx(styles.backgroundLayer, styles.bubbles, {
    [styles.horizontalScroll]: isFaunaPageActive,
    [styles.verticalScroll]: !isFaunaPageActive && areBubblesVisible,
    [styles.visible]: areBubblesVisible,
  });

  const faunaLayerClasses = clsx(styles.backgroundLayer, styles.fauna, {
    [styles.visible]: isFaunaPageActive,
  });

  const paperClipClasses = clsx(styles.paperClipContainer, {
    [styles.active]: isFaunaPageActive,
  });

  const hangingCatClasses = clsx(styles.hangingCat, {
    [styles.catPositionPage2]: isFaunaPageActive,
    [styles.catPositionDefault]: !isFaunaPageActive,
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className={bubbleLayerClasses} />

      <div className={faunaLayerClasses} />

      <div className="relative h-full">
        <div className={paperClipClasses}>
          <div className={styles.paperClipEffect}>
            <div className={styles.paperClipTopSheet} />
            <div className={styles.paperClipBottomSheet}>
              <div className={styles.paperClipInnerSheet} />
            </div>
          </div>
          <img
            src="/assets/burasagari.webp"
            className={hangingCatClasses}
            alt="Hanging Cat Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedPageBackground;
