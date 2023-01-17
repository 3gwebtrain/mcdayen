import { TabProps } from "@mcdayen/prop-types";

export function TabButton({ tabProps, queIndex, index, callBack  }: { tabProps: TabProps, queIndex:number,index:number, callBack:(n:number) => void } ):JSX.Element {
    const { tab: { aria, label, id } } = tabProps;
    return (
        <button
            aria-pressed={aria}
            className={`${queIndex === index ? 'font-bold text-black' : ''} uppercase text-[#767676]`}
            onClick={() => callBack(queIndex)} id={id}>{label}</button>
    );
}

export default TabButton;
