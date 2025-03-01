import React from 'react'

 const FoodCard = (props) => {
  return (
    <div>
        <img src={props.img} alt="not found"/>
        <h1>
        {props.productName} 
          </h1>
    </div>
  );
};
export default FoodCard;
                                