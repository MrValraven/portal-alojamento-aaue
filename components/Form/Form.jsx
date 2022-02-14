import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import styles from "./Form.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isFormDataValid, setIsFormDataValid] = useState(false);

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
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={handleChange} />
      <Button
        disabled={isFormDataValid ? false : true}
        buttonText="Iniciar sessão"
      />
    </form>
  );
};

export default Form;
