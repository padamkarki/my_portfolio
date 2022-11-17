import WorkDescription from "../../components/Work/WorkDescription";
import WorkList from "../../components/Work/WorkList";
import classes from "./projects.module.css";
import style from "../../components/Work/Work.module.css";
import Form from "../../components/Form/Form";

const ProjectsPage = () => {
  return (
    <>
      <div className={classes.center}>
        <h1 className={classes.hero_title}>My works</h1>
        <div className={style.h2_hero_desc2}>
          <WorkDescription />
        </div>
      </div>
      <WorkList />
      <Form />
    </>
  );
};

export default ProjectsPage;
