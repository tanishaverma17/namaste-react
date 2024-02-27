import { useState } from "react";
import Card from "./RestCard";
import resList from "../utils/mockData";

const Body = () => {
  const [ListOfRest, setListOfRest] = useState(resList);

  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRest(ListOfRest.filter((res) => res.info.avgRating > 4));
          }}
        >
          top Rated Resturants
        </button>
      </div>
      <div className="rest-container">
        {ListOfRest.map((resData) => (
          <Card key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
