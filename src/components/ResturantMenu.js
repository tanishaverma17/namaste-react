import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL+ resId
    );
    const json = await data.json();
    console.log(json.data.cards[5]);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <div>
        <h1>{resInfo?.cards[2].card.card.info.name}</h1>
        <h3>
          {resInfo?.cards[2].card.card.info.cuisines.join(", ")} -{" "}
          {resInfo?.cards[2].card.card.info.costForTwoMessage}
        </h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
