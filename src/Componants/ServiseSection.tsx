import { Component, type ReactNode } from "react";
import Service from "./layouts/Service";

class ServiseSection extends Component{
    render(): ReactNode {
        return<div className="container">
            <div className="row">
     <div className="col-md-3">
    <Service />
    </div>

     <div className="col-md-3">
    <Service />
    </div>

     <div className="col-md-3">
    <Service />
    </div>

     <div className="col-md-3">
    <Service />
    </div>

     <div className="col-md-3">
    <Service />
    </div>

     <div className="col-md-3">
    <Service />
    </div>

        </div>
        </div>
    }
}

export default ServiseSection;