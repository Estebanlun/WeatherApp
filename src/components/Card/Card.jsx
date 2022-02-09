import React from 'react';
import styles from "./Card.module.css";


export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardButtonAndCityName} >
      <button className={styles.cardButton} onClick={onClose}>X</button>
      <h4 className={styles.cardCityName}>{name}</h4>
      </div>

      <div className={styles.cardImgAndTemp}>

      <div className={styles.cardImage}>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt= {"img"}/>
      </div>
      <div className={styles.cardMin} >
        <p>Min</p>
        <p>{min}ºC</p>
      </div>
      <div className={styles.cardMax} >  
        <p>Max</p>
        <p>{max}ºC</p>
      </div>  
      
      </div>
    </div>
  )
};