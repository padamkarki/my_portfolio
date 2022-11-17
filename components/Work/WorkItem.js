import Image from "next/future/image";
import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./WorkItem.module.css";

const WorkItem = (props) => {
  const router = useRouter();

  function showDetailHandler(event) {
    event.preventDefault();
    router.push("/projects/" + props.id);
  }
  return (
    <>
      <button onClick={showDetailHandler} className={classes.card_btn}>
        <Card className={classes.card}>
          <Image
            className={classes.work_img}
            priority={true}
            src={props.img}
            alt={props.imgAlt}
            width={500}
            height={380}
          ></Image>
          <div className={classes.content}>
            {props.imgInfo?.length > 45
              ? `${props.imgInfo?.substring(0, 45)}...`
              : props.imgInfo}
          </div>
        </Card>
      </button>
    </>
  );
};
export default WorkItem;
