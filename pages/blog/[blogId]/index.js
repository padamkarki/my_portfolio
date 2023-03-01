import BlogDetail from "../../../components/Blog/BlogDetail";
import { blogs } from "../../../components/Blog/blogData";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const index = (element) => element.id == blogId;
  const indexNo = blogs.findIndex(index);

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

export default BlogDetails;
