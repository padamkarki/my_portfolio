import Card from "./UI/Card";
import Image from "next/future/image";
import classes from "./WorkItem.module.css";

const ReviewItem = (props) => {
  return (
    <Card>
      <div className={classes.work_card}>
        <div>
          <div>
            <Image
              src={props.img}
              alt={props.imgAlt}
              width={80}
              height={80}
            ></Image>
          </div>
          <div>
            <h3>{props.clientName}</h3>
            <p>{props.clientField}</p>
          </div>
        </div>
        <p>{props.clientReview}</p>
      </div>
    </Card>
  );
};

export default ReviewItem;
