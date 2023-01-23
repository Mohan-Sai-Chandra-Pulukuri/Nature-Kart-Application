import React from "react";
import { useState } from "react";
import './Home.css';
import bg from '../Images/Bg.png'
import Logo from '../Images/logo.png'
import Dairy from "./Dairy";
import Flowers from "./Flowers";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import { Link } from 'react-router-dom'



const Home = (props) => {

    const [catogerious] = useState([Dairy, Flowers,Fruits,Vegetables])
    const [catNames] = useState(["Dairy", "Flowers","Fruits","Vegetables"])
    let count = 0


    return (<>
        <div className="navBar">
            <img className="Logo" src={Logo} alt="" />
            <h4>Nature Kart</h4>
            </div>
            <div className="mainContainer">
            {
                catogerious.map((cat, index) => (

                    <div className="row">
                        {count < catogerious.length ? <div className="cat">
                            <div className="outer">
                                <div className="inner">
                                    <Link className="links" to={'/' + catNames[count]}>{catNames[count]}</Link>
                                </div>
                            </div>
                        </div> : ""}
                        {count + 1 < catogerious.length ? <div className="cat">
                            <div className="outer">
                                <div className="inner">
                                    <Link className="links" to={'/' + catNames[count + 1]}>{catNames[count + 1]}</Link>
                                </div>
                            </div>
                        </div> : ""}
                        <p hidden >{count = count + 2}</p>





                    </div>

                ))



            }




        </div>
    </>)






}
export default Home