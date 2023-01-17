import { TabButton, TabContent } from "@mcdayen/micro-components";
import { TabContentProps, TabsProps } from "@mcdayen/prop-types";
import { useEffect, useState } from "react";

export function Tabs({ tabProps }: { tabProps: TabsProps }) {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [tabContent, setTabContent] = useState<TabContentProps|null>(null)
    function tabHandler(queIndex: number) {
        setTabIndex(queIndex);
    }
    useEffect(() => {
        const content = tabProps[tabIndex];
       setTabContent(content);
    }, [tabIndex, setTabContent, tabProps]);
    
    return <><div className="flex flex-wrap gap-5 mb-1">
            {tabProps.length && tabProps.map((tabData, index:number) => {
                return <div  key={tabData.tab.id}>
                    <TabButton tabProps={tabData} index={tabIndex} queIndex={index} callBack={tabHandler}  />
                </div>
            })}
        </div>
            {tabContent && <TabContent {...tabContent} />}
        </>
}

export default Tabs;
