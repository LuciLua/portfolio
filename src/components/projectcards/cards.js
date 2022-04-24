import styles from "./cards.module.scss"
import Image from "next/image"

function ProjectCard(props) {

    const { titleApp, descriptionApp, githubHref, directLinkHrefApp, shortTitle, mainImgSrc } = props

    function verifyGithubRepo() {
        if (githubHref) {
            return (
                <a target="_blank" rel="noreferrer" href={githubHref} className={styles.git}>
                    <Image
                        src="/gitgo.svg"
                        title="Github"
                        alt="Github"
                        layout="fill"
                    />
                    <button>GitHub</button>
                </a>
            )
        }
    }
    function verifyDirectLink() {
        if (directLinkHrefApp) {
            return (
                <a target="_blank" rel="noreferrer" href={directLinkHrefApp} className={styles.acc}>
                    <Image
                        src="/go.svg"
                        title="Acessar"
                        alt="Acessar"
                        layout="fill"
                    />
                    <button>Acessar</button>
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

export default ProjectCard