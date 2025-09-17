import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>Developed By Raúl Navarro Uribe</p>
      <p>Whatever Moneygement Copyright</p>
    </footer>
  );
}
