import React from "react";
import classes from "./HeroTitle.module.css";

const HeroTitle = (props) => {
  return (
    <div className={`${classes.hero_title} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default HeroTitle;
