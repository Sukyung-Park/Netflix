import styles from "./index.module.css";
import React from "react";
import { useState } from "react";

function MainQuestion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className={styles.main__question}>
      <div className={styles.container}>
        <div className={styles.cont__text}>자주 묻는 질문</div>
        <div className={styles.wrapper}>
          <div className={styles.accordion}>
            {data.map((item, i) => (
              <div className={styles.item}>
                <div className={styles.title} onClick={() => toggle(i)}>
                  {item.question}
                  <span className={styles.plus}>
                    {selected == i ? "ⅹ" : "+"}
                  </span>
                </div>
                <div className={selected == i ? "content__show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cont3}>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </div>
        <div className={styles.cont__box}>
          <input
            className={styles.cont_input__qna}
            type="email"
            placeholder="이메일 주소"
          />
          <button className={styles.cont__btn}>시작하기 &gt;</button>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "넷플릭스란 무엇인가요?",
    answer:
      "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,\n다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의\n디바이스에서 시청할 수 있는 스트리밍 서비스입니다.\n\n저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.\n\n",
  },
  {
    question: "넷플릭스 요금은 얼마인가요?",
    answer:
      "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등\n다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.\n\n",
  },
  {
    question: "어디에서 시청할 수 있나요?",
    answer:
      "언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이\n연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV,\n스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.\n\niOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.\n\n",
  },
  {
    question: "맴버십을 해지하려면 어떻게 하나요?",
    answer:
      "넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도\n없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을\n시작하거나 종료하세요.\n\n",
  },
  {
    question: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    answer:
      "넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.\n\n",
  },
  {
    question: "아이들이 넷플릭스를 봐도 좋을까요?",
    answer:
      "멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의\n공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.\n\n키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어,\n자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의\n시청을 원치 않는 특정 작품을 차단할 수도 있습니다.\n\n",
  },
];

export default MainQuestion;
