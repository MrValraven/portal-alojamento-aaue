import React from "react";

import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/logo.svg" alt="" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Publicações</li>
          <li>Login / Registar</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
