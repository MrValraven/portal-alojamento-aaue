import React, { useState, useEffect } from "react";
import Link from "next/link";

import Button from "../Button/Button";

import styles from "./Form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isFormDataValid, setIsFormDataValid] = useState(false);

  const handleShowPassword = (e) => {
    const passwordInput = e.target.previousElementSibling;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      e.target.textContent = "Esconder";
    } else {
      passwordInput.type = "password";
      e.target.textContent = "Mostrar";
    }
  };

  const handleChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (formData.email.includes("@") && formData.password !== "") {
      setIsFormDataValid(true);
    } else if (isFormDataValid) {
      setIsFormDataValid(false);
    }
  }, [formData]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="nome@email.com"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <span onClick={handleShowPassword}>
          <img src="./assets/open-eye.svg" alt="" />
          <p>Mostrar</p>
        </span>
      </div>
      <p className={styles.forgotPassword}>Esqueceu-se da palavra-passe?</p>
      <Button
        disabled={isFormDataValid ? false : true}
        buttonText="Iniciar sessão"
      />
      <p className={styles.disclaimer}>
        Clique em "Inicar sessão" para concordar com os nossos{" "}
        <Link href="/">Termos de Serviço</Link> e que a nossa{" "}
        <Link href="/">Politica de Privacidade</Link> se aplica a si!
      </p>
    </form>
  );
};

export default Form;
