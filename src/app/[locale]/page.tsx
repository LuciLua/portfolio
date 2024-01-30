// Sections
import { InitialBoxSection } from "../../components/Sections/InitialBoxSection/InitialBoxSection"
import { CreativeSection } from "../../components/Sections/CreativeSection"
import { SkillsSection } from "../../components/Sections/SkillsSection/SkillsSection"
import { ProjectsSection } from "../../components/Sections/ProjectsSection/ProjectsSection"
import { EducationSection } from "../../components/Sections/EducationSection"
import { ContactSection } from "../../components/Sections/ContactSection/ContactSection"
import { TalkToMeSectionSeparator } from "../../components/Sections/TalkToMeSectionSeparator"
import { Suspense } from "react"
import { InitialBoxSectionSkeleton } from "../../components/Skeletons/Sections/InitialBoxSectionSkeleton"

export default function homepage() {
  return (
    <div className="flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)]">
      <Suspense fallback={<InitialBoxSectionSkeleton />}>
        <InitialBoxSection />
      </Suspense>
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <TalkToMeSectionSeparator />
      <CreativeSection />
      <ContactSection />
    </div>
  )
}
