import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    render(){
        return(
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User : 
                    <userContext.Consumer>
                        {({loggedInUser})=> <h4>{loggedInUser}</h4>}
                    </userContext.Consumer>
                </div>
                <h2>This is swiggy clone</h2>
                <UserClass name={"Tanisha Verma"} location={"Ghaziabad"}/>
            </div>
        )
    }
};

export default About;