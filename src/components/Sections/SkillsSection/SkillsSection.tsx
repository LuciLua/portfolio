import { skills } from "../../../../public/lib/elements/skills"
import { Skill } from "./SkillsComponent/Skill"
import { TitleHomeSections } from "../../TitleHomeSections"
import { TitleSkills } from "./SkillsComponent/TitleSkills"
import { HomepageWrap } from "../../Wrap/HomepageWrap"

export function SkillsSection() {

    const { skills_backend, skills_frontend, skills_others } = skills

    return (
        <HomepageWrap type="strict" className="flex-col">
            <TitleHomeSections section="skills" />
            <div className="flex justify-around py-10 w-full xl:flex-row flex-col items-start gap-5">
                {/* backend box */}
                <div className="xl:w-full max-w-[800px] xl:m-0 m-auto flex flex-wrap xl:justify-start justify-center gap-4 border-[1px] border-[var(--border-medium)] rounded-[12px]">
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
                {/* frontend box */}
                <div className="xl:w-full max-w-[800px] xl:m-0 m-auto   flex flex-wrap  justify-center gap-4 border-[1px] relative border-[var(--border-medium)] rounded-[12px]">
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
                {/* others box */}
                <div className="xl:w-full max-w-[800px] xl:m-0 m-auto flex flex-wrap xl:justify-start justify-center gap-4  border-[1px] border-[var(--border-medium)] rounded-[12px] ">
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
        </HomepageWrap >
    )
}