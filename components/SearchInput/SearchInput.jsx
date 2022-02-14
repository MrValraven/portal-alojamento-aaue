import React from "react";

import styles from "./SearchInput.module.scss";

const SearchInput = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisa por nome, tipologia, preço"
      className={styles.searchInput}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
