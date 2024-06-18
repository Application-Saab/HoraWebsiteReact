import React, { useState } from 'react'
import "./CardsHome.css"
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Cards = ({ name, ratings, price,path }) => {
    const [wishlist, setwishlist] = useState(false)

    const wishlisted = () => {
        setwishlist(!wishlist)
    }

    return (
        <div className='main-container'>
            <div className='image'>

                <img src={path}
                    alt="img"
                    style={{ height: "100%", width: "100%" }}
                />
                <div className='icon' onClick={wishlisted}>
                    {!wishlist ?
                        <FaRegHeart size={20} color="white" /> : <FaHeart size={20} color="red" />
                    }
                </div>
            </div>
            <div className='name'>
                <div className='first'>
                    <span style={{ display: "block" }}>{name}</span>
                    <span style={{ display: "block", fontSize: "20px", color: "blue" }}>{price}</span>
                   
                </div>
                <div className='second'>
                    <span>{ratings}</span>
                    <span><FaStar color='#FFF455' /> </span>
                </div>
            </div>
        </div>
    )
}

export default Cards