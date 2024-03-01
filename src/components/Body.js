import { useEffect, useState } from "react";
import Card from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRest(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (ListOfRest === undefined) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter restaurant and update ui
              const filterRest = ListOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltered(filterRest);
            }}
          >
            Search
          </button>
        </div>
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
        {filtered.map((resData) => (
          <Link to={"restaurant/" + resData.info.id} key={resData.info.id}>
            <Card  resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
