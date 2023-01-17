import { imageProps } from "@mcdayen/prop-types";

export function ProductThumb({value}:{value:imageProps[]}) {
    return (
        <ul className="flex gap-2 mb-3">
            {value.map((value) => <li key={value.id}><img  alt={value.aria} src={value.urls.sm} /></li>)}
        </ul>
    );
}

export default ProductThumb;
