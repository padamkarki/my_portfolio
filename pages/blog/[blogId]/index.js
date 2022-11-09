import BlogDetail from "../../../components/Blog/BlogDetail";
import { blogs } from "../../../components/Blog/blogData";

const BlogDetails = () => {
  return (
    <>
      <BlogDetail
        imgInfo={blogs[0].imgInfo}
        work={blogs[0].work}
        embed={blogs[0].embed}
        description={blogs[0].description}
      />
    </>
  );
};
export default BlogDetails;
