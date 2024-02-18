import { homeStyle } from "@/app/main/styles/styles";
import Image from "next/image";

export default function MainDescription() {
  return (
    <>
      <h1 className={homeStyle.h1}>안녕하세요!</h1>
      <h2 className={homeStyle.h2}>
        {"모여봐요 너굴의 숲 모임에\n참여해주셔서 감사합니다!"}
      </h2>
      <div className={homeStyle.imageBox}>
        <Image src="/BeerRaccoon.jpg" alt="" width={256} height={256} />
      </div>
      <span className={homeStyle.Text}>
        {
          "아래의 칸에 카카오 오픈톡방 닉네임을\n기입해주신 후 버튼을 눌러주세요!"
        }
      </span>
    </>
  );
}
