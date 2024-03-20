import { Fragment } from "react";
import classes from "./Work.module.css";
import WorkTitle from "./WorkTitle";
import WorkDescription from "./WorkDescription";
import WorkListHome from "./WorkListHome";
const Work = () => {
  return (
    <Fragment>
      <section className={classes.body}>
        <WorkTitle />
        <div className={classes.h2_hero_desc}>
          <WorkDescription />
        </div>
        <WorkListHome />
      </section>
    </Fragment>
  );
};

export default Work;
