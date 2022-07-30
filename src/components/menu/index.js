import { useEffect } from 'react';
import styles from './menu.module.scss'

function Menu() {

    function openMenu() {
        const memul = document.querySelector(`.${styles.ulMenu}`)
        memul.classList.contains(`${styles.oppened}`) ? memul.classList.remove(`${styles.oppened}`) : memul.classList.add(`${styles.oppened}`)
    }

    function generateExitMenu() {
        const memul = document.querySelector(`.${styles.ulMenu}`)
        var largura = window.screen.width;

        if (largura <= 700) {
            console.log(memul)
            memul.innerHTML += "<li><a href='#'>x</a></li>"
        }
    }

    useEffect(() => {
        generateExitMenu()
    })

    return (
        <div className={styles.menu} id="menu">
            <ul className={`${styles.ulMenu}`} onClick={() => openMenu()}>
                <li className={styles.m} id="in"><a href="./">Home</a></li>
                <li className={styles.m}><a href="./projects">Projects</a></li>
                <li className={styles.m}><a href="./about">About</a></li>
                <li className={styles.m}><a href="./contact">Contact</a></li>
                { }
                <li className={styles.m} id="dark-li"><a id="dark" href="./arts">Arts</a></li>
            </ul>
        </div>
    )
}


export default Menu