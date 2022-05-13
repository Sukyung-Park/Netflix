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
          <img className={styles.card} src="img/romentic1.jpg" />
          <img className={styles.card} src="img/romentic2.jpg" />
          <img className={styles.card} src="img/romentic3.jpg" />
          <img className={styles.card} src="img/romentic4.jpg" />
          <img className={styles.card} src="img/romentic5.jpg" />
          <img className={styles.card} src="img/romentic6.jpg" />
          <img className={styles.card} src="img/romentic7.jpg" />
          <img className={styles.card} src="img/romentic8.jpg" />
          <img className={styles.card} src="img/romentic9.jpg" />
          <img className={styles.card} src="img/romentic10.jpg" />
          <img className={styles.card} src="img/romentic11.jpg" />
          <img className={styles.card} src="img/romentic12.jpg" />
          <img className={styles.card} src="img/romentic13.jpg" />
        </Slider>
      </div>
    );
  }
}
