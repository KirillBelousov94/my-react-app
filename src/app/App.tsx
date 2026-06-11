import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

function App() {
  const cards = [
    { id: 1, title: "Телефон", price: 1000 },
    { id: 2, title: "Планшет", price: 5000 },
    { id: 3, title: "Ноутбук", price: 10000 }
  ];

  return (
    <>
      <Header />

      <h2>Техника которую можем  починить</h2>
      {cards.map((card) => (
        <div className="card p-5" key={card.id}>
          <h3>{card.title}</h3>
          <p className="text-red-600">{card.price}</p>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default App;