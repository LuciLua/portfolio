import { Form } from "../Form";
import { HomepageWrap } from "../Wrap/HomepageWrap";

export function ContactSection() {
    return (
        <HomepageWrap type="full" id="contact" classNames="py-[50px] bg-[#fff]">
            <Form />
        </HomepageWrap>
    )
}