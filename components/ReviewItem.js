import Card from "./UI/Card";
import Image from "next/future/image";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <Card>
      <div className={classes.review_card}>
        <div>
          <div>
            <Image
              className={classes.review_img}
              src={props.img}
              alt={props.imgAlt}
              width={100}
              height={100}
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
