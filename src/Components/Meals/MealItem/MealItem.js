import classes from "./MealItem.module.css";
import MealItemFrom from "../MealItem/MealItemForm";
import React from "react";

function MealItem(props) {
  const price = `${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemFrom />
      </div>
    </li>
  );
}

export default MealItem;
