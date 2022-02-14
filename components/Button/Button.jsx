import React from "react";

import { useRouter } from "next/router";

import styles from "./Button.module.scss";

const Button = ({ buttonText, disabled, url }) => {
  const router = useRouter();

  const navigateToOtherPage = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={navigateToOtherPage}
    >
      {buttonText}
    </button>
  );
};

export default Button;
