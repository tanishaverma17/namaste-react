import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ReastaurantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">
        {resInfo?.cards[0].card.card.info.name}
      </h1>
      <h3 className="font-bold text-lg">
        {resInfo?.cards[0].card.card.info.cuisines.join(", ")} -
        {resInfo?.cards[0].card.card.info.costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          MenuData={category.card.card}
          showItem={index === showIndex ? true : false}
          setHideShow={() => setShowIndex(!showIndex)}
          showIndex={showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
