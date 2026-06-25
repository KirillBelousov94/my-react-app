import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import RequestCard from "../widgets/RequestCard";
import Search from "../features/search-requests/Search";
import Filters from "../features/filter-requests/ui/Filters";
import Statistics from "../widgets/Statistics";
import RequestDetails from "../widgets/RequestDetails";
import type { IRepairRequest } from "../entities/request/model";
import api from "../shared/api";

// Преобразуем данные с бэка в формат фронта
interface RawRequest {
  id: number;
  description: string;
  status: string;
  priority: string;
  date: string;
  user?: { name: string };
}

function mapRequest(r: RawRequest): IRepairRequest {

  const statusMap: Record<string, string> = {
    NEW: "Новая",
    IN_PROGRESS: "В работе",
    DONE: "Завершено",
    CANCELLED: "Отменена",
  };
  const priorityMap: Record<string, string> = {
    LOW: "Низкий",
    MEDIUM: "Средний",
    HIGH: "Высокий",
  };
  return {
    idRequest: r.id,
    name: r.user?.name ?? "Неизвестно",
    description: r.description,
    status: statusMap[r.status] ?? r.status,
    priority: priorityMap[r.priority] ?? r.priority,
    date: new Date(r.date).toLocaleDateString("ru-RU"),
  };
}

function HomePage() {
  const [selectedRequest, setSelectedRequest] = useState<IRepairRequest | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const { data: requests = [], isLoading, isError } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const { data } = await api.get("/api/requests");
      return data.map(mapRequest);
    },
  });

  const filteredRequests = requests.filter((r: IRepairRequest) => {
    const matchSearch =
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || r.status === statusFilter;
    const matchPriority = priorityFilter === "all" || r.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
        <Header />
        <main className="flex-1">

          <div className="flex text-white gap-4">
            <Search value={search} onChange={setSearch} />
            <Filters
              status={statusFilter}
              priority={priorityFilter}
              onStatusChange={setStatusFilter}
              onPriorityChange={setPriorityFilter}
            />
          </div>

          <Statistics requests={requests} />

          <div className="flex gap-4">
            <div className="flex-1">
              {isLoading && (
                <p className="text-zinc-400 text-center mt-8">Загрузка...</p>
              )}
              {isError && (
                <p className="text-red-400 text-center mt-8">Ошибка загрузки. Войдите в систему.</p>
              )}
              {!isLoading && filteredRequests.length === 0 && (
                <p className="text-zinc-400 text-center mt-8">Заявки не найдены</p>
              )}
              {filteredRequests.map((card: IRepairRequest) => (
                <RequestCard
                  key={card.idRequest}
                  {...card}
                  onClick={() => setSelectedRequest(card)}
                />
              ))}
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
  );
}

export default HomePage;