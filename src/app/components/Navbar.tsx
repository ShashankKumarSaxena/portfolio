import style from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={style.navbarContainer}>
      <ul className={style.navbarItemsContainer}>
        <li className={style.name}>Shashank Saxena</li>
        <li className={style.getintouchBtn}>
          <a href="#" className={style.getintouchLink}>
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
