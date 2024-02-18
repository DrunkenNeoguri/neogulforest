import { Suspense } from "react";
import { CheckInStyle } from "./styles/styles";
import CheckInHelpInfo from "./components/CheckInHelpInfo";
import CheckInSeatInfo from "./components/CheckInSeatInfo";
import CheckInInfo from "./components/CheckInInfo";

export default function CheckIn() {
  return (
    <section>
      <Suspense fallback={<>Loading...</>}>
        <CheckInInfo />
        <div className={CheckInStyle.articleLine} />
        <CheckInSeatInfo />
        <div className={CheckInStyle.articleLine} />
        <CheckInHelpInfo />
      </Suspense>
    </section>
  );
}
