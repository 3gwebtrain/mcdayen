import { imageProps } from "@mcdayen/prop-types";

export function ProductThumb({value}:{value:imageProps[]}) {
    return (
        <ul className="flex gap-2">
            {value.map((v) => <li><img key={v.id} alt={v.aria} src={v.urls.sm} /></li>)}
        </ul>
    );
}

export default ProductThumb;
