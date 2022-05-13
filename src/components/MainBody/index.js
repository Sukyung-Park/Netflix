import styles from "./index.module.css";

import React from "react";

const index = () => {
  return (
    <div className={styles.main__body}>
      <div className={styles.container__bodys}>
        <div className={styles.container}>
          <div className={styles.cont1}>
            <div className={styles.cont1__box}>
              <div className={styles.textbox}>
                <div className={styles.text1}>TV로 즐기세요.</div>
                <div className={styles.text2}>
                  스마트 TV, PlayStation, Xbox, Chromecast,
                  <br /> Apple TV, 블루레이 플레이어 등 다양한
                  <br /> 디바이스에서 시청하세요.
                </div>
              </div>
            </div>
            <div className={styles.imgbox}>
              <img className={styles.boximg} src="img/tv.png" />
              <video className={styles.videobox} loop autoPlay muted>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v "
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container__bodys}>
        <div className={styles.container}>
          <div className={styles.cont2}>
            <div className={styles.cont2__box}>
              <div className={styles.cont2__imgbox}>
                <img className={styles.cont2__img1} src="img/img1.jpg" />
                <div className={styles.cont2__imgbox2}>
                  <img className={styles.cont2__img2} src="img/img2.png" />
                  <div className={styles.cont2__text}>저장 중...</div>
                  <img
                    className={styles.cont2__gif}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  />
                </div>
              </div>
              <div className={styles.cont2__textbox}>
                <div className={styles.cont2__text1}>
                  즐겨 보는 콘텐츠를
                  <br /> 저장해 오프라인으로
                  <br />
                  시청하세요.
                </div>
                <div className={styles.cont2__text2}>
                  간편하게 저장하고 빈틈없이 즐겨보세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container__bodys}>
        <div className={styles.container}>
          <div className={styles.cont3}>
            <div className={styles.cont3__box}>
              <div className={styles.cont3__textbox}>
                <div className={styles.cont3__text1}>
                  다양한 디바이스에서
                  <br />
                  시청하세요.
                </div>
                <div className={styles.cont3__text2}>
                  각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,
                  <br /> TV에서 무제한으로 스트리밍하세요. 추가
                  <br /> 요금이 전혀 없습니다.
                </div>
              </div>
              <div className={styles.cont3__imagebox}>
                <img className={styles.cont3__img} src="img/tv2.png" />
                <video className={styles.cont3__videobox} loop autoPlay muted>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.container__bodys}> */}
      <div className={styles.container}>
        <div className={styles.cont4}>
          <div className={styles.cont4__box}>
            <div className={styles.cont4__imgbox}>
              <img className={styles.cont4__img} src="img/img3.png" />
            </div>
            <div className={styles.cont4__textbox}>
              <div className={styles.cont4__text1}>
                어린이 전용 프로필을
                <br /> 만들어 보세요.
              </div>
              <div className={styles.cont4__text2}>
                자기만의 공간에서 좋아하는 캐릭터와 즐기는
                <br />
                신나는 모험. 자녀에게 이 특별한 경험을
                <br />
                선물하세요. 넷플릭스 회원이라면 무료입니다.
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
