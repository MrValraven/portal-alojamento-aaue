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
      <h2>Praça do giraldo sem pressas, Évora 7000-534 | 14 Fevereiro, 2022</h2>
      <img
        src="https://img3.idealista.pt/blur/WEB_DETAIL-XL-L/0/id.pro.pt.image.master/0b/b5/07/163996366.jpg"
        alt=""
      />
      <p>Alugo casa catita em pleno centro historico de evora</p>
      <p>
        <span>Tipologia:</span> T3
      </p>
      <p>
        <span>Inquilinos:</span> Estudantes / Trabalhadores
      </p>
      <p>
        <span>Genero:</span> M / F
      </p>
      <p>
        <span>Mobilado:</span> Sim
      </p>
      <p>
        <span>Sala:</span> Sim
      </p>
      <p>
        <span>Cozinha:</span> Sim
      </p>
      <p>
        <span>Casas de banho:</span> 2
      </p>
      <p>
        <span>Pode-se fumar dentro de casa?:</span> Não
      </p>
      <p>
        <span>São permitidos casais?:</span> Não
      </p>
      <p>
        <span>🏳️‍🌈 LGBT friendly:</span> Sim
      </p>

      <div className="contactForm">
        <h1>Envia uma mensagem ao criador do anuncio</h1>
        <h2>Senhor Antonio das couves</h2>
        <h3>Tel: +351 912345678</h3>
        <form>
          <label htmlFor="nome">Nome *</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea name="mensagem"></textarea>
        </form>
      </div>

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
