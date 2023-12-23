import style from "./styles/page.module.scss";
import FrontPage from "./pages/FrontPage";
import SkillsShowcase from "./pages/SkillsShowcase";
import Achievements from "./pages/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={style.mainStyle}>
      <FrontPage />
      <SkillsShowcase />
      <Achievements />
      <Footer />
    </main>
  );
}
