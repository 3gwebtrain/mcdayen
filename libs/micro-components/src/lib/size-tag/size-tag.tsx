import { sizeProps } from "@mcdayen/prop-types";

export function SizeTag({ value }: { value: sizeProps[] }) {
   
    function setSize(size:sizeProps) {
        console.log(size);
    }
    return (
        <div className="flex gap-2 flex-wrap flex-justify mb-6">
            {value.map((v) => <span className="w-1/5">
                <button
                    onClick={() => setSize(v)}
                    className="rounded-full border-2 border-gray-600/[.55]  text-xs px-4 py-1 hover:bg-black hover:text-white" key={v.id}>{v.size}</button>
            </span>)}
        </div>
    );
}

export default SizeTag;
