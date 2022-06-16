import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

function Hi() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  // const password = useRef(); //비밀번호 재확인 할떄 필요
  // password.current = watch("password"); //name password인 element 관찰
  const onSubmit = async (data) => {
    data.history.push("/profile");
  };
  return (
    <div className={styles.login__tool}>
      <div className={styles.tool__box}>
        <div className={styles.text__login}>로그인</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.cont_input__email}
            type="email"
            name="email"
            placeholder="이메일 주소 또는 전화번호"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <div className={styles.email__style}>이메일 형식을 지켜주세요</div>
          )}
          <input
            className={styles.cont_input__pw}
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <div className={styles.password__style}>비밀번호를 적으세요</div>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <div className={styles.password__style}>
              비밀번호는 6~60자 사이여야 합니다.
            </div>
          )}
          <Link to="/profile">
            <button
              onClick="profile"
              type="submit"
              className={styles.cont__btn}
            >
              로그인
            </button>
          </Link>
        </form>

        <div className={styles.login__section1}>
          <div className={styles.login__section1__box}>
            <input className={styles.login__checkbox} type="checkbox" />

            <div className={styles.login__savetext}>로그인 정보 저장</div>
          </div>
          <div className={styles.login__helptext}>도움이 필요하신가요?</div>
        </div>

        <div className={styles.login__section2__box}>
          <div className={styles.login__section2}>
            <div className={styles.section2_text1}>
              Netflix 회원이 아닌가요?
            </div>{" "}
            <div className={styles.section2_text2}>지금 가입하세요</div>
          </div>

          <div>
            <div className={styles.text3}>
              이 페이지는 Google reCAPTCHA의 보호를 받아
              <div className={styles.login__section3}>
                <div className={styles.text4}>
                  사용자가 로봇이 아님을 확인합니다.{" "}
                </div>
                <div className={styles.text5}>자세히 알아보기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hi;
