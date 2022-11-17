import React, { Component } from "react";
import Slider from "react-slick";
import { reviewsData } from "./reviewsData";
import Image from "next/future/image";
import Card from "../UI/Card";
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
