import React from "react";

import styles from "./GoogleButton.module.scss";

const GoogleButton = () => {
  return (
    <a className={styles.googleButton}>
      <img src="./assets/google.svg" alt="" />
      <p>Continuar com o Google</p>
    </a>
  );
};

export default GoogleButton;
