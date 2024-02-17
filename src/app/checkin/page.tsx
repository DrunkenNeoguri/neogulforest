"use client";
import { useCheckIn } from "@/hooks/useCheckin";
import { CheckInStyle } from "./page.styles";
import { Suspense } from "react";

export default function CheckIn() {
  const { username, first, second, third } = useCheckIn();

  return (
    <main>
      <Suspense fallback={<>Loading...</>}>
        <section className={CheckInStyle.section}>
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
          <div className={CheckInStyle.articleLine}></div>
          <article className={CheckInStyle.infoBox}>
            <h3 className={CheckInStyle.h3}>좌석 안내</h3>
            <h4>{`${username ?? "none"} 님의 좌석 배치는 다음과 같습니다.`}</h4>
            <ul className={CheckInStyle.unOrderedList}>
              <li>{`1차: ${first ?? 0} 조`}</li>
              <li>{`2차: ${second ?? 0} 조`}</li>
              <li>{`3차: ${third ?? 0} 조`}</li>
            </ul>
          </article>
          <div className={CheckInStyle.articleLine}></div>
          <article className={CheckInStyle.infoBox}>
            <h3 className={CheckInStyle.h3}>대화가 어려우신가요?</h3>
            <div>대화 소재를 이끌어가시는 게 어려우신가요?</div>
            <div>아래의 주제들로 대화를 시작해보세요!</div>
            <ul className={CheckInStyle.unOrderedList}>
              <ol className={CheckInStyle.orderedList}>
                <li>
                  회사에 대한 것들 (업무, 회사 분위기, 동료에 대한 이야기)
                </li>
                <li>자신에 대한 이야기 (취미, 개발 취향, 프로젝트)</li>
                <li>작년에 대한 회고나 올해 세운 목표</li>
                <li>좋아하는 것에 대한 이야기</li>
              </ol>
            </ul>
            <span>그래도 대화가 잇기 어렵다고 하시는 분들!</span>
            <span>너구리를 불러주시면 진행시켜 드리겠습니다!</span>
          </article>
        </section>
      </Suspense>
    </main>
  );
}
