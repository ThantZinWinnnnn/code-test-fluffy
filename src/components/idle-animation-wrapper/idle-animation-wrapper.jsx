import React from "react";
import clsx from "clsx";
import classes from "./idle-animation-wrapper.module.scss";

const IdleAnimationWrapper = ({ children, delay = 0, stop = false }) => {
  return (
    <div
      className={clsx(classes.transformAnimate, {
        [classes.stop]: stop,
      })}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default React.memo(IdleAnimationWrapper);
