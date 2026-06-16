import type { IRepairRequest } from "../entities/model";

interface RequestCardProps extends IRepairRequest {
  onClick?: () => void;
}

function RequestCard(props: RequestCardProps) {
  return (
    <div
      onClick={props.onClick}
      className="mx-auto p-5 bg-white m-2 rounded-xl flex justify-between cursor-pointer hover:bg-zinc-100 transition"
    >
      <div>
        <p className="text-2xl font-medium">{props.description}</p>
        <h3>Клиент: {props.name} | Номер заявки #{props.idRequest} | {props.date}</h3>
      </div>
      <div className="text-[15px] my-auto flex flex-row">
        <p className="bg-zinc-400 rounded-xl m-2 p-2 font-medium">{props.status}</p>
        <p className="bg-zinc-400 rounded-xl m-2 p-2 font-medium">{props.priority}</p>
      </div>
    </div>
  );
}
export default RequestCard;