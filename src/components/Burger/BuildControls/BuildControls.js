import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
      <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((val) => (
      <BuildControl 
        key={val.label} 
        label={val.label}
        added={()=>props.ingredientAdded(val.type)}
        removed={()=>props.ingredientRemoved(val.type)}
        disabled={props.disabled[val.type]}
     />
    ))}
  </div>
);

export default buildControls;
