import WorkDescription from "../../components/Work/WorkDescription";
import WorkList from "../../components/Work/WorkList";
import classes from "./projects.module.css";
import Form from "../../components/Form/Form";
import HeroTitle from "../../components/UI/HeroTitle";
import HeroDesc from "../../components/UI/HeroDesc";

const ProjectsPage = () => {
  return (
    <>
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
