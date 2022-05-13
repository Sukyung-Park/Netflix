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
          <img className={styles.card} src="img/watch1.jpg" />
          <img className={styles.card} src="img/watch2.jpg" />
          <img className={styles.card} src="img/watch3.jpg" />
          <img className={styles.card} src="img/watch4.jpg" />
          <img className={styles.card} src="img/watch5.jpg" />
          <img className={styles.card} src="img/watch6.jpg" />
          <img className={styles.card} src="img/watch7.jpg" />
          <img className={styles.card} src="img/watch8.jpg" />
          <img className={styles.card} src="img/watch9.jpg" />
          <img className={styles.card} src="img/watch10.jpg" />
          <img className={styles.card} src="img/watch11.jpg" />
          <img className={styles.card} src="img/watch12.jpg" />
          {/* <img className={styles.card} src="img/watch13.jpg" /> */}
        </Slider>
      </div>
    );
  }
}
