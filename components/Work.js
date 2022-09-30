import { Fragment } from "react";
import classes from "./Work.module.css";
import WorkItem from "./WorkItem";
import padam from "../assets/padam.png";

const Work = () => {
  const projects = [
    {
      id: "p1",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "1st Work",
    },
    {
      id: "p2",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "2nd Work",
    },
    {
      id: "p3",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "3rd Work",
    },
    {
      id: "p4",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "4th Work",
    },
    {
      id: "p5",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "5th Work",
    },
    {
      id: "p6",
      img: padam,
      imgAlt: "Padam",
      imgInfo: "6th Work",
    },
  ];
  return (
    <Fragment>
      <div>
        <h2 className={classes.h2_hero_title}>Latest Works</h2>
        <p className={classes.h2_hero_desc}>
          I show only my best works built completely with passion, simplicity,
          and creativity!
        </p>
      </div>
      <div>
        <WorkItem
          img={projects[0].img}
          imgAlt={projects[0].imgAlt}
          imgInfo={projects[0].imgInfo}
        ></WorkItem>
        <WorkItem
          img={projects[1].img}
          imgAlt={projects[1].imgAlt}
          imgInfo={projects[1].imgInfo}
        ></WorkItem>
        <WorkItem
          img={projects[2].img}
          imgAlt={projects[2].imgAlt}
          imgInfo={projects[2].imgInfo}
        ></WorkItem>
        <WorkItem
          img={projects[3].img}
          imgAlt={projects[3].imgAlt}
          imgInfo={projects[3].imgInfo}
        ></WorkItem>
        <WorkItem
          img={projects[4].img}
          imgAlt={projects[4].imgAlt}
          imgInfo={projects[4].imgInfo}
        ></WorkItem>
        <WorkItem
          img={projects[5].img}
          imgAlt={projects[5].imgAlt}
          imgInfo={projects[5].imgInfo}
        ></WorkItem>
      </div>
    </Fragment>
  );
};

export default Work;
