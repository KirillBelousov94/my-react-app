function Filters(){
  return(
    <>
     <FilterStatus/>
      <FilterPriority/>
    </>
  );
}

function FilterStatus(){
  return(
    <select name="status" className="text-[20px] rounded-xl bg-zinc-800 flex-1 p-2" id="Поиск заявки">
      <option value="all" >Все статусы </option>
      <option value="new">Новая</option>
      <option value="in progress">В работе</option>
      <option value="Done">Завершена</option>
      <option value="Done">Отменена</option>
    </select>
  )
}

function FilterPriority(){
  return(
    <select name="priority" className="text-[20px] rounded-xl bg-zinc-800 flex flex-1 p-2" id="Поиск заявки"> 
      <option value="all">Все приоритеты</option> 
      <option value="new">Низкий</option> 
      <option value="in progress">Средний</option> 
      <option value="Done">Высокий</option> 
    </select>
  )
}

export default Filters;