import React from "react";
import { useRouter } from "next/router";
import styles from "./ListingCard.module.scss";
import Image from "next/image";

const ListingCard = ({
  uuid,
  title,
  address,
  numberOfRooms,
  numberOfBathrooms,
  price,
  type,
}) => {
  const router = useRouter();

  const navigateToOtherPage = () => {
    if (uuid) {
      router.push({
        pathname: "/anuncios/[id]",
        query: { id: uuid },
      });
    }
  };

  return (
    <div className={styles.listingCard} onClick={navigateToOtherPage}>
      <Image
        src="https://img3.idealista.pt/blur/WEB_DETAIL-XL-L/0/id.pro.pt.image.master/0b/b5/07/163996366.jpg"
        alt="room image"
        width="250"
        height="250"
      />
      <div className={styles.titleAndSubtitle}>
        <h2>{title}</h2>
        <p className={styles.address}>{address}</p>
      </div>
      <div className={styles.listingText}>
        <div className={styles.assets}>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <Image src="/assets/bed.svg" alt="" width="20" height="20" />
              <p>{numberOfRooms}</p>
            </div>
            <p>quarto{numberOfRooms > 1 ? "s" : ""}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <Image src="/assets/bathroom.svg" alt="" width="20" height="20" />
              <p>{numberOfBathrooms}</p>
            </div>
            <p>WC{numberOfBathrooms > 1 ? "s" : ""}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.maxDetails}>
              <Image src="/assets/preco.svg" alt="" width="20" height="20" />
              <p>{price}</p>
            </div>
            <p>{type === "quarto" ? "/ quarto" : "total"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
