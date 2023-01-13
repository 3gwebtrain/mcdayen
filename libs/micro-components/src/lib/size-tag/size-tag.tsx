import { sizeProps } from "@mcdayen/prop-types";

export function SizeTag({ value, sizeSelectFn }: { value: sizeProps[], sizeSelectFn: (v:sizeProps)=>void }) {
    return (
        <div className="flex gap-2 flex-wrap flex-justify mb-6">
            {value.map((v) => <span className="w-1/5" key={v.id}>
                <button
                    onClick={() => sizeSelectFn(v)}
                    className="rounded-full border-2 border-gray-600/[.55]  text-xs px-4 py-1 hover:bg-black hover:text-white" key={v.id}>{v.size}</button>
            </span>)}
        </div>
    );
}

export default SizeTag;
