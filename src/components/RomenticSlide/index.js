import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";
import { BsHandThumbsUp, BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
// import DetailModal from "../DetailModal";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        marginBottom: "500px",
        top: "27%",
        right: "-50px",
        height: "40px",
        width: "40px",
        opacity: "1",
        color: "black",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      {/* <MdArrowForwardIos color="white" /> */}
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "none",
        top: "27%",
        height: "40px",
        width: "40px",
        opacity: "01",
        color: "blacks",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      {/* <MdArrowBackIos /> */}
    </div>
  );
}

function Slide() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const 모달스타일 = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      zIndex: 10,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      background: "#ffffe7",
      overflow: "auto",
      top: "42vh",
      left: "38vw",
      right: "38vw",
      bottom: "42vh",
      WebkitOverflowScrolling: "touch",
      borderRadius: "14px",
      outline: "none",
      zIndex: 10,
    },
  };
  // const [DetailModalOn, setDetailModalOn] = useState(false);
  const settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {/* <DetailModal
        show={DetailModalOn}
        onHide={() => setDetailModalOn(false)}
      /> */}
      <Slider {...settings}>
        <div className={styles.card__tool}>
          <div className={styles.slide__text}>로맨틱한 한국 시리즈</div>

          <img className={styles.card} src="img/romentic1.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic1.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic2.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic2.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic3.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic3.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic4.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic4.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic5.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic5.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic6.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic6.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic7.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic7.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic8.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic8.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic9.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic9.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic10.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic10.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic11.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic11.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>

        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic12.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic12.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>
        <div className={styles.card__tool}>
          <div className={styles.slide__text}>
            {" "}
            <br />
          </div>
          <img className={styles.card} src="img/romentic13.jpg" />
          <div className={styles.moviebox}>
            <img className={styles.movieimg} src="img/romentic13.jpg" />
            <nav className={styles.boxnav}>
              <div className={styles.svg}>
                <button className={styles.svgbtn}>
                  <svg
                    className={styles.svgcolor}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className={styles.btn}>
                  <AiOutlinePlus className={styles.plus} />
                </button>
                <button className={styles.btn}>
                  <BsHandThumbsUp className={styles.thumb} />
                </button>
              </div>
              <div>
                <button className={styles.btn}>
                  <BsCheck className={styles.check} />
                </button>
              </div>
            </nav>
            <div className={styles.text__tool}>
              <div className={styles.taste}>98% 일치</div>
              <div className={styles.age}>15+</div>
              <div className={styles.season}>시즌 1개</div>
              <div className={styles.hd}>HD</div>
            </div>
            <div className={styles.text__genre}>
              진심 어린 ． 로맨틱 ． 사극
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
