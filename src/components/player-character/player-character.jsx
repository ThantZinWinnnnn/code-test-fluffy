import React from "react";
import clsx from "clsx";
import classes from "./player.module.scss";

const characterParts = [
  { name: "hair", src: "/assets/girl-hair.png", alt: "hair" },
  { name: "neck", src: "/assets/girl-neck.png", alt: "neck" },
  { name: "head", src: "/assets/girl-head.png", alt: "head" },
  { name: "headphone", src: "/assets/girl-head-phone.png", alt: "headphone" },
  { name: "neko", src: "/assets/girl-neko.png", alt: "neko" },
  { name: "leftFoot", src: "/assets/girl-foot.png", alt: "left foot" },
  { name: "midFoot", src: "/assets/girl-foot.png", alt: "mid foot" },
  { name: "rightFoot", src: "/assets/girl-foot.png", alt: "right foot" },
  {
    name: "rightFootAlt",
    src: "/assets/girl-right-foot.png",
    alt: "right foot alt",
  },
  { name: "blouseLeft", src: "/assets/blouse-left.png", alt: "blouse left" },
  { name: "blouseRight", src: "/assets/blouse-right.png", alt: "blouse right" },
  { name: "rightHand", src: "/assets/girl-right-hand.png", alt: "right hand" },
  { name: "hand", src: "/assets/girl-hand.png", alt: "hand" },
  { name: "body", src: "/assets/girl-body.png", alt: "body" },
  { name: "handLeft", src: "/assets/girl-left-hand.png", alt: "hand left" },
  { name: "leftHand", src: "/assets/girl-hand-left.png", alt: "left hand" },
];

const PlayerCharacter = ({ characterState }) => {
  return (
    <div
      className={clsx(classes.playerCharacter, {
        [classes.laydown]: characterState === "laydown",
        [classes.walk]: characterState === "walk",
      })}
      data-character-state={characterState}
    >
      {characterParts.map((part) => (
        <div
          key={part.name}
          className={`absolute inset-0 ${classes[part.name]}`}
        >
          <img src={part.src} alt={part.alt} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(PlayerCharacter);
