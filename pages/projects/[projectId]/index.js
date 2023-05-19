import WorkDetail from "../../../components/Work/WorkDetail";
import { projects } from "../../../components/Work/workData";
import { useRouter } from "next/router";

const WorkDetails = () => {
  const router = useRouter();
  const { asPath } = router;

  // Extract the project ID from the URL
  const projectId = asPath.split("/").pop();

  // Find the project based on the extracted project ID
  const project = projects.find((element) => element.id === projectId);

  // Render the WorkDetail component if a matching project is found
  return (
    <>
      {project && (
        <WorkDetail
          imgInfo={project.imgInfo}
          work={project.work}
          embed={project.embed}
          description={project.description}
          img={project.img}
          link={project.link}
        />
      )}
    </>
  );
};

export default WorkDetails;
