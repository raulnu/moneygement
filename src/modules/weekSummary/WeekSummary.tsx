import weekExpensesImg from "./assets/week-expenses.png";
import styles from "./weekSummary.module.scss";

export default function WeekSummary() {
  return (
    <section className={styles.week_summary}>
      <picture>
        <img src={weekExpensesImg} alt="Week expenses graphic" />
      </picture>
      <div className={`${styles.week_summary__last_days}`}>
        <div>
          <h3 className={`${styles.title}`}>Yesterday</h3>
          <p className={`${styles.amount}`}>250€</p>
        </div>
        <div>
          <h3 className={`${styles.title}`}>Today</h3>
          <p className={`${styles.amount}`}>300€</p>
        </div>
      </div>
    </section>
  );
}
