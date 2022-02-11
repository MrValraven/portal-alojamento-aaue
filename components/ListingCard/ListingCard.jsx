import React from "react";

import styles from "./ListingCard.module.scss";

const ListingCard = () => {
  return (
    <div className={styles.listingCard}>
      <img
        src="https://img3.idealista.pt/blur/WEB_DETAIL-XL-L/0/id.pro.pt.image.master/0b/b5/07/163996366.jpg"
        alt="room image"
        width="250"
      />
      <div className={styles.listingText}>
        <h2>T6 no centro histórico de Évora</h2>
        <p className={styles.address}>Rua Gabriel Vitor do Monte Pereira</p>
        <div className={styles.assets}>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <img src="./assets/bed.svg" alt="" />
              <p>3</p>
            </div>
            <p>quartos</p>
          </div>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <img src="./assets/bathroom.svg" alt="" />
              <p>3</p>
            </div>
            <p>WCs</p>
          </div>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <img src="./assets/preco.svg" alt="" />
              <p>250</p>
            </div>
            <p>/ quarto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
