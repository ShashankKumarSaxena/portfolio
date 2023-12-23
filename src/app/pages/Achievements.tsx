import style from "../styles/achievements.module.scss";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className={style.achievementsContainer}>
      <h2 className={style.achievementsHeading}>
        <span className={style.purpleText}>Achievements</span> So Far
      </h2>
      <div className={style.achievementsShowcase}>
        <div className={style.achievement}>
          <h3>Holopin Badge Board</h3>
          <Image
            src="https://www.holopin.me/scypher"
            width={1250}
            height={400}
            alt="Holopin Badge Board"
          />
        </div>
        <div className={style.achievement}>
          <h3>Novu Contribution Medal</h3>
          <Image
            src="https://contributors.novu.co/profiles/ShashankKumarSaxena-small.jpg"
            width={600}
            height={250}
            alt="Novu Contribution Medal"
          />
        </div>
      </div>
    </div>
  );
}
