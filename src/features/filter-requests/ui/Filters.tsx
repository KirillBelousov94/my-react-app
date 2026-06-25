interface FiltersProps {
  status: string;
  priority: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

function Filters({ status, priority, onStatusChange, onPriorityChange }: FiltersProps) {
  return (
    <>
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="text-white text-[20px] rounded-xl bg-zinc-800 flex-1 p-2"
      >
        <option value="all">Все статусы</option>
        <option value="Новая">Новая</option>
        <option value="В работе">В работе</option>
        <option value="Завершено">Завершено</option>
        <option value="Отменена">Отменена</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="text-white text-[20px] rounded-xl bg-zinc-800 flex-1 p-2"
      >
        <option value="all">Все приоритеты</option>
        <option value="Низкий">Низкий</option>
        <option value="Средний">Средний</option>
        <option value="Высокий">Высокий</option>
      </select>
    </>
  );
}

export default Filters;