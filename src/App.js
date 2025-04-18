import "./index.css";
import pizzaData from "./pizzaData.js";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header
function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.{" "}
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzas={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu yet</p>
      )}
    </main>
  );
}

// Pizzas component
function Pizza({ pizzas }) {
  return (
    <li className={`pizza ${pizzas.soldOut ? "sold-out" : ""}`}>
      <img src={pizzas.photoName} alt={pizzas.name} />

      <div>
        <h3>{pizzas.name}</h3>

        <p>{pizzas.ingredients}</p>

        <span>{pizzas.soldOut ? "Sold Out" : pizzas.price}</span>
      </div>
    </li>
  );
}

// Footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <Order openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
    </footer>
  );
}

function Order({ openHour, closeHour, isOpen }) {
  return (
    <div className="order">
      {isOpen ? (
        <>
          <p className="open">
            We're open untill {closeHour}:00. Come visit us or order online
          </p>

          <button className="btn">Order</button>
        </>
      ) : (
        <p className="closed">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </div>
  );
}
