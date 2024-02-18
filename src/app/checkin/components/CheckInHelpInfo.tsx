import { CheckInStyle } from "../styles/styles";

export default function CheckInHelpInfo() {
  return (
    <article className={CheckInStyle.infoBox}>
      <h3 className={CheckInStyle.h3}>대화가 어려우신가요?</h3>
      <div>대화 소재를 이끌어가시는 게 어려우신가요?</div>
      <div>아래의 주제들로 대화를 시작해보세요!</div>
      <ul className={CheckInStyle.unOrderedList}>
        <ol className={CheckInStyle.orderedList}>
          <li>회사에 대한 것들 (업무, 회사 분위기, 동료에 대한 이야기)</li>
          <li>자신에 대한 이야기 (취미, 개발 취향, 프로젝트)</li>
          <li>작년에 대한 회고나 올해 세운 목표</li>
          <li>좋아하는 것에 대한 이야기</li>
        </ol>
      </ul>
      <span>그래도 대화가 잇기 어렵다고 하시는 분들!</span>
      <span>너구리를 불러주시면 진행시켜 드리겠습니다!</span>
    </article>
  );
}
