import React from "react";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";
import classes from "./imdb.module.css";
import IMDbList from "../../components/IMDb/IMDbList";
import Head from "next/head";

const IMdbPage = () => {
  const desc =
    "Browse through my contributions to acclaimed films as a digital artist, where captivating visual effects breathe life into cinematic worlds.";
  return (
    <>
      <Head>
        <title>IMDb - Projects</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="Padam's IMDb Projects" />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://padamkarki.github.io/my_portfolio/imdb"
        />
      </Head>
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
