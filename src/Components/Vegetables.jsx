import React from "react";
import './Vegetables.css'
import Onion from "../Images/Onion.png";
import Potato from "../Images/Potato.png";
import Tomato from "../Images/Tomato.png";
import Califlower from "../Images/Califlower.png";
import { useState } from "react";

const Vegetables = (props) => {
    const [VegetablesImages] = useState([Onion, Potato, Tomato, Califlower]);
    const [VegetablesNames]= useState(["Onion", "Potato", "Tomato", "Califlower"]);
    let count = 0;
    return (
        <>
            <div className="mainContainer">
                {

                    VegetablesImages.map((vegetables, index) => (<div className="row">
                      
                    {count < VegetablesImages.length ?
                        <div className="vegetables">
                              <h3>{VegetablesNames[count]}</h3>
                            <img className="image" src={VegetablesImages[count]} alt="vegetables" />
                            <input
                                type="number"
                                className="quantity"
                                placeholder="Quantity"
                            />
                            <br />
                            <button className="addTocart">Add to Cart</button>
                        </div>
                        :
                        ""
                    }
                    {count + 1 < VegetablesImages.length ?
                        <div className="vegetables">
                            <h3>{VegetablesNames[count+1]}</h3>
                            <img className='image' src={VegetablesImages[count + 1]} alt="vegetables" />
                            <input
                                type="number"
                                className="quantity"
                                placeholder="Quantity"
                            />
                            <br />
                            <button className="addTocart">Add to Cart</button>
                        </div>
                        :
                        ""
                    }
                    <p hidden>{count=count+2}</p>

                </div>))
                        
}
            </div>
            
        </>
    )
};

export default Vegetables;
