import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.aaue}>
        <img src="./assets/aaue.png" alt="" />
        <a href="https://aaue.pt">
          Este é um projeto da <br /> Associação Académica da Universidade de
          Évora
        </a>
      </div>
    </footer>
  );
};

export default Footer;
