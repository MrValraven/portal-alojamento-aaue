import React, { useState } from "react";

import styles from "./AnuncioPage.module.scss";

const AnuncioPage = ({ anuncio }) => {
  /* const [anuncio, setAnuncio] = useState({
    title: "" | anuncioProp.title,
    price: "" | anuncioProp.price,
    endereco: "" | anuncioProp.endereco,
    data_de_publicacao: "" | anuncioProp.data_de_publicacao,
    fotos: [] | anuncioProp.fotos,
    descricao: "" | anuncioProp.descricao,
    genero_aceite: "" | anuncioProp.genero_aceite,
  }); */

  return (
    <div className={styles.anuncioPage}>
      <h1>
        {anuncio.title} | {anuncio.price} €
      </h1>
      <h2>
        {anuncio.endereco} | {anuncio.data_de_publicacao}
      </h2>
      <img src={anuncio.fotos[0]} alt="" />
      <p>{anuncio.descricao}</p>
      <p>Genero: {anuncio.genero_aceite}</p>
    </div>
  );
};

export default AnuncioPage;
