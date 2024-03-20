import WorkDescription from "../../components/Work/WorkDescription";
import WorkList from "../../components/Work/WorkList";
import classes from "./projects.module.css";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";
import Head from "next/head";

const ProjectsPage = () => {
  const desc =
    "Explore my frontend projects, encompassing a wide range of visually captivating and user-friendly websites.";
  return (
    <>
      <Head>
        <title>Website - Projects</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="Padam's Website Projects" />
        <meta property="og:description" content={desc} />
        <meta
          property="og:url"
          content="https://padamkarki.github.io/my_portfolio/projects"
        />
      </Head>
      <div className={classes.center}>
        <HeroTitle>My works</HeroTitle>
        <HeroDesc>
          <WorkDescription />
        </HeroDesc>
      </div>
      <WorkList />
      {/* <Form /> */}
    </>
  );
};

export default ProjectsPage;
