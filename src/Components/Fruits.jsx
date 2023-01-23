import React from 'react';
import { useState } from 'react';
import './Fruits.css'

import Apple from '../Images/Apple.png';
import Banana from '../Images/Banana.png';
import Mango from '../Images/Mango.png';
import Watermelon from '../Images/Watermelon.png';

const Fruits = (props) => {
    const [FruitsImages] = useState([Apple, Banana, Mango, Watermelon])
    const [FruitsNames] =  useState(["Apple", "Banana", "Mango", "Watermelon"])
    let count = 0
    return (
        <>
            <div className="mainContainer">
                {
                    FruitsImages.map((fruits, index) => (
                        <div className="row">
                            {count < FruitsImages.length ? <div className="fruits">
                                <h3>{FruitsNames[count]}</h3>
                                <img className='image' key={index} src={FruitsImages[count]} alt="fruits"/>
                                <input type="number" className="quantity" placeholder='Quantity' /> <br />
                                <button className='addTocart'>Add to Cart</button>
                            </div> : " "}
                            {count + 1 < FruitsImages.length ? <div className="fruits">
                                <h3>{FruitsNames[count+1]}</h3>
                                <img className='image' key={index+1} src={FruitsImages[count+1]} alt="fruits" />
                                <input type="number" className="quantity" placeholder='Quantity' /> <br />
                                <button className='addTocart'>Add to Cart</button>
                            </div> : " "}
                            <p hidden>{count = count + 2}</p>
                        </div>
                    )
                    )
    }

            </div>

        </>
    )
}
export default Fruits;

