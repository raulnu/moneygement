import styles from "./header.module.scss";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import type { IHeaderProps } from "./header.d";

export default function Header({
  isHamburgerActive,
  toggleHamburger,
}: IHeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Moneygement</h1>
        <HamburgerButton
          isHamburgerActive={isHamburgerActive}
          toggleHamburger={toggleHamburger}
        />
      </header>
    </>
  );
}
