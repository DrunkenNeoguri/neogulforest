import { homeStyle } from "./styles/styles";
import MainDescription from "./components/MainDescription";
import MainForm from "./components/MainForm";

export default function MainPage() {
  return (
    <section className={homeStyle.section}>
      <MainDescription />
      <MainForm />
    </section>
  );
}
