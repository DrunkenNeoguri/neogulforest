"use client";
import Image from "next/image";
import { homeStyle } from "./page.styles";
import { useLogin } from "@/hooks/useLogin";

export default function Home() {
  const { userName, setUserName, activeCheckin } = useLogin();
  return (
    <main>
      <section className={homeStyle.section}>
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
        <form className={homeStyle.form} onSubmit={(e) => activeCheckin(e)}>
          <input
            className={homeStyle.input}
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={userName}
          />
          <button className={homeStyle.button} type="submit">
            체크인!
          </button>
        </form>
      </section>
    </main>
  );
}
