import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import {BsSearch} from 'react-icons/bs'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [input, setInput] = useState("");

  function handleOnSerach(e) {
    e.preventDefault(e);
    if (typeof onSearch === "function") {
      onSearch(input);
    }
    setInput("");
  }

  function handleOnChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.spanContainer}>
        <span className={styles.spanOne}> WeatherApp </span>
        <span className={styles.spanTwo}> by Esteban Luna </span>
      </div>
      <div className={styles.inputButton}>
        <input
          value={input}
          id="input"
          type={"text"}
          placeholder={"Coloque su Ciudad"}
          onChange={handleOnChange}
          className={styles.input}
        />
        <button className={styles.button} onClick={handleOnSerach}>
          <BsSearch/>
        </button>
      </div>
    </div>
  );
}
