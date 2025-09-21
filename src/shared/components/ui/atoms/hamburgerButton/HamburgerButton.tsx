import styles from "./hamburgerButton.module.scss";
import type { HamburgerButtonProps } from "./hamburgerButton.d";
import type { JSX } from "react/jsx-dev-runtime";

export default function HamburgerButton({
  isHamburgerActive,
  toggleHamburger,
}: HamburgerButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.hamburger} ${isHamburgerActive ? styles["hamburger--activated"] : ""}`}
      onClick={toggleHamburger}
    >
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
      <div className={styles.hamburger__line}></div>
    </button>
  );
}
