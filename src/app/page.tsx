import style from "./styles/page.module.scss";
import FrontPage from "./pages/FrontPage";
import SkillsShowcase from "./pages/SkillsShowcase";

export default function Home() {
  return (
    <main className={style.mainStyle}>
      <FrontPage />
      <SkillsShowcase />
    </main>
  );
}
