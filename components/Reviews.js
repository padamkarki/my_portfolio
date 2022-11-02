/* import { Fragment } from "react";
import ReviewItem from "./ReviewItem";
import styles from "./Work.module.css";
import classes from "./ReviewItem.module.css";

const Reviews = (props) => {
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
*/
import React, { Component } from "react";
import Slider from "react-slick";
import { reviewsData } from "./reviewsData";
import Image from "next/future/image";
import Card from "./UI/Card";
import "slick-carousel/slick/slick.css"; //react-slick css files
import "slick-carousel/slick/slick-theme.css"; //react-slick css files
import classes from "./ReviewItem.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

export default class Reviews extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section>
          <h2 className={classes.h2_hero_title}>Happy Clients</h2>
          <Slider {...settings}>
            {reviewsData.map((item) => (
              <Card key={item.id} className={classes.review_card}>
                <div>
                  <div>
                    <Image
                      className={classes.review_img}
                      src={item.img}
                      alt={item.imgAlt}
                      width={100}
                      height={100}
                    ></Image>
                    <div>
                      <h3 className={classes.client_name}>{item.clientName}</h3>
                      <p className={classes.client_field}>{item.clientField}</p>
                    </div>
                  </div>
                  <p className={classes.client_review}>{item.clientReview}</p>
                </div>
              </Card>
            ))}
          </Slider>
        </section>
      </>
    );
  }
}
