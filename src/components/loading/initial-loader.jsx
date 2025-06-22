"use client";
import { useStore } from "@/context/store-context";
import clsx from "clsx";

import styles from "./loader.module.scss";

const InitialLoader = () => {
  const { isPageLoaded } = useStore();

  return (
    <div
      className={clsx(styles.loadingOverlay, {
        [styles.loaded]: isPageLoaded,
      })}
    >
      <img src="/assets/loading.webp" alt="Loading animation" />
    </div>
  );
};

export default InitialLoader;
