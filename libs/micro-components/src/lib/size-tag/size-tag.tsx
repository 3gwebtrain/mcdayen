import { sizeProps } from "@mcdayen/prop-types";

export function SizeTag({value}:{value:sizeProps[]}) {
    return (
        <div>
            {value.map((v) => <span>{v.size}</span>)}
        </div>
    );
}

export default SizeTag;
