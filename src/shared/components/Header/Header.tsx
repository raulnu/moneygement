import { useState } from "react";
import styles from "./header.module.scss";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const [isHamburgerActive, setIsHamburgerActivated] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Moneygement</h1>
        <button
          className={`${styles.header__hamburger} ${isHamburgerActive ? styles["header__hamburger--activated"] : ""}`}
          onClick={() => setIsHamburgerActivated(!isHamburgerActive)}
        >
          <div className={styles["header__hamburger-line"]}></div>
          <div className={styles["header__hamburger-line"]}></div>
          <div className={styles["header__hamburger-line"]}></div>
        </button>
      </header>
      <Navigation isHamburgerActive={isHamburgerActive} />
    </>
  );
}
