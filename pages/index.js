import { Fragment } from "react";
import Head from "next/head";
import Introduction from "../components/Intro/Introduction";
import Reviews from "../components/Reviews/Reviews";
import Work from "../components/Work/Work";
import Form from "../components/Form/Form";
import Blog from "../components/Blog/Blog";
import portfolio from "../public/portfolio.jpg";

const HomePage = () => {
  const desc =
    "Welcome to Padam Karki's portfolio! Here, you'll find a collection of real-world frontend and full-stack projects. From clean designs to robust functionalities.";
  return (
    <Fragment>
      <Head>
        <title>Portfolio - Padam Karki</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Padam's Portfolio" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={portfolio} />
        <meta
          property="og:url"
          content="https://padamkarki.github.io/my_portfolio/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Introduction />
      <Work />
      <Reviews />
      <Blog />
      <Form />
    </Fragment>
  );
};

export default HomePage;
