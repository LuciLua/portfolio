"use client"

import { HomepageWrap } from "../../Wrap/HomepageWrap"

export function InitialBoxSectionSkeleton() {
    return (
        <HomepageWrap type="strict" className="xl:min-h-[900px] pt-[120px] justify-center items-center gap-5 flex-row">
            <div className="animate-ping delay-1000 bg-[#7e7e7e] w-[20px] h-[20px] rounded-full" />
            <div className="animate-ping delay-200 bg-[#7e7e7e] w-[20px] h-[20px] rounded-full" />
            <div className="animate-ping delay-100 bg-[#7e7e7e] w-[20px] h-[20px] rounded-full" />
        </HomepageWrap>
    )
}
