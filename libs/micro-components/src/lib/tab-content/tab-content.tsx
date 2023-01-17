import { TabContentProps } from "@mcdayen/prop-types";

export function TabContent({ contents }:TabContentProps ) {
    const { content } = contents
    return (
        <div>
            <div className="mb-7">
                {content.des}
            </div>
            <div className="mb-7">
                {content.note.text} <a className="uppercase underline" href="https://google.com">{content.note.link}</a>
            </div>
            <div>
                {content.learn.text} <a className="uppercase underline" href="https://google.com">{content.learn.link}</a> 
            </div>
        </div>
    );
}

export default TabContent;
