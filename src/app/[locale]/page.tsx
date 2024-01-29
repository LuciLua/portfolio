// Sections
import { InitialBoxSection } from "../../components/Sections/InitialBoxSection"
import { CreativeSection } from "../../components/Sections/CreativeSection"
import { SkillsSection } from "../../components/Sections/SkillsSection"
import { ProjectsSection } from "../../components/Sections/ProjectsSection"
import { EducationSection } from "../../components/Sections/EducationSection"
import { ContactSection } from "../../components/Sections/ContactSection"
import { TalkToMeSectionSeparator } from "../../components/Sections/TalkToMeSectionSeparator"

export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)]">
      <InitialBoxSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <TalkToMeSectionSeparator />
      <CreativeSection />
      <ContactSection />
    </div>
  )
}
