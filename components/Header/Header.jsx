import React, { useState, useEffect } from "react";

import Link from "next/link";

import styles from "./Header.module.scss";
import Modal from "../Modal/Modal";

const Header = () => {
  const [activateModal, setActivateModal] = useState(false);

  const toggleModal = () => {
    setActivateModal(!activateModal);
  };

  useEffect(() => {
    if (activateModal) {
      document.querySelector("body").classList.add("modalIsToggled");
    } else {
      document.querySelector("body").classList.remove("modalIsToggled");
    }
  }, [activateModal]);

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
          <li onClick={toggleModal}>Login / Registrar</li>
          {activateModal ? <Modal toggleModal={toggleModal} /> : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
