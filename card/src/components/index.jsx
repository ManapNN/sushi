
// import React from "react";
import '../App.css'
import React, { useState } from "react";
export const Car =({props})=>{ 
    const[count, setCount]= useState(0)
    const[price, setprice]= useState(props.spice)

    const minus=()=>{
        setCount((count)=>count-1)
        setprice((price)=>price-props.spice)
   }
    const plus =()=>{
        setCount((count)=>count + 1)
        setprice((price)=> price + props.spice)
    }    
return(
        <div className="block">
            <div className='rend'>
            <img className="imagg" src={props.img} alt="" />
            <hr />
            <h2>{props.name}</h2>
            <span>{props.m}</span>
            <div>
  </div>
  <div>
           <h3>{price}$</h3>
    <div>
        <button onClick={plus}>+</button>
        <p>{count}</p>
        <button onClick={minus}>-</button>

    </div>



    <button onClick={()=>{
    alert('Ожидайте заказ')
    }}>Подтвердить Заказ</button>

    </div>
         </div>

        </div>
    )
}