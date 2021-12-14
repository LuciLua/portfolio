import styles from './menu.module.scss'
import classNames from 'classnames'

function Menu() {
    if (typeof window !== "undefined") {
        // Client-side-only code
        window.addEventListener('scroll', function(){
            const header = document.querySelector('.memul')
            header.classList.toggle(styles.sticky, window.scrollY > 0)
            
        });
    }
    return (
        <div className={styles.menu} id="menu">
            <ul id="memul" className={classNames(styles.memul, 'memul')}>
                <li className={styles.m} id="in"><a href="./">Home</a></li>
                <li className={styles.m}><a href="./projects">Projects</a></li>
                <li className={styles.m}><a href="./about">About</a></li>
                <li className={styles.m}><a href="./contact">Contact</a></li>
                <li className={styles.m} id="dark-li"><a id="dark" href="./arts">Arts</a></li>
            </ul>
        </div>
    )
}

export default Menu