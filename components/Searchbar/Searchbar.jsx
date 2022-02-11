import React, { useState } from "react";

import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const [searchQueryParameters, setsearchQueryParameters] = useState({});

  return (
    <>
      <div className={styles.searchbar}>
        <div className="localizacao">
          <label htmlFor="localizacao">Localização</label>
          <select name="localizacao" id="localizacao">
            <option value="centro">Centro Histórico</option>
            <option value="fora">Fora das muralhas</option>
          </select>
        </div>
        <div className="tipologia">
          <label htmlFor="tipologia">Tipologia</label>
          <select name="tipologia" id="tipologia">
            <option value="t0">T0</option>
            <option value="t1">T1</option>
            <option value="t2">T2</option>
            <option value="t3">T3</option>
            <option value="t4">T4</option>
            <option value="t5">T5</option>
            <option value="t6+">T6+</option>
          </select>
        </div>
        <div className="budget">
          <label htmlFor="budget">Preço</label>
          <input
            type="range"
            min="100"
            max="1000"
            className="slider"
            id="myRange"
          />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
