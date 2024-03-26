import BlogDescription from "../../components/Blog/BlogDescription";
import BlogList from "../../components/Blog/BlogList";
import classes from "./projects.module.css";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";
import Head from "next/head";

const BlogPage = () => {
  const desc =
    "Welcome to my blog page featuring a collection of YouTube videos. Explore a variety of engaging content, ranging from informative tutorials to entertaining vlogs. Join me on this visual journey filled with insights, entertainment, and inspiration.";
  return (
    <>
      <Head>
        <title>Vlogs - Padam Karki</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="Padam's Vlogs" />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://padamkarki.github.io/my_portfolio/vlog"
        />
      </Head>
      <div className={classes.center}>
        <HeroTitle>Vlog</HeroTitle>
        <HeroDesc>
          <BlogDescription />
        </HeroDesc>
      </div>
      <BlogList />
    </>
  );
};

export default BlogPage;
