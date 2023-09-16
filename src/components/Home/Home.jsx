/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import { FaBookOpen } from 'react-icons/fa';
import {BiDollar} from 'react-icons/bi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Home.css'
import Cart from "../Cart/Cart";
const Home = () => {
    const [allCard,setAllCard] = useState([])
    const [selectedCard,setSelectedCard] = useState([])
    const [count,setCount] = useState(0)
    const [remaining,setRemaining] = useState()
    const [totalPrice,setTotalPrice] = useState()
    console.log(remaining)

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))

    },[])

    const handleSelectedCard = (card) => {
        const isExist = selectedCard.find(item => item.id == card.id)
        let count = card.credit;
        let totalPrice = card.price;
        

        if(isExist){
            toast.warning('already booked')
        }
        else{
        selectedCard.forEach((item) => {
            count = count + item.credit
            totalPrice = totalPrice + item.price

        });
        const totalRemaining = 20 - count

        if(totalRemaining < 0 ){
           return toast.warning('your time is up')
        }
        else{
        setTotalPrice(totalPrice)
        setRemaining(totalRemaining)
        setCount(count)
        const newSelectedCard = [...selectedCard,card]
        setSelectedCard(newSelectedCard)
        }
        }   
    }
   
    return (
       <div className="">
        <h1 className="text-center text-3xl font-bold mb-10">Course Registration</h1>
        <div className="home-container flex gap-4">
            <div className="card-container">
            

           {
            allCard.map((card) =>(
                <div className="card p-3 bg-white rounded-md shadow-lg">
                <div className="card-img">
                    <img src={card.img} alt="" />

                </div>
                <h2 className="my-4 text-lg font-semibold">{card.course_name}</h2>
                <p>
                    <small className="font-normal text-sm text-gray-500">{card.description}</small>
                </p>
                <div className="flex my-5 justify-between">
                    <div>
                        <div className="flex items-center">
                            <BiDollar size={20}></BiDollar>
                            <p> Salary : {card.price}</p>
                        </div>
                    </div>
                  <div className="flex gap-2 items-center">
                   <FaBookOpen size={18}></FaBookOpen>
                    <p>Credit : {card.credit} hr</p>
                    </div>
                  

                </div>
                <button className="bg-sky-600 w-full rounded text-white py-2 text-lg font-semibold" onClick={()=>handleSelectedCard(card)}>select</button>
                <ToastContainer></ToastContainer>
                
            </div>

            ))}

            </div>

            <div className="cart p-6 bg-white rounded-lg">
                <Cart key={selectedCard.id} selectedCard={selectedCard} count={count} remaining={remaining} totalPrice={totalPrice}></Cart>

            </div>

        </div>

       </div>
    );
};

export default Home;