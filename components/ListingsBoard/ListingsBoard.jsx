import React from "react";
import ListingCard from "../ListingCard/ListingCard";

import listings from "../../static/mockAnuncios.json";

import styles from "./ListingsBoard.module.scss";

const ListingsBoard = () => {
  const newestListings = listings.splice(0, 4);
  return (
    <div className={styles.listingBoard}>
      {newestListings.map((listing) => (
        <ListingCard
          key={listing.uuid}
          uuid={listing.uuid}
          type={listing.type}
          title={listing.title}
          address={listing.endereco}
          price={listing.price}
          numberOfBathrooms={listing.numero_casas_banho}
          numberOfRooms={listing.numero_quartos_disponiveis}
        />
      ))}
    </div>
  );
};

export default ListingsBoard;
