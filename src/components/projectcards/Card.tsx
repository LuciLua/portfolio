import styles from "./cards.module.scss"
import Image from "next/image"

function Card(props: any) {

    const { titleApp, descriptionApp, githubHref, directLinkHrefApp, shortTitle, mainImgSrc } = props

    function verifyGithubRepo() {
        if (githubHref) {
            return (
                <a target="_blank" rel="noreferrer" href={githubHref} className={styles.git}>
                    <button>GitHub</button>
                    <div className={styles.imgBtn}>
                        <Image
                            src="/gitgo.svg"
                            title="Github"
                            alt="Github"
                            layout="fill"
                        />
                    </div>
                </a>
            )
        }
    }
    function verifyDirectLink() {
        if (directLinkHrefApp) {
            return (
                <a target="_blank" rel="noreferrer" href={directLinkHrefApp} className={styles.acc}>
                    <button>Acessar</button>
                    <div className={styles.imgBtn}>
                        <Image
                            src="/go.svg"
                            title="Acessar"
                            alt="Acessar"
                            layout="fill"
                        />
                    </div>
                </a>
            )
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2>{titleApp}</h2>
                <p>{descriptionApp}</p>
            </div>
            <div className={styles.btnH}>
                {verifyGithubRepo()}
                {verifyDirectLink()}
            </div>
            <Image
                className={styles.imgMain}
                src={mainImgSrc}
                alt={shortTitle}
                title={shortTitle}
                layout='fill'
            />
        </div>
    )
}

export default Card