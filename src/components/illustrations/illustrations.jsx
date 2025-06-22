"use client";
import React from "react";
import clsx from "clsx";
import { useStore } from "@/context/store-context";
import IdleAnimationWrapper from "../idle-animation-wrapper/idle-animation-wrapper";
import PlayerCharacter from "../player-character/player-character";

// --- Layout Constants ---
const ITEMS_PER_LINE = 5;
const START_LEFT_ODD = -97.65;
const START_LEFT_EVEN = START_LEFT_ODD + 30;
const HORIZONTAL_SPACING = 78.125;
const START_TOP = -30;
const VERTICAL_SPACING = 19.5;

// --- Data Generation ---
const generateIllustrations = () => {
  const illustrations = [];
  const imageSetCounts = [16, 16, 7];
  let idCounter = 1;

  imageSetCounts.forEach((count) => {
    for (let i = 1; i <= count; i++) {
      const illustration = {
        id: idCounter,
        src: `/assets/photo${i}.webp`,
      };
      // Add custom component for the 22nd illustration
      if (idCounter === 22) {
        illustration.customComp = PlayerCharacter;
      }
      illustrations.push(illustration);
      idCounter++;
    }
  });
  return illustrations;
};

const illustrations = generateIllustrations();
const totalLines = Math.ceil(illustrations.length / ITEMS_PER_LINE);

const IllustrationItem = ({ illustration, index, currentPage }) => {
  const currentLine = Math.floor(index / ITEMS_PER_LINE);
  const currentIndexInLine = index % ITEMS_PER_LINE;
  const isEvenLine = currentLine % 2 !== 0;

  const left =
    (isEvenLine ? START_LEFT_EVEN : START_LEFT_ODD) +
    HORIZONTAL_SPACING * currentIndexInLine;
  const top = START_TOP + VERTICAL_SPACING * currentLine;

  const isFirstPage = currentPage === 0;
  const isSecondPage = currentPage === 1;
  const isLastPage = currentPage === 2;

  const getCharacterState = () => {
    if (isSecondPage) return "laydown";
    if (isLastPage) return "walk";
    return undefined;
  };

  if (illustration.customComp) {
    const CustomComponent = illustration.customComp;
    return (
      <div
        className="absolute w-full transform scale-[1.2]"
        style={{ zIndex: index }}
      >
        <IdleAnimationWrapper delay={0.05 * currentLine} stop={!isFirstPage}>
          <CustomComponent characterState={getCharacterState()} />
        </IdleAnimationWrapper>
      </div>
    );
  }

  return (
    <div
      className={clsx("absolute w-full transition-all")}
      style={{
        transform: `translate(${left}%, ${top}%)`,
        zIndex: index,
      }}
    >
      <div
        className="transition-all duration-1000"
        style={{
          transform: isFirstPage
            ? "translate(0, 0)"
            : "translate(200vw, 200vh)",
          transitionDelay: `${0.03 * (totalLines - currentLine)}s`,
        }}
      >
        <IdleAnimationWrapper delay={0.05 * currentLine} stop={!isFirstPage}>
          <img
            src={illustration.src}
            className="w-full"
            alt={`Illustration ${illustration.id}`}
          />
        </IdleAnimationWrapper>
      </div>
    </div>
  );
};

// --- Main Illustrations Component ---
const Illustrations = () => {
  const { currentSection } = useStore();

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="w-[1024px] lg:w-[600px] aspect-[1/2] transition-all">
        <div className="relative">
          {illustrations.map((illustration, index) => (
            <IllustrationItem
              key={illustration.id}
              illustration={illustration}
              index={index}
              currentPage={currentSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
