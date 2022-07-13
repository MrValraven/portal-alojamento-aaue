import React, { useState, useEffect, useCallback } from "react";

import SearchInput from "../SearchInput/SearchInput";
import ListingCard from "../ListingCard/ListingCard";

import listingsArray from "../../static/mockAnuncios.json";

import styles from "./AnunciosOverview.module.scss";

const AnunciosOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [anuncios, setAnuncios] = useState([]);

  const listings = listingsArray;

  const filterItemsBySearchInput = useCallback(
    (itemsArray) => {
      return itemsArray.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.endereco.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.price.toString().includes(searchQuery)
      );
    },
    [searchQuery]
  );

  useEffect(() => {
    if (searchQuery !== "") {
      setAnuncios(filterItemsBySearchInput(listings));
    }
  }, [searchQuery, filterItemsBySearchInput, listings]);
  useEffect(() => {
    setAnuncios(listings);
    console.log(listings);
  }, [listings, filterItemsBySearchInput]);

  return (
    <div className={styles.anunciosOverview}>
      <h1>Anúncios: Quartos</h1>
      <SearchInput handleChange={handleChange} />
      <p>{searchQuery}</p>
      <div className={styles.anunciosBoard}>
        {anuncios.map((anuncio) => (
          <ListingCard
            key={anuncio.uuid}
            uuid={anuncio.uuid}
            type={anuncio.type}
            title={anuncio.title}
            address={anuncio.endereco}
            price={anuncio.price}
            numberOfBathrooms={anuncio.numero_casas_banho}
            numberOfRooms={anuncio.numero_quartos_disponiveis}
          />
        ))}
      </div>
    </div>
  );
};

export default AnunciosOverview;
