import styles from './index.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>LuciLua@2021</p>
            <br />
            <div className={styles.icosFooter}>
                <div className={styles.ico}>
                    <a target="_blank" rel="noopener" href="https://github.com/LuciLua"><img src="./github.svg" alt="GitHub"
                        title="GitHub" /></a>
                </div>
                <div className={styles.ico}>
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"><img
                        src="./linkedin.svg" alt="Linkedin" title="Linkedin" /></a>
                </div>
                <div className={styles.ico}>
                    <a target="_blank" rel="noopener" href="https://br.pinterest.com/lucilua81"><img src="./pinterest.svg"
                        alt="Pinterest" title="Pinterest" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer