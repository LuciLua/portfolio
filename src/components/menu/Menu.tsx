import styles from "./menu.module.scss";

import { AiOutlineMenu } from "react-icons/ai";

function Menu() {
  function openMenu() {
    const memul = document.querySelector(`.${styles.ulMenu}`);
    memul.classList.contains(`${styles.oppened}`)
      ? memul.classList.remove(`${styles.oppened}`)
      : memul.classList.add(`${styles.oppened}`);
  }

  return (
    <div className={styles.menu} id="menu">
      <ul className={`${styles.ulMenu}`} onClick={() => openMenu()}>
        <span>
          <AiOutlineMenu />
        </span>
        <li className={styles.m} id="in">
          <a href="./">Home</a>
        </li>
        <li className={styles.m}>
          <a href="./projects">Projects</a>
        </li>
        <li className={styles.m}>
          <a href="./about">About</a>
        </li>
        <li className={styles.m}>
          <a href="./contact">Contact</a>
        </li>
        <li className={styles.m} id="dark-li">
          <a id="dark" href="./arts">
            Arts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
