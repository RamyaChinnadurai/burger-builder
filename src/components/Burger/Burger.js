import React from "react";
import classes from "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(val => {
      return [...Array(props.ingredients[val])].map((_,i) =>{
        return <BurgerIngredient key={val+i} type={val} />
      });
  });
  

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
