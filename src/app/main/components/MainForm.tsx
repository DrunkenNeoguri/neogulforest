"use client";
import { homeStyle } from "@/app/main/styles/styles";
import { useMainForm } from "../hooks/useMainForm";

export default function MainForm() {
  const { userName, setUserName, submitCheckInData } = useMainForm();
  return (
    <form className={homeStyle.form} onSubmit={(e) => submitCheckInData(e)}>
      <input
        className={homeStyle.input}
        onChange={(e) => setUserName(e.currentTarget.value)}
        value={userName}
      />
      <button className={homeStyle.button} type="submit">
        체크인!
      </button>
    </form>
  );
}
