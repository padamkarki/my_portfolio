import React from "react";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";
import classes from "./imdb.module.css";
import IMDbList from "../../components/IMDb/IMDbList";

const IMdbPage = () => {
  return (
    <>
      <div className={classes.center}>
        <HeroTitle>IMDb</HeroTitle>
        <HeroDesc>
          Contributed to acclaimed films as a digital artist, bringing
          captivating visual effects to life.
        </HeroDesc>
        <IMDbList />
      </div>
    </>
  );
};

export default IMdbPage;
