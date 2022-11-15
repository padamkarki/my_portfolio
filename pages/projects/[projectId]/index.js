import WorkDetail from "../../../components/WorkDetail";
import { projects } from "../../../components/workData";
import { useRouter } from "next/router";

const WorkDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const index = (element) => element.id == projectId;
  const indexNo = projects.findIndex(index);

  console.log(indexNo);

  return (
    <>
      <WorkDetail
        imgInfo={projects[indexNo]?.imgInfo}
        work={projects[indexNo]?.work}
        embed={projects[indexNo]?.embed}
        description={projects[indexNo]?.description}
      />
    </>
  );
};

// export function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           projectId: "p1",
//         },
//       },
//       {
//         params: {
//           projectId: "p2",
//         },
//       },
//     ],
//   };
// }

// export function getStaticProps(context) {
//   const projectId = context.params.projectId;
//   return {
//     props: {
//       projects: projectId,
//       img: "https:img.youtube.com/vi/yfpL1xYVpM4/hqdefault.jpg",
//       imgAlt: "thumbnail",
//       imgInfo:
//         "Harihar Fort | Accident Prone Steep Stairs Climb/Trek | Nashik, India | हरीहर किल्ला",
//       description:
//         "Experience in 4k the Harihar fort with drone Aerial shots of Nashik's famous fort for its steep stairs. हरीहर किल्ला/गड is just 40km from Nashik & 13 Km from Trimbakeshwar. Also known as Harshgad, it has an 80-degree dangerous climb to the top having the steepest stairs.",
//       url: "https://youtu.be/yfpL1xYVpM4",
//       work: "Director & Editor",
//       embed: "https://www.youtube.com/embed/yfpL1xYVpM4",
//     },
//   };
// }
export default WorkDetails;
