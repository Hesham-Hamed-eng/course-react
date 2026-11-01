
import { Component, type ReactNode } from "react";


type StateType = {
  count:number;
  userName:string;
}
class Counter extends Component { 
state: StateType={
  count:0,
  userName:"hesham"
};

handelIncrease():void {
  this.setState({count:this.state.count +1})
}

handelDecrease():void {
  this.setState({count:this.state.count -1})
}

handelReset():void {
  this.setState({count:0})
}
  render(): ReactNode {

    let {count, userName} = this.state;
    return <div className="them-header"  >
     <h1> {userName} count: {count}</h1>
    <div className="row">
      <button onClick={()=> this.handelIncrease()}>
      Increase
    </button>

     <button onClick={()=> this.handelDecrease()}>
      Decrease
    </button>

     <button onClick={()=> this.handelReset()}>
      Reset
    </button>
    </div>

  
    </div>
  }
}
export default Counter;