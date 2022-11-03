import { useRouter } from "next/router";
import Image from "next/future/image";

const DetailPage = () => {
  const router = useRouter();

  const projectId = router.query.projectId;

  //send req to backend API to fetch project with ID

  return (
    <>
      <h2>Hello</h2>
      <Image src="" alt="" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yfpL1xYVpM4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default DetailPage;
