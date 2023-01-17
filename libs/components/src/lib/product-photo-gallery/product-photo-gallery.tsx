import { PhotoPropsArray } from "@mcdayen/prop-types";
import { ReactNode } from "react";

export function ProductPhotoGallery({ gallery }: { gallery: PhotoPropsArray }) {

    function imagePanetrator(imgGallery:PhotoPropsArray):ReactNode {
        return imgGallery.map((imageProp, index) => {
            if (!Array.isArray(imageProp)) {
                return <li className="text-center" key={imageProp.id}>
                    <picture>
                        <source media="(max-width:768px)" srcSet={imageProp.urls.sm}></source>
                        <source  media="(min-width:1024px)" srcSet={imageProp.urls.lg}></source>
                        <img id={imageProp.id} className="max-w-full" alt={imageProp.alt} src={imageProp.urls.lg} />
                    </picture>
                </li>;
            };
            return <li key={index} className="flex">{imageProp.map(imgs => <picture key={imgs.id}>
                        <source media="(max-width:768px)" srcSet={imgs.urls.sm}></source>
                        <source media="(min-width:1024px)" srcSet={imgs.urls.lg}></source>
                        <img className="max-w-full" id={imgs.id} alt={imgs.alt} src={imgs.urls.lg} />
                    </picture>)}</li>
        });
    
    }

    return (
        <ul className="flex flex-col gap-y-8 p-10">
            {imagePanetrator(gallery) }
        </ul>
    );
}

export default ProductPhotoGallery;
