import React, { FC, useState } from "react";
import countdownTimerType from "./countdownTimerType";

import styles from "./countdownTimer.module.scss";

const CountdownTimer: FC<countdownTimerType> = ({}) => {
  const [daysLeft, setDaysLeft] = useState<string>();
  const [HoursLeft, setHoursLeft] = useState<string>();
  const [minutesLeft, setMinutesLeft] = useState<string>();
  const [secondsLeft, setSecondsLeft] = useState<string>();

  //月は0からなので1小さく指定
  const endDate = new Date(2022, 5, 16, 16);
  const endTime = endDate.getTime();

  const getCount = () => {
    const nowDate = new Date();
    const nowTime = nowDate.getTime();

    let diff;
    if (endTime >= nowTime) {
      diff = endTime - nowTime;
    } else {
      diff = 0;
    }

    //日
    const day = diff / (1000 * 60 * 60 * 24);

    //日未満
    const lessDay = diff % (1000 * 60 * 60 * 24);

    //時
    const time = lessDay / (1000 * 60 * 60);

    //時未満
    const lessHour = lessDay % (1000 * 60 * 60);

    //分
    const minute = lessHour / (1000 * 60);

    //分未満
    const lessMinute = lessHour % (1000 * 60);

    //秒
    const second = lessMinute / 1000;

    //少数点以下の切り捨てと0パディング
    const truncatedDay = Math.floor(day).toString().padStart(3, "0");
    const truncatedHour = Math.floor(time).toString().padStart(2, "0");
    const truncatedMinute = Math.floor(minute).toString().padStart(2, "0");
    const truncatedSecond = Math.floor(second).toString().padStart(2, "0");

    //stateの値を更新
    setDaysLeft(truncatedDay);
    setHoursLeft(truncatedHour);
    setMinutesLeft(truncatedMinute);
    setSecondsLeft(truncatedSecond);
  };

  //1秒ごとに実行
  setInterval(getCount, 1000);

  return (
    <>
      <p className={styles.aaa}>
        <span className={styles.countNumber}> {daysLeft}</span>
        <span className={styles.countUnit}>日</span>

        <span className={styles.countNumber}>{HoursLeft}</span>
        <span className={styles.countUnit}>時間</span>

        <span className={styles.countNumber}>{minutesLeft}</span>
        <span className={styles.countUnit}>分</span>
        <span className={styles.countNumber}>{secondsLeft}</span>
        <span className={styles.countUnit}>秒</span>
      </p>
    </>
  );
};

export default CountdownTimer;
