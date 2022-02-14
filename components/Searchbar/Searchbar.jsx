import React, { useState, useEffect } from "react";

import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  const [searchQueryParameters, setSearchQueryParameters] = useState({
    type: "quarto",
    location: "centro",
    tipology: "t4",
    price: 250,
  });

  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const handleChange = (e) => {
    setSearchQueryParameters((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHover = () => {
    setIsBeingHovered(() => !isBeingHovered);
  };

  useEffect(() => {}, [isBeingHovered]);

  return (
    <>
      <div className={styles.searchbar}>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <select
            name="type"
            id="tipo"
            value={searchQueryParameters.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="casa">Casa</option>
            <option value="quarto">Quarto</option>
          </select>
        </div>
        <div>
          <label htmlFor="localizacao">Localização</label>
          <select
            name="location"
            id="localizacao"
            value={searchQueryParameters.location}
            onChange={(e) => handleChange(e)}
          >
            <option value="centro">Centro Histórico</option>
            <option value="fora">Fora das muralhas</option>
          </select>
        </div>
        <div>
          <label htmlFor="tipologia">Tipologia</label>
          <select
            name="tipology"
            id="tipologia"
            value={searchQueryParameters.tipology}
            onChange={(e) => handleChange(e)}
          >
            <option value="t0">T0</option>
            <option value="t1">T1</option>
            <option value="t2">T2</option>
            <option value="t3">T3</option>
            <option value="t4">T4</option>
            <option value="t5">T5</option>
            <option value="t6+">T6+</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">
            Preço{" "}
            <span>
              {" "}
              | {searchQueryParameters.type === "quarto" ? 100 : 200} até{" "}
              {searchQueryParameters.price}€
            </span>
          </label>
          <div className={styles.price}>
            <input
              name="price"
              type="range"
              min={searchQueryParameters.type === "quarto" ? 100 : 200}
              max={searchQueryParameters.type === "quarto" ? 400 : 1000}
              value={searchQueryParameters.price}
              className="slider"
              id="myRange"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div
          className={styles.searchIcon}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <img src="./assets/search.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
