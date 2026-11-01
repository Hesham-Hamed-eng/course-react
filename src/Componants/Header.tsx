import { Component, type ReactNode } from "react";
import Button from "./layouts/Button";

class Header extends Component {
    render(): ReactNode {
        return <header  className= " them-header">
            <div className="container m-bottom">
        <h1 className=" capitalize" >
                your favorite one paga
                 <br /> 
                multi purpos template
            </h1>
            <p>
                Lorem ipsum dolor sit amet consecFtetur, adipisicing elit. Omnis atque nihil 
                architecto non reiciendis, quidem magni,
                 consequatur distinctio saepe ut neque 
                 esse id tempore modi nesciunt ad quam ducimus dolor?
            </p>
            </div >
          
          <div className="container">
            <Button />
          </div>
          
        </header>
    }
}
export default Header;