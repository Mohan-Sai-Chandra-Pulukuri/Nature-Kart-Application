import React from 'react'
import { useState } from 'react'

import './Dairy.css'


import Ferroro from '../Images/FerreroRocher.png'
import Hershey from '../Images/Hersheys.png'
import Silk from '../Images/SilkChocolate.png'
import Tolberone from '../Images/Tolberone.png'
import Milk from '../Images/Milk.png'
import Butter from '../Images/Butter.png'
import Cream from '../Images/Cream.png'




const Dairy = (props) => {

    const [chocolateImages] = useState([Ferroro, Hershey, Silk, Tolberone, Milk, Butter, Cream])

    let count = 0

    return (<>

        <div className="mainContainer">

            {
                chocolateImages.map((chocolate, index) => (

                    <div className="row">
                       { count<chocolateImages.length ? <div className="chocolate">
                            <img key={index} src={chocolateImages[count]} alt={chocolate} />
                            <input className='quantity' type="number" placeholder='Quantity' />
                            <button className="addToCart">Add to Cart</button>
                        </div>:""}


                        {count+1<chocolateImages.length ? <div className="chocolate">
                            <img key={index + 1} src={chocolateImages[count + 1]} alt={chocolate} />
                            <input className='quantity' type="number" placeholder='Quantity' />
                            <button className="addToCart">Add to Cart</button>
                        </div>:""}
                        <p hidden>{count=count+2}</p>
                    </div>
                ))
            }







        </div>


    </>)







}
export default Dairy