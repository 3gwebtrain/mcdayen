import { imageProps } from "@mcdayen/prop-types";

export function ProductThumb({value}:{value:imageProps[]}) {
    return (
        <div>
            {value.map((v) => <span key={v.id}>{v.urls.sm}</span>)}
        </div>
    );
}

export default ProductThumb;
