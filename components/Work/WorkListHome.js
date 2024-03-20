import WorkItem from "./WorkItem";
import { projects } from "./workData";
import classes from "./Work.module.css";

const WorkListHome = () => {
  return (
    <>
      <div className={classes.work_container}>
        {projects.slice(0, 4).map((project) => (
          <WorkItem
            key={project.id}
            id={project.id}
            img={project.img}
            imgAlt={project.imgAlt}
            imgInfo={project.imgInfo}
            description={project.description}
            url={project.url}
            work={project.work}
            embed={project.embed}
          />
        ))}
      </div>
    </>
  );
};

export default WorkListHome;
