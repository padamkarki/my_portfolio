import React from "react";
import classes from "./HeroDesc.module.css";

const HeroDesc = (props) => {
  return (
    <div className={`${classes.hero_desc} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default HeroDesc;
