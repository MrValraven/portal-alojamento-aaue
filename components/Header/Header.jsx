import React from "react";

import Link from "next/link";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.navItem}>
        <div className={styles.logo}>
          <img src="/assets/logo.svg" alt="" />
          <p>Portal do Alojamento</p>
        </div>
      </Link>
      <nav>
        <ul>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
          <Link href="/anuncios" className={styles.navItem}>
            Publicações
          </Link>
          <li>Login / Registrar</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
