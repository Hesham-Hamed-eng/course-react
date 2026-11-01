import { Component, type ReactNode } from "react";
import lamp from './../../assets/ameg/icon/icons8-lamp-50.png'
class Service extends Component{
    render(): ReactNode {
        return <div className="service">

            <div className="img-icon">
             <img src={lamp} alt="" ></img>
        <h2>lorm, ipsum dolor.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores hic odio dolores fuga 
            consectetur, voluptates possimus quas officiis cum ex doloribus repellendus corrupti sapiente 
            totam sed consequatur quibusdam aliquam deserunt! 
        </p>
    
    </div>
        


          
           
        </div>
    }
}

export default Service;