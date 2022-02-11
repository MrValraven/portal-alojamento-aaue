import React from "react";
import ListingCard from "../ListingCard/ListingCard";

import styles from "./ListingsBoard.module.scss";

const ListingsBoard = () => {
  return (
    <div className={styles.listingBoard}>
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
    </div>
  );
};

export default ListingsBoard;
