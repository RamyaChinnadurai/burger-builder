import React from "react";
import classes from "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((val) => {
      return [...Array(props.ingredients[val])].map((_, i) => {
        return <BurgerIngredient key={val + i} type={val} />;
      });
    })
    .reduce((acc, ele) => {
      return acc.concat(ele);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding Ingrediens! </p>;
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
