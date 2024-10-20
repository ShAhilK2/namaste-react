import React from "react";

import ReactDOM from "react-dom/client";

//React.createElement => Object  => HTMLElement(render);
// const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
// console.log(heading);

//JSX - IS NOT LIKE HTML IN JS ,HTML or XML like Syntax
//JSX is not a pure javascript it works due to parcel -babel it transpiled in js engine
//(transpiled before it reaches the JS engine) - Parcel Babel
//Babel is Javascript Compiler
//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render);

const jsxheading = (
  <h1 id="heading" className="head" tabIndex="1">
    Hello JSX!
  </h1>
);
console.log(jsxheading);


//React Component
//Class Based Component
//Function Based Component

//Function Based Component

const Title = ()=> (<h1>Title </h1>);
const HeadingComponent = () =>{
    return <h1>Heading Component</h1>
}

// const data = api.getData(); //Malicious data

const title = <h1>Hello </h1>
const HeadingComponent2 = () =>(
    <div id="heading-container">
{/* Cross site Script */}
        {Title()}
        {title}
        {/* {data} */} //Javascrpit take cares of injection attacks 
        <h2>
        console.log(`Hello`)
        </h2>
       
        <Title />
        <Title></Title>

       <h1>Functional React Component</h1>
    </div>   
)
//Component Inside Component is Called Component Composition


//A JavaScript Function which return React Element or JSX 
//is called Function Based Component



const root = ReactDOM.createRoot(document.getElementById("id"));

// root.render(jsxheading);

root.render(<HeadingComponent2 />);
