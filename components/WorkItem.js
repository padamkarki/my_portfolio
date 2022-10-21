import Image from "next/future/image";
import classes from "./WorkItem.module.css";
import Card from "./UI/Card";

const WorkItem = (props) => {
  return (
    <>
      <Card className={classes.work_card}>
        <Image
          className={classes.work_img}
          src={props.img}
          alt={props.imgAlt}
          width={350}
          height={400}
        ></Image>
        <div className={classes.work_info}>{props.imgInfo}</div>
      </Card>
    </>
  );
};
export default WorkItem;
