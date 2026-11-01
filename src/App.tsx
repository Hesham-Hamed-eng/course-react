import { Component, type ReactNode } from "react";
import './assets/css/app.css';
import Counter from "./Componants/practice/Counter.tsx";
// import Button from "./Componants/layouts/Button";
// import Header from "./Componants/Header";
// import Service from "./Componants/layouts/Service";
// import ServiseSection from "./Componants/ServiseSection";


class App extends Component { 
state = {
  count:0
  
};
  render(): ReactNode {

   
    return <div  >
     <h1> <Counter /> </h1>
   

  
    </div>
  }
}
export default App;