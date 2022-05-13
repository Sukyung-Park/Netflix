import styles from "./index.module.css";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import MovieSlide from "../MovieSlide";
import HotSlide from "../HotSlide";
import OnlySlide from "../OnlySlide";

const index = () => {
  return (
    <div className={styles.moviebody}>
      <div className={styles.container}>
        <div className={styles.movie__tool}>
          <div className={styles.slide__text}>수경 님이 시청 중인 콘텐츠</div>
          <MovieSlide />
        </div>

        <div className={styles.movie__tool}>
          <div className={styles.slide__text}>지금 뜨는 콘텐츠</div>
          <HotSlide />
        </div>

        <div className={styles.movie__tool}>
          <div className={styles.slide__text}>오직 넷플릭스에서</div>
          <OnlySlide />
        </div>
      </div>
    </div>
  );
};

export default index;
