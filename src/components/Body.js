import { useEffect, useState } from "react";
import { Card, withPromotedLabel } from "./RestCard";
import Shimmer from "./Shimmer";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRest(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like youre offline!!... please check your internet</h1>;

  if (ListOfRest.length == 0) {
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter flex justify-between">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border rounded-l-md p-3 hover:border-solid border-gray min-w-6"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mr-3 p-3 bg-gray-600 text-white rounded-r-md"
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
          className="m-4 p-4 rounded-md text-white bg-gray-600"
          onClick={() => {
            setListOfRest(ListOfRest.filter((res) => res.info.avgRating > 4));
          }}
        >
          top Rated Resturants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filtered.map((resData) => (
          <Link to={"restaurant/" + resData.info.id} key={resData.info.id}>
            {/* if a restuarant is promted add promoted label */}
            {resData.info.promoted ? (
              <RestaurantCardPromoted resData={resData} />
            ) : (
              <Card resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
