import Image from "next/future/image";
import classes from "./WorkItem.module.css";
import Card from "./UI/Card";

const WorkItem = (props) => {
  return (
    <Card>
      <article className={classes.work_card}>
        <div>
          <Image
            src={props.img}
            alt={props.imgAlt}
            width={300}
            height={400}
          ></Image>
        </div>
        <div>{props.imgInfo}</div>
      </article>
    </Card>
  );
};
export default WorkItem;
