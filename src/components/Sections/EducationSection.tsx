import { ViewCV } from "../Btns/ViewCV";
import { CurriculumModal } from "../Modals/CurriculumModal";
import { EducationBox } from "../EducationBox";
import { TitleHomeSections } from "../TitleHomeSections";
import { HomepageWrap } from "../Wrap/HomepageWrap";

export function EducationSection() {
    return (
        <HomepageWrap type="strict" className="flex-col">
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
        </HomepageWrap>
    )
}