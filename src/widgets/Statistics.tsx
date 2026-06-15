function Statistics(props){
  return(
  <div className="text-white flex gap-4 my-4 text-[20px]">
    <StatisticsAllRequest requests={props.requests} />
    <StatisticsNewRequest requests={props.requests}/>
    <StatisticsInProgress requests={props.requests}/>
    <StatisticsDone requests={props.requests}/>
  </div>
  )
}

function StatisticsAllRequest(props){
  return(
    <div className="bg-zinc-700 rounded-xl p-6 flex-1">
      <p>Всего заявок</p>
      <p>{props.requests.length}</p>
    </div>      
  )
}
function StatisticsNewRequest(props){
  return(
    <div className="bg-zinc-700 rounded-xl p-6 flex-1">
      <p>Новых</p>
      <p>{props.requests.filter((statusRequest) => statusRequest.status === "Новая").length}</p>
    </div>    
  )
}
function StatisticsInProgress(props){
  return(
    <div className="bg-zinc-700 rounded-xl p-6 flex-1">
      <p>В работе</p>
      <p>{props.requests.filter((statusRequest) => statusRequest.status === "В работе").length}</p>
    </div>    
  )
}
function StatisticsDone(props){
  return(
    <div className="bg-zinc-700 rounded-xl p-6 flex-1">
      <p>Завершено</p>
      <p>{props.requests.filter((statusRequest) => statusRequest.status === "Завершено").length}</p>
    </div>      
  )
}

export default Statistics;