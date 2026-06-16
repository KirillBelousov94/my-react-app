import type { IRepairRequest } from "../entities/model";

interface RequestDetailsProps {
  request: IRepairRequest;
  onClose: () => void;
}

function RequestDetails({ request, onClose }: RequestDetailsProps) {
  return (
    <div className="w-80 bg-white rounded-xl p-5 m-2 h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Заявка #{request.idRequest}</h2>
        <button onClick={onClose} className="text-zinc-500">✕</button>
      </div>
      <p className="mb-2"><span className="font-medium">Клиент:</span> {request.name}</p>
      <p className="mb-2"><span className="font-medium">Описание:</span> {request.description}</p>
      <p className="mb-2"><span className="font-medium">Статус:</span> {request.status}</p>
      <p className="mb-2"><span className="font-medium">Приоритет:</span> {request.priority}</p>
      <p className="mb-2"><span className="font-medium">Дата:</span> {request.date}</p>
    </div>
  );
}
export default RequestDetails;