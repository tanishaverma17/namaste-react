import React from "react";
import ReactDOM from "react-dom";

const heading = (
  <h1 className="head" id="heading">
    HI, I am tanisha
  </h1>
);

const number = 1000;


const TitleComponent = ()=>(
  <div>
    {heading}
    <h1>Tanisha Verma</h1>
    <h3>hii</h3> 
  </div>
)

const HeadingComponent = ()=>(
   <>
   <h1>React Functional component</h1>
   <TitleComponent/> 
   </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>); 