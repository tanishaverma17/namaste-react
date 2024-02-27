import { CDN_URL } from "../utils/constants";

const Card = (props)=>{
const {resData} = props;
const {name, cuisines,avgRating, costForTwo,cloudinaryImageId} = resData?.info;
return(
    <div className="rest_card">
    <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
    <h2>{name}</h2>
    <h4>{cuisines.join(", ") }</h4>
    <h4>{avgRating}</h4>
    <h4>{costForTwo}</h4>
    </div>
)
}

export default Card;