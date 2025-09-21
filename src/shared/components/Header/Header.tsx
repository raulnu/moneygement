import { useState } from "react";
import styles from "./header.module.scss";
import Navigation from "../Navigation/Navigation";
import HamburgerButton from "../ui/atoms/hamburgerButton/HamburgerButton";

export default function Header() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Moneygement</h1>
        <HamburgerButton
          isHamburgerActive={isHamburgerActive}
          toggleHamburger={toggleHamburger}
        />
      </header>
      <Navigation
        isHamburgerActive={isHamburgerActive}
        toggleHamburger={toggleHamburger}
      />
    </>
  );
}
