import { Fragment } from "react";
import ReviewItem from "./ReviewItem";
import sunit from "../assets/sunit.jpg";
import vikram from "../assets/vikram.jpg";
import ganesh from "../assets/ganesh.jpg";
import priyanka from "../assets/priyanka.jpg";
import styles from "./Work.module.css";
import classes from "./ReviewItem.module.css";

const Reviews = (props) => {
  const clients = [
    {
      id: "r1",
      img: sunit,
      imgAlt: "Sunit",
      clientName: "Sunit",
      clientField: "Cinematographer",
      clientReview:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper",
      clientField: "Softare Engineer",
    },
    {
      id: "r2",
      img: vikram,
      imgAlt: "Vikram",
      clientName: "Vikram",
      clientField: "Software Engineer",
      clientReview:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper",
    },
    {
      id: "r3",
      img: ganesh,
      imgAlt: "Ganesh",
      clientName: "Ganesh",
      clientField: "Software Engineer",
      clientReview:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper",
    },
    {
      id: "r4",
      img: priyanka,
      imgAlt: "Priyanka",
      clientName: "Priyanka",
      clientField: "Software Engineer",
      clientReview:
        "Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper",
    },
  ];
  return (
    <>
      <div>
        <h2 className={styles.h2_hero_title}>Happy Clients</h2>
        <div className={classes.review_container}>
          <ReviewItem
            img={clients[0].img}
            imgAlt={clients[0].imgAlt}
            clientName={clients[0].clientName}
            clientField={clients[0].clientField}
            clientReview={clients[0].clientReview}
          />
          <ReviewItem
            img={clients[1].img}
            imgAlt={clients[1].imgAlt}
            clientName={clients[1].clientName}
            clientField={clients[1].clientField}
            clientReview={clients[1].clientReview}
          />
          <ReviewItem
            img={clients[2].img}
            imgAlt={clients[2].imgAlt}
            clientName={clients[2].clientName}
            clientField={clients[2].clientField}
            clientReview={clients[2].clientReview}
          />
          <ReviewItem
            img={clients[3].img}
            imgAlt={clients[3].imgAlt}
            clientName={clients[3].clientName}
            clientField={clients[3].clientField}
            clientReview={clients[3].clientReview}
          />
        </div>
      </div>
    </>
  );
};

export default Reviews;
