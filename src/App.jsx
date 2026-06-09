import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const cards = [
    { id: 1, title: "HTML", description: "Язык разметки" },
    { id: 2, title: "CSS", description: "Стилизация сайта" },
    { id: 3, title: "JavaScript", description: "Логика сайта" }
  ];

  return (
    <>
      <Header />
      <Hero />

      <h2>Мои технологии</h2>

      {cards.map((card) => (
        <div key={card.id}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default App;