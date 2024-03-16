import { CDN_URL } from "../utils/constants";

export  const Card = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-400">
      <img className="rounded-lg w-[300px] h-[250px]" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-3 text-xl">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//higher order component
export const withPromotedLabel = (Card)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <Card {...props }/>
      </div>
    )
  }
}
