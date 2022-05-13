import styles from "./index.module.css";
import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className={styles.footer__bottom}>
      <span>
        <h3>넷플릭스 대한민국</h3>
        <p>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 080-001-9587
        </p>
        <p>대표: 레지널드 숀 톰프슨</p>
        <p>이메일 주소: korea@netflix.com</p>
        <p>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </p>
        <p>사업자등록번호: 165-87-00119</p>
        <p>클라우드 호스팅: Amazon Web Services Inc.</p>
        <p>공정거래위원회 웹사이트</p>
      </span>
    </div>
  );
};
const SelectBox = () => {
  return (
    <select className={styles.selectdg}>
      <option key="ko" value="ko">
        한국어
      </option>
      <option key="eng" value="eng">
        English
      </option>
    </select>
  );
};
const footerList = [
  {
    data: "자주 묻는 질문",
    link: "/",
  },
  {
    data: "고객 센터",
    link: "/",
  },
  {
    data: "계정",
    link: "/",
  },
  {
    data: "미디어 센터",
    link: "/",
  },
  {
    data: "투자 정보(IR)",
    link: "/",
  },
  {
    data: "입사 정보",
    link: "/",
  },
  {
    data: "넷플릭스 지원 디바이스",
    link: "/",
  },
  {
    data: "이용 약관",
    link: "/",
  },
  {
    data: "개인정보",
    link: "/",
  },
  {
    data: "쿠키 설정",
    link: "/",
  },
  {
    data: "회사 정보",
    link: "/",
  },
  {
    data: "문의하기",
    link: "/",
  },
  {
    data: "속도 테스트",
    link: "/",
  },
  {
    data: "법적 고지",
    link: "/",
  },
  {
    data: "오직 넷플릭스에서",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className={styles.footer__tool}>
      <ul className={styles.footer__list}>
        {footerList.map((item) => {
          return (
            <li className={styles.footer_li}>
              <Link to={item.link}>{item.data}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.question__text}>
          질문이 있으신가요? 문의 전화: 080-001-9587
        </div>
        <div className={styles.footer__box}>
          <Footer />
        </div>

        <SelectBox />

        <div className={styles.footer__box}>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default index;
