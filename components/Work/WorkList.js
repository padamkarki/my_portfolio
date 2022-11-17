import WorkItem from "./WorkItem";
import { projects } from "./workData";
import classes from "./Work.module.css";

const WorkList = () => {
  return (
    <>
      <div className={classes.work_container}>
        {projects.map((project) => (
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

export default WorkList;

// const WorkList = (props) => {
//   return (
//     <>
//       <div className={classes.work_container}>
//         <WorkItem
//           img={projects[0].img}
//           imgAlt={projects[0].imgAlt}
//           imgInfo={projects[0].imgInfo}
//         ></WorkItem>
//         <WorkItem
//           img={projects[1].img}
//           imgAlt={projects[1].imgAlt}
//           imgInfo={projects[1].imgInfo}
//         ></WorkItem>
//         <WorkItem
//           img={projects[2].img}
//           imgAlt={projects[2].imgAlt}
//           imgInfo={projects[2].imgInfo}
//         ></WorkItem>
//         <WorkItem
//           img={projects[3].img}
//           imgAlt={projects[3].imgAlt}
//           imgInfo={projects[3].imgInfo}
//         ></WorkItem>
//         <WorkItem
//           img={projects[4].img}
//           imgAlt={projects[4].imgAlt}
//           imgInfo={projects[4].imgInfo}
//         ></WorkItem>
//         <WorkItem
//           img={projects[5].img}
//           imgAlt={projects[5].imgAlt}
//           imgInfo={projects[5].imgInfo}
//         ></WorkItem>
//       </div>
//     </>
//   );
// };

// export default WorkList;
