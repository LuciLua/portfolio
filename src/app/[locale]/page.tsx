import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
  BiWorld,
} from "react-icons/bi"
import {
  SiAdobeindesign,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
} from "react-icons/si"
import { ViewCV } from "../../components/Btns/ViewCV"
import { CurriculumModal } from "../../components/CurriculumModal"
import { EducationBox } from "../../components/EducationBox"
import { InitialBox } from "../../components/InitialBox"
import { Project } from "../../components/Project"
import { AiOutlineArrowRight } from "react-icons/ai"

import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { HorizontalScrolling } from "../../components/HorizontalScrolling"
import { TitleHomeSections } from "../../components/TitleHomeSections"
import { DiscoveryMoreProjects } from "../../components/Btns/DiscoveyMoreProjects"
import { Form } from "../../components/Form"
import { Skill } from "../../components/Skill"
import { TitleSkills } from "../../components/TitleSkills"

export default function homepage() {
  const skills_backend = [
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

  const skills_frontend = [
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

  const skills_others = [
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

  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)] ">
      <div className="flex w-full max-w-[1300px] h-fit xl:max-h-fit xl:min-h-[900px] xl:h-fit px-[10px] pt-[80px]  items-center pb-[40px] mx-auto">
        <InitialBox />
      </div>
      {/* Projects Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="projects" />
        <div className="my-[40px] flex w-full justify-center gap-12 flex-wrap transform perspective-3d">
          <Project
            key={"hidrofobia"}
            name={"Hidrofobia"}
            img={"/assets/projects/hidrofobia.png"}
            url={"https://curtahidrofobia.com/"}
            stack={["reactJS", "nextJS", "tailwindcss"]}
            description="Hidrofobia is a website developed with the purpose of promoting the film that I produced and directed. Not just publicizing, but being a means of raising funds for the film's production through a personalized and exclusive form integrated with Google Forms. In this project there is also a gallery of behind-the-scenes photos from the recording days."
          />
          <Project
            key={"Somuuh"}
            name={"Somuuh"}
            img={"/assets/projects/somuuh.png"}
            url={"https://somuuh.vercel.app/"}
            stack={[
              "reactJS",
              "nextJS",
              "tailwindcss",
              "next-auth",
              "typescript",
            ]}
            description="Somuuh is a social network project focused on working with authentication and design. Exploring references such as Instagram, Twitter and Spotify."
          />
          <Project
            key={"Notein"}
            name={"NoteIn"}
            img={"/assets/projects/notein.png"}
            url={"https://notein.vercel.app/"}
            stack={[
              "reactJS",
              "nextJS",
              "sass",
              "mongoDB",
              "typescript",
              "axios",
            ]}
            description="NoteIn is a project in which I focused on working with authentication with a non-real database (mongoDB)"
          />
          <Project
            key={"Pokedex"}
            name={"Pokedex"}
            img={"/assets/projects/pokedex.png"}
            url={"https://pokedeex.vercel.app/"}
            stack={["reactJS", "nextJS", "sass"]}
            description="Pokedex is a project that aims to bring together all the pokemons in one place, with their information, such as abilities (in bars) and images"
          />
          <Project
            key={"ToDo"}
            name={"ToDo"}
            img={"/assets/projects/todo.png"}
            url={"https://todo-lucilua.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "localStorage"]}
            description="ToDo is a web application that seeks to store items defined by the user in the browser, mark them as completed or even remove them. React, Next.js, LocalStorage, Typescript and SASS were used."
          />
          <Project
            key={"Compare"}
            name={"Compare"}
            img={"/assets/projects/compare.png"}
            url={"https://compare-orpin.vercel.app/"}
            stack={["reactJS", "nextJS", "sass", "typescript", "axios"]}
            description="Compare is an application that compares a list of followers of a user on github with the list of people that this user follows, generating two other lists: that of users that the current user follows but does not follow him back, and that of users that the current user does not follow but follow him. Generating a link for each user profile in these two lists, allowing you to follow or unfollow users."
          />
        </div>
        <div className="w-full flex justify-center items-center border-b-[1px] max-w-[1150px] mx-auto pb-[20px]">
          <DiscoveryMoreProjects />
        </div>
      </div>
      {/* Education Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="education" />
        <div className="flex w-full justify-center gap-5 flex-wrap p-[20px]">
          <EducationBox
            idCourse="webModerno"
            key={"webModerno"}
            title="Curso Web Moderno Completo - Udemy"
            duration="97 hours"
            date="2021-2023"
            description="In this course, I learned about Javascript, Web Concepts, HTML and CSS, Ajax Webpack, jQuery, Bootstrap, React, VueJs, Electron, Angular 9, Database (relational and NoSQL) and Express."
            credentials
            credentialsLink="https://www.udemy.com/certificate/UC-495b9d41-0005-46b2-9530-dae148592fa8/"
            credentialsLabel="Credentials"
          />
          <EducationBox
            idCourse="biArts"
            key={"biArts"}
            style="opacity-90 xl:max-w-[600px]"
            title="Bacharelado Interdisciplinar em Artes e Design | UFJF"
            duration="3 years"
            date="2019-2022"
            description="Graduated in Arts and Design from UFJF, I had contact with the areas of Design, Cinema and Audiovisual, Fashion, and Visual Arts. During this period, I absorbed content related to the arts and their reverberations."
            credentials
            credentialsLink="/docs/arts.pdf"
            credentialsLabel="University Degree"
            moreText
          />
          <EducationBox
            idCourse="biCinema"
            key={"biCinema"}
            style="opacity-90 xl:max-w-[600px]"
            title="Bacharelado em Cinema e Audiovisual | UFJF"
            duration="2 years"
            date="2022-2024"
            description="As a Cinema and Audiovisual student I have knowledge about screenwriting, montage and editing (of videos/films), film theory, among others. I have already produced some audiovisual content and films."
            moreText
          />

          <div className="flex gap-5 justify-center pt-10 items-center w-full">
            <ViewCV />
            <CurriculumModal />
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="mx-auto w-full max-w-[1300px] py-[20px] px-[10px]">
        <TitleHomeSections section="skills" />
        <div className="flex justify-around py-10 w-full xl:flex-row flex-col items-start gap-5">
          <div className="w-full xl:w-full flex flex-wrap xl:justify-start justify-center gap-4 border-[1px] border-[var(--border-medium)] rounded-[12px]">
            <TitleSkills title="backend" />
            <ul className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              {skills_backend.map((skill) => {
                return (
                  <Skill
                    key={`b_${skill.label}`}
                    icon={skill.icon}
                    label={skill.label}
                  />
                )
              })}
            </ul>
          </div>
          <div className="w-full xl:w-full   flex flex-wrap  justify-center gap-4 border-[1px] relative border-[var(--border-medium)] rounded-[12px]">
            <TitleSkills title="frontend" main />
            <ul className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              {skills_frontend.map((skill) => {
                return (
                  <Skill
                    key={`f_${skill.label}`}
                    icon={skill.icon}
                    label={skill.label}
                  />
                )
              })}
            </ul>
          </div>
          <div className="w-full xl:w-full   flex flex-wrap xl:justify-start justify-center gap-4  border-[1px] border-[var(--border-medium)] rounded-[12px]">
            <TitleSkills title="others" />
            <ul className="p-5 flex flex-wrap xl:justify-start justify-evenly gap-3">
              {skills_others.map((skill) => {
                return (
                  <Skill
                    key={`o_${skill.label}`}
                    icon={skill.icon}
                    label={skill.label}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <p className="xl:text-[18px] text-nowrap text-sm w-full h-fit flex justify-center items-center font-[500] py-4 bg-black text-[#fff]">
        <span className="underline mr-1 flex gap-2 justify-center items-center">
          <IoChatbubbleEllipsesOutline /> Talk to me
        </span>{" "}
        and I can tell you about my{" "}
        <span className="bg-[#121212] text-[#fff]  ml-1 px-1 rounded-[3px]">
          soft skills!
        </span>
      </p>
      <HorizontalScrolling />
      <div
        className="min-h-[100svh] h-fit bg-white flex justify-center items-center"
        id="contact"
      >
        <Form />
      </div>
    </div>
  )
}
