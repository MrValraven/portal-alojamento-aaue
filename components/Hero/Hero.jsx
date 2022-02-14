import React from "react";
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          Encontra uma casa que
          <br />
          seja perfeita para ti{" "}
        </h1>
        <p>Procura já entre os anuncios de casas e quartos para arrendar</p>
        <Button buttonText="Ver anúncios" disabled={false} url="/anuncios" />
      </div>
      <div className={styles.heroImg}>
        <img src="./assets/giraldo.jpg" alt="" />
      </div>
      <Searchbar className={styles.searchbarHero} />
    </section>
  );
};

export default Hero;
