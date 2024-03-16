import React from "react"; 

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userData: {
                name: "Tanisha",
                location: "Default",
                avatar_url: "Dummy",
            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/tanishaverma17");
        const json = await data.json();
     
        this.setState({
            userData: json,
        })
    }

    render(){
        const {name, location, avatar_url} = this.state.userData
        return(
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url}/>
                {/* <h5>count: { count}</h5>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+ 1,
                    })
                }}>count Increase</button> */}
            </div>
        );
    }
}

export default UserClass;