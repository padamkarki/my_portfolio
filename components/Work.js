import { Fragment } from "react";
import classes from "./Work.module.css";
import WorkTitle from "./WorkTitle";
import WorkDescription from "./WorkDescription";
import WorkList from "./WorkList";

const Work = () => {
  return (
    <Fragment>
      <section className={classes.body}>
        <WorkTitle />
        <div className={classes.h2_hero_desc}>
          <WorkDescription />
        </div>
        <WorkList />
      </section>
    </Fragment>
  );
};

export default Work;
