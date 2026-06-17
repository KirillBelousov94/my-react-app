import { useState } from "react";

import Header from "../shared/Header";
import Footer from "../shared/Footer";
import RequestCard from "../widgets/RequestCard";
import Search from "../features/serach-requests/Search";
import Filters from "../features/filter-requests/ui/Filters";
import Statistics from "../widgets/Statistics";
import RequestDetails from "../widgets/RequestDetails";

import type { IRepairRequest } from "../entities/request/model";


function App() {

  const requestCards: IRepairRequest[] = [
    { idRequest: 1, name: "Иванов П.С", description: "Замена лампочек в коридоре", status: "В работе", priority: "Средний", date: "12.06.2026" },
    { idRequest: 2, name: "Смирнова А.К", description: "Телефон", status: "Завершено", priority: "Высокий", date: "13.06.2026" },
    { idRequest: 3, name: "Кузнецов Д.В", description: "Не работает интернет", status: "Новая", priority: "Высокий", date: "14.06.2026" },
    { idRequest: 4, name: "Орлова М.С", description: "Замена клавиатуры", status: "В работе", priority: "Низкий", date: "14.06.2026" },
    { idRequest: 5, name: "Петров А.А", description: "Проблема с Windows", status: "Отменена", priority: "Средний", date: "15.06.2026" }
  ];

  const [selectedRequest, setSelectedRequest] = useState<IRepairRequest | null>(null);

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

          <div className="flex gap-4">
            <div className="flex-1">
              {requestCards.map((card) => (
                <RequestCard
                  key={card.idRequest}
                  idRequest={card.idRequest}
                  name={card.name}
                  description={card.description}
                  status={card.status}
                  priority={card.priority}
                  date={card.date}
                  onClick={() => setSelectedRequest(card)}
                />))}
            </div>

            {selectedRequest && (
              <RequestDetails
                request={selectedRequest}
                onClose={() => setSelectedRequest(null)}
              />
            )}
          </div>
        </main>

        <Footer />

      </div>
    </div>
  )
}

export default App;