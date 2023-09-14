/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";

import './Home.css'
const Home = () => {
    const [allCard,setAllCard] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))

    },[])
    console.log(allCard)
    return (
       <div className="container">
        <h1 className="text-center">Course Registration</h1>
        <div className="home-container flex">
            <div className="card-container">
            

           {
            allCard.map((card) =>(
                <div className="card p-3 bg-white rounded-md shadow-lg">
                <div className="card-img">
                    <img src="https://i.ibb.co/tBtHm5x/Rectangle-2.png" alt="" />

                </div>
                <h2>anik</h2>
                <p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, praesentium.</small>
                </p>
                <div className="info flex justify-between">
                    <p>salary:2500</p>
                    <p>creadit</p>

                </div>
                <button className="bg-sky-600 w-full">selected</button>
                
            </div>

            ))}

            </div>

            <div className="cart">
                <h1>data</h1>

            </div>

        </div>

       </div>
    );
};

export default Home;