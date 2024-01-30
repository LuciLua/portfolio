import { HomepageWrap } from "../../../components/Wrap/HomepageWrap";

export default function root_services({ children }) {
    return (
        <HomepageWrap className="text-[var(--text-default)] flex w-full h-full justify-center max-w-[100vw] overflow-x-hidden flex-col bg-[var(--bg-default)] min-h-[calc(100svh-140px)]" type="full">
            <h1>Services ROOT</h1>
            {children}
        </HomepageWrap>
    )
}