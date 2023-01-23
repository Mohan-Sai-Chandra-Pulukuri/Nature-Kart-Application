import React from 'react'
import { useState } from 'react'

import Hibiscus from '../Images/Hibiscus.png'
import Jasmine from '../Images/Jasmine.png'
import MarieGold from '../Images/MarieGold.png'
import Rose from '../Images/Rose.png'
import './Flower.css'
const Flowers = (props) => {

    const [flowersImg] = useState([Hibiscus, Jasmine, MarieGold, Rose])
    let count = 0

    return (<>


        <div className="mainContainer">
            {

                flowersImg.map((flower, index) => (


                    <div className="row">
                        {count<flowersImg.length?                        <div className="flower">
                            <img key={count} src={flowersImg[count]} alt="" />
                            <input className='quan' type="number" placeholder='Quantity' />
                            <button className='Button'>Add to Cart</button>

                        </div>:""}
                        {count+1<flowersImg.length?                        <div className="flower">
                            <img key={count+1} src={flowersImg[count+1]} alt="" />
                            <input className='quan' type="number" placeholder='Quantity' />
                            <button className='Button'>Add to Cart</button>
                        </div>:""}
                        <p hidden>{count=count+2}</p>
                    </div>


                ))

            }
        </div>


    </>)





}
export default Flowers