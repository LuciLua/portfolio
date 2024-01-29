import { BiLogoAngular, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoVuejs, BiWorld } from "react-icons/bi"
import { SiAdobeindesign, SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiNpm, SiPostgresql, SiPython } from "react-icons/si"

export const skills_backend = [
    {
        label: "NodeJs",
        icon: <BiLogoNodejs className="text-[30px]" />,
    },
    {
        label: "Javascript",
        icon: <BiLogoJavascript className="text-[30px]" />,
    },
    {
        label: "Express",
        icon: <SiExpress className="text-[30px]" />,
    },
    {
        label: "Postgresql",
        icon: <SiPostgresql className="text-[30px]" />,
    },
    {
        label: "MySQL",
        icon: <SiMysql className="text-[30px]" />,
    },
    {
        label: "MongoDB",
        icon: <SiMongodb className="text-[30px]" />,
    },
    {
        label: "Python",
        icon: <SiPython className="text-[30px]" />,
    },
]

export const skills_frontend = [
    {
        label: "HTML",
        icon: <BiLogoHtml5 className="text-[30px]" />,
    },
    {
        label: "CSS",
        icon: <BiLogoCss3 className="text-[30px]" />,
    },
    {
        label: "TailwindCSS",
        icon: <BiLogoTailwindCss className="text-[30px]" />,
    },
    {
        label: "Typescript",
        icon: <BiLogoTypescript className="text-[30px]" />,
    },
    {
        label: "React",
        icon: <BiLogoReact className="text-[30px]" />,
    },
    {
        label: "AngularJs",
        icon: <BiLogoAngular className="text-[30px]" />,
    },
    {
        label: "VueJs",
        icon: <BiLogoVuejs className="text-[30px]" />,
    },
    {
        label: "NextJs",
        icon: <SiNextdotjs className="text-[30px]" />,
    },
    {
        label: "JavaScript",
        icon: <BiLogoJavascript className="text-[30px]" />,
    },
]

export const skills_others = [
    {
        label: "Git",
        icon: <BiLogoGit className="text-[30px]" />,
    },
    {
        label: "GitHub",
        icon: <BiLogoGithub className="text-[30px]" />,
    },
    {
        label: "SEO",
        icon: <BiWorld className="text-[30px]" />,
    },
    {
        label: "NPM and Yarn",
        icon: <SiNpm className="text-[30px]" />,
    },
    {
        label: "UI/UX Design",
        icon: <SiAdobeindesign className="text-[30px]" />,
    },
]

export const skills = { skills_backend, skills_frontend, skills_others }