"use client";
import { useCheckIn } from "../hooks/useCheckIn";
import { CheckInStyle } from "../styles/styles";

export default function CheckInInfo() {
  const { username } = useCheckIn();
  return (
    <>
      <div className={CheckInStyle.description}>
        <h1 className={CheckInStyle.h1}>환영합니다!</h1>
        <h2 className={CheckInStyle.h2}>{`${username ?? "none"} 님!`}</h2>
        <span>오늘 행사에 대해서 간략하게 안내드리겠습니다!</span>
      </div>
      <div className={CheckInStyle.articleLine}></div>
      <article className={CheckInStyle.infoBox}>
        <h3 className={CheckInStyle.h3}>금일 일정</h3>
        <ul className={CheckInStyle.unOrderedList}>
          <li>일시: 2024년 2월 17일 오후 7시부터</li>
          <li>
            장소: 2·4호선 사당역 13번 출구 3분 거리
            <div className={CheckInStyle.mapBox}>
              <a href="https://kko.to/TcrHRpY2bz">막걸리학교</a>
            </div>
          </li>

          <li>진행 일정</li>
          <ol className={CheckInStyle.orderedList}>
            <li>6시 50분까지 사당역 13번 출구 집합</li>
            <li>7시 도착 후 조에 맞게 착석 후 메뉴부터 주문</li>
            <li>주문 후, 자기소개(30초~1분)</li>
            <li>이후 1시간~1시간 반 간격으로 좌석 로테이션</li>
            <li>종료 예정 시간: 오후 10시 ~ 10시 30분</li>
          </ol>
        </ul>
      </article>
    </>
  );
}
