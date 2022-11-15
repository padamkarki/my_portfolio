import BlogDetail from "../../../components/Blog/BlogDetail";
import { blogs } from "../../../components/Blog/blogData";
import { useRouter } from "next/router";
import { useState } from "react";

const BlogDetails = () => {
  // const [indexState, setIndexState] = useState(indexNo);

  const router = useRouter();
  const { blogId } = router.query;
  console.log(blogId);

  const index = (element) => element.id == blogId;
  const indexNo = blogs.findIndex(index);

  // setIndexState("Updated");

  return (
    <>
      <BlogDetail
        imgInfo={blogs[indexNo]?.imgInfo}
        work={blogs[indexNo]?.work}
        embed={blogs[indexNo]?.embed}
        description={blogs[indexNo]?.description}
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
//           blogId: "b1",
//         },
//       },
//       {
//         params: {
//           blogId: "b2",
//         },
//       },
//     ],
//   };
// }

// export function getStaticProps(context) {
//   const blogId = context.params.blogId;
//   return {
//     props: {
//       blogs: blogId,
//       img: "https:img.youtube.com/vi/yfpL1xYVpM4/hqdefault.jpg",
//       imgAlt: "thumbnail",
//       imgInfo:
//         "Harihar Fort | Accident Prone Steep Stairs Climb/Trek | Nashik, India | हरीहर किल्ला",
//       description:
//         "Experience in 4k the Harihar fort with drone Aerial shots of Nashik's famous fort for its steep stairs. हरीहर किल्ला/गड is just 40km from Nashik & 13 Km from Trimbakeshwar. Also known as Harshgad, it has an 80-degree dangerous climb to the top having the steepest stairs.",
//       author: "Padam Karki",
//       date: "14 Apr 2021",
//       url: "https://youtu.be/yfpL1xYVpM4",
//       work: "Director & Editor",
//       embed: "https://www.youtube.com/embed/yfpL1xYVpM4",
//     },
//   };
// }
export default BlogDetails;
