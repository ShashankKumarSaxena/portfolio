import style from "../styles/skillsshowcase.module.scss";
import Image from "next/image";

export default function SkillsShowcase() {
  return (
    <div className={style.skillsContainer}>
      <h2 className={style.skillsHeading}>
        My <span className={style.greenText}>Skills</span>
      </h2>
      <div className={style.contentsContainer}>
        <div className={style.skillsImageContainer}>
          <Image
            src="/pythonlogo.svg"
            width={64}
            height={64}
            alt="Python Logo"
          />
          <Image src="/rustlogo.svg" width={64} height={64} alt="Rust Logo" />
          <Image src="/htmllogo.svg" width={64} height={64} alt="HTML Logo" />
          <Image src="/csslogo.svg" width={64} height={64} alt="CSS Logo" />
          <Image src="/javalogo.svg" width={64} height={64} alt="Java Logo" />
          <Image
            src="/javascriptlogo.svg"
            width={64}
            height={64}
            alt="Javascript Logo"
          />
          <Image
            src="/tailwindlogo.svg"
            width={64}
            height={64}
            alt="Tailwind Logo"
          />
          <Image src="/sasslogo.svg" width={64} height={64} alt="Sass Logo" />
          <Image
            src="/ubuntulogo.svg"
            width={64}
            height={64}
            alt="Ubuntu Logo"
          />
          <Image src="/nextlogo.svg" width={64} height={64} alt="NextJS Logo" />
          <Image
            src="/typescriptlogo.svg"
            width={64}
            height={64}
            alt="Typescript Logo"
          />
          <Image
            src="/nodejslogo.svg"
            width={64}
            height={64}
            alt="NodeJS Logo"
          />
          <Image
            src="/reactlogo.svg"
            width={64}
            height={64}
            alt="ReactJS Logo"
          />
          <Image
            src="/mongodblogo.svg"
            width={64}
            height={64}
            alt="MongoDB Logo"
          />
          <Image
            src="/postgresqllogo.svg"
            width={64}
            height={64}
            alt="PostgreSQL Logo"
          />
          <Image src="/redislogo.svg" width={64} height={64} alt="Redis Logo" />
        </div>
        <div className={style.quoteContainer}>
          <p>
            I am a <span className={style.purpleText}>bug bounty</span> hunter,
            <br />
            In code and threats, I reach for the sky.
            <br />A <span className={style.greenText}>developer's</span> heart,
            in me does reside,
            <br />
            In this cyber world, I take it in stride.
            <br />
          </p>
        </div>
        <div className={style.arrowContainer}>
          <Image src="/arrow.svg" alt="Arrow" width={170} height={40} />
        </div>
        <div className={style.devNote}>
          <p>Yes, I use all of them</p>
        </div>
        <div className={style.gradientBall} />
      </div>
    </div>
  );
}
