import { useState } from "react";

const User = (props)=>{
    const[count, setCount] = useState(0);
    return(
        <div className="user-card">
            <h2>Name:{ props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact:</h4>
            <h5>count: {count}</h5>
        </div>
    )
}

export default User;