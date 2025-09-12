import Footer from "../../../shared/components/Footer/Footer";
import Header from "../../../shared/components/Header/Header";
import "./page.module.scss";

function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <h2>Dashboard</h2>
        <section>
          <h3>Account Balance</h3>
          <p>2500,35€</p>
        </section>
        <section>
          <h3>This Month</h3>
          <div>
            <h4>Spent Budget</h4>
            <p>500,50€</p>
          </div>
          <div>
            <h4>Remaining Budget</h4>
            <p>499,50</p>
          </div>
        </section>
        <section>
          <h3>This week</h3>
          <img src="#" alt="Week expenses graphic" />
          <div>
            <h4>Yesterday</h4>
            <p>250€</p>
          </div>
          <div>
            <h4>Today</h4>
            <p>300€</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
