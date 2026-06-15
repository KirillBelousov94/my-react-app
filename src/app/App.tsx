import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import RequestCard from "../widgets/RequestCard";
import Search from "../widgets/Search";
import Filters from "../widgets/Filters";
import Statistics from "../widgets/Statistics";

function App() {
  interface RepairRequest {
    idRequest: number;
    name: string;
    description: string;
    status: string;
    priority: string;
    date: string;
  }

  const requestCards: RepairRequest[] = [
    { idRequest: 1, name: "Иванов П.С", description: "Замена лампочек в коридоре", status: "В работе", priority: "Средний", date: "12.06.2026" },
    { idRequest: 2, name: "Смирнова А.К", description: "Телефон", status: "Завершено", priority: "Высокий", date: "13.06.2026" },
    {
      idRequest: 3, name: "Кузнецов Д.В", description: "Не работает интернет", status: "Новая", priority: "Высокий", date: "14.06.2026"
    },
    {
      idRequest: 4, name: "Орлова М.С", description: "Замена клавиатуры", status: "В работе", priority: "Низкий", date: "14.06.2026"
    },
    {
      idRequest: 5, name: "Петров А.А", description: "Проблема с Windows", status: "Отменена", priority: "Средний", date: "15.06.2026"
    }
  ];

  return (
    <div className="bg-zinc-900">
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
        <Header />
        <main className="flex-1">

          <div className="flex text-white gap-4" >
            <Search />
            <Filters />
          </div>


          <Statistics
            requests={requestCards}
          />



          {requestCards.map((card) => (
            <RequestCard
              key={card.idRequest}
              idRequest={card.idRequest}
              name={card.name}
              description={card.description}
              status={card.status}
              numberRequest={card.idRequest}
              priority={card.priority}
              date={card.date}
            />))}
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;