import BlogDetail from "../../../components/Blog/BlogDetail";
import { blogs } from "../../../components/Blog/blogData";
import { useRouter } from "next/router";
import Head from "next/head";

const BlogDetails = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const index = (element) => element.id == blogId;
  const indexNo = blogs.findIndex(index);

  return (
    <>
      <Head>
        <title>{blogs[indexNo]?.imgInfo}</title>
        <meta name="description" content={blogs[indexNo]?.description} />
        <meta property="og:title" content={blogs[indexNo]?.imgInfo} />
        <meta property="og:description" content={blogs[indexNo]?.description} />
      </Head>
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
