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
      <h1>Titulo do Anuncio | 250 €</h1>
      <h2>Praça do giraldo sem pressas | 14 Fevereiro, 2022</h2>
      <img
        src="https://img3.idealista.pt/blur/WEB_DETAIL-XL-L/0/id.pro.pt.image.master/0b/b5/07/163996366.jpg"
        alt=""
      />
      <p>Alugo casa catita em pleno centro historico de evora</p>
      <p>Genero: M / F</p>

      {/* <div className={styles.anuncioPage}>
      <h1>
        {anuncio.title} | {anuncio.price} €
      </h1>
      <h2>
        {anuncio.endereco} | {anuncio.data_de_publicacao}
      </h2>
      <img src={anuncio.fotos[0]} alt="" />
      <p>{anuncio.descricao}</p>
      <p>Genero: {anuncio.genero_aceite}</p>
    </div> */}
    </div>
  );
};

export default AnuncioPage;
