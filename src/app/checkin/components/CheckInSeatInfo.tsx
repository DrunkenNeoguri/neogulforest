"use client";
import { useCheckIn } from "../hooks/useCheckIn";
import { CheckInStyle } from "../styles/styles";

export default function CheckInSeatInfo() {
  const { username, first, second, third } = useCheckIn();

  return (
    <article className={CheckInStyle.infoBox}>
      <h3 className={CheckInStyle.h3}>좌석 안내</h3>
      <h4>{`${username ?? "none"} 님의 좌석 배치는 다음과 같습니다.`}</h4>
      <ul className={CheckInStyle.unOrderedList}>
        <li>{`1차: ${first ?? 0} 조`}</li>
        <li>{`2차: ${second ?? 0} 조`}</li>
        <li>{`3차: ${third ?? 0} 조`}</li>
      </ul>
    </article>
  );
}
