import React, { memo } from "react";
import styles from "./animated-typography.module.scss";

const AnimatedTypography = ({
  lines,
  animationDelayFactor = 0.15,
  characterSpacing = 2,
  lineDelay = 0.8,
}) => {
  return (
    <div className={styles.container}>
      {lines.map((line, lineIndex) => (
        <p
          key={`line-${lineIndex}`}
          className={styles.textLine}
          style={{
            animationDelay: `${lineIndex * lineDelay}s`,
          }}
        >
          {Array.from(line).map((character, charIndex) => (
            <span
              key={`char-${lineIndex}-${charIndex}`}
              className={styles.character}
              style={{
                animationDelay: `${
                  (charIndex % 10) * animationDelayFactor +
                  lineIndex * lineDelay
                }s`,
                margin: `0 ${characterSpacing}px`,
              }}
            >
              {character}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default memo(AnimatedTypography);
