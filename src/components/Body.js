import Card from "./RestCard"
import resList from "../utils/mockData"

const Body = ()=>{
    return(
      <div>
        <div className="search">Search</div>
        <div className="rest-container">
          {
            resList.map(resData => <Card key={resData.info.id} resData={resData}/>)
          }
        </div>
      </div>
    )
} 

export default Body;