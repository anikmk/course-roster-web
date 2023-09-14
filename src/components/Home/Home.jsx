/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";

import './Home.css'
import Cart from "../Cart/Cart";
const Home = () => {
    const [allCard,setAllCard] = useState([])
    const [selectedCard,setSelectedCard] = useState([])
    const [count,setCount] = useState((0))
    const [remaining,setRemaining] = useState(0)
    console.log(remaining)

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))

    },[])

    const handleSelectedCard = (card) => {
        const isExist = selectedCard.find(item => item.id == card.id)
        let count = card.credit;
        if(isExist){
            alert('already booked')
        }
        else{
        selectedCard.forEach((item) => {
            count = count + item.credit

        });
        const totalRemaining = 20 - count

        if(remaining < 0 ){
           return alert('your time is up')
        }
        else{
        setRemaining(totalRemaining)
        setCount(count)
        const newSelectedCard = [...selectedCard,card]
        setSelectedCard(newSelectedCard)
        }
        }   
    }
   
    return (
       <div className="">
        <h1 className="text-center">Course Registration</h1>
        <div className="home-container flex gap-4">
            <div className="card-container">
            

           {
            allCard.map((card) =>(
                <div className="card p-3 bg-white rounded-md shadow-lg">
                <div className="card-img">
                    <img src={card.img} alt="" />

                </div>
                <h2>{card.course_name}</h2>
                <p>
                    <small>{card.description}</small>
                </p>
                <div className="info flex justify-between">
                    <p>$ Salary : {card.price}</p>
                    <p>Credit : {card.credit} hr</p>

                </div>
                <button className="bg-sky-600 w-full rounded text-white" onClick={()=>handleSelectedCard(card)}>selected</button>
                
            </div>

            ))}

            </div>

            <div className="cart p-6 bg-white rounded-lg">
                <Cart key={selectedCard.id} selectedCard={selectedCard} count={count} remaining={remaining}></Cart>

            </div>

        </div>

       </div>
    );
};

export default Home;