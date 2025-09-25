import WeekSummary from "../../weekSummary/WeekSummary";
import styles from "./page.module.scss";

function Dashboard() {
  return (
    <div className={`${styles.dashboard}`}>
      <section className={`${styles["dashboard__account-balance"]}`}>
        <h2 className={`${styles.title}`}>Account Balance</h2>
        <p className={`${styles.amount}`}>2500,35€</p>
      </section>
      <section className={`${styles["dashboard__this-month"]}`}>
        <h2 className={`${styles.title}`}>This Month</h2>
        <div className={`${styles.dashboard__budget}`}>
          <div>
            <h3 className={`${styles.title}`}>Spent Budget</h3>
            <p className={`${styles.amount}`}>500,50€</p>
          </div>
          <div>
            <h3 className={`${styles.title}`}>Remaining Budget</h3>
            <p className={`${styles.amount}`}>499,50</p>
          </div>
        </div>
      </section>
      <section className={`${styles["dashboard__week-summary"]}`}>
        <WeekSummary />
      </section>
    </div>
  );
}

export default Dashboard;
