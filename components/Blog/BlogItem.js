import Image from "next/future/image";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const router = useRouter();

  function showDetailHandler() {
    router.push("/projects");
  }
  return (
    <>
      <button onClick={showDetailHandler} className={classes.card_btn}>
        <Card className={classes.size}>
          <Image
            className={classes.blog_img}
            src={props.img}
            alt={props.imgAlt}
            width={380}
            height={400}
          ></Image>
          <div>{props.imgInfo}</div>
        </Card>
      </button>
    </>
  );
};
export default BlogItem;
