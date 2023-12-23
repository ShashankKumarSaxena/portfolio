import style from "../styles/frontpage.module.scss";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function FrontPage() {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.itemsContainer}>
        <div className={style.descriptionContainer}>
          <h1>
            Bug Bounty Hunter,
            <br />
            Full Stack Developer 👋
          </h1>
          <p>
            Hi, I'm Shashank Saxena.
            <br />
            portfolio = {"{"}
            <br />
            <span className={style.oneSpace}>
              "Role": "Part-time Bug Bounty Hunter",
            </span>
            <br />
            <span className={style.oneSpace}>
              "Interests": {"["}"Cyber Security Enthusiast",
              <br />
            </span>
            <span className={style.threeSpace}>
              "Passionate Developer"{"]"}
            </span>
            <br />
            <span className={style.twoSpace}>{"}"}</span>
          </p>
          <div className={style.socialsContainer}>
            <a href="#">
              <Image
                src="/github.svg"
                alt="Github Logo"
                width={32}
                height={32}
                className={style.socialsLogo}
              />
            </a>
            <a href="#">
              <Image
                src="/linkedin.svg"
                alt="Linkedin Logo"
                width={32}
                height={32}
                className={style.socialsLogo}
              />
            </a>
            <a href="#">
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                width={32}
                height={32}
                className={style.socialsLogo}
              />
            </a>
            <a href="#">
              <Image
                src="/hackerrank.svg"
                alt="HackerRank Log"
                width={32}
                height={32}
                className={style.socialsLogo}
              />
            </a>
            <a href="#">
              <Image
                src="/devto.svg"
                alt="Dev.to Logo"
                width={32}
                height={32}
                className={style.socialsLogo}
              />
            </a>
          </div>
        </div>
        <div className={style.imageContainer}>
          {/* <Image
            src="/profilepic.png"
            alt="Scypher!"
            width={325}
            height={325}
            className={style.profileImage}
          /> */}
          <Image
            src="/profilebase.jpg"
            alt="Scypher!"
            width={325}
            height={325}
            className={style.profileImage}
          />
          <Image
            src="/thugglasses.png"
            alt="Thug Life!"
            width={250}
            height={250}
            className={style.thugGlasses}
          />
        </div>
      </div>
      <div className={style.gradientBall}></div>
    </div>
  );
}
