import { Fragment } from "react";
import Image from "next/future/image";
import Card from "./UI/Card";
import classes from "./WorkItem.module.css";
import styles from "./Work.module.css";

const Reviews = (props) => {
  return (
    <Fragment>
      <h2 className={styles.h2_hero_title}>Happy Clients</h2>
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
              <h3>Sunit Mandre</h3>
              <p>Cinematographer</p>
            </div>
          </div>
          <p>
            Quamquam id quidem, infinitum est in hac urbe, Ita multo sanguine
            profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et
            contrariis studiis semper.
          </p>
        </div>
      </Card>
    </Fragment>
  );
};

export default Reviews;
