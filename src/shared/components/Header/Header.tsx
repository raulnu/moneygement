import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [isHamburgerActivated, setIsHamburgerActivated] = useState(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Moneygement</h1>
      <button
        className={`${styles.header__hamburger} ${isHamburgerActivated ? styles["header__hamburger--activated"] : ""}`}
        onClick={() => setIsHamburgerActivated(!isHamburgerActivated)}
      >
        <div className={styles["header__hamburger-line"]}></div>
        <div className={styles["header__hamburger-line"]}></div>
        <div className={styles["header__hamburger-line"]}></div>
      </button>
    </header>
  );
}
