import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div className={styles.silder__tool}>
        <Slider {...settings}>
          <img className={styles.card} src="img/only1.jpg" />
          <img className={styles.card} src="img/only2.jpg" />
          <img className={styles.card} src="img/only3.jpg" />
          <img className={styles.card} src="img/only4.jpg" />
          <img className={styles.card} src="img/only5.jpg" />
          <img className={styles.card} src="img/only6.jpg" />
          <img className={styles.card} src="img/only7.jpg" />
          <img className={styles.card} src="img/only8.jpg" />
          <img className={styles.card} src="img/only9.jpg" />
          <img className={styles.card} src="img/only10.jpg" />
          <img className={styles.card} src="img/only11.jpg" />
          <img className={styles.card} src="img/only12.jpg" />
          <img className={styles.card} src="img/only13.jpg" />
        </Slider>
      </div>
    );
  }
}
