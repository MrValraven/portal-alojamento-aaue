import React from "react";
import Form from "../Form/Form";
import GoogleButton from "../GoogleButton/GoogleButton";

import styles from "./Modal.module.scss";

const Modal = ({ toggleModal }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <img
          src="./assets/close.svg"
          className={styles.closeButton}
          onClick={toggleModal}
        ></img>
        <div className={styles.otherContainer}>
          <h1>
            Ainda não tem um conta?
            <br /> Complete já o seu registro!
          </h1>
        </div>
        <div className={styles.loginContainer}>
          <h1>Iniciar sessão</h1>
          <div className={styles.googleContainer}>
            <GoogleButton />
            <div className={styles.orContainer}>
              <hr />
              <p>Ou</p>
              <hr />
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
