import {
    AddCartBtn,
    ProductInfo,
    ProductPrice,
    ProductThumb,
    ProductTitle, SizeGuide, SizeSelected, SizeTag, ThumbTitle
} from '@mcdayen/micro-components';
import { CartProps, sizeProps } from '@mcdayen/prop-types';
import { useEffect, useState } from 'react';

export function ProductCart({ passCartProps, sizeSelect }: { passCartProps: CartProps, sizeSelect: (v: sizeProps) => void }): JSX.Element {
    const { title, titleInfo, price, titileThumb, thumbUrls, sizeSelected, sizeGuide, sizeLabels, addBtnLabel } = passCartProps;
    const [isFixed, setIsFixed] = useState(false);
 
    useEffect(() => {
        
        const imageElment = document.getElementById('model_full');
        if (!imageElment) return;
    
        const scrollListner = () => {
            const rect = imageElment?.getBoundingClientRect();
             if (rect.bottom < window.innerHeight) {
                setIsFixed(false);
            } else {
                setIsFixed(true);
            }
            
        }
        const mobileId = document.getElementById('mobileMenu');
        if (mobileId?.offsetParent === null && imageElment !== null) {
            window.addEventListener('scroll', scrollListner);
        }
        return () => window.removeEventListener('scroll', scrollListner);

    }, []);
    
    return (
        <div  className="relative w-[325px]">
            <div className={`${isFixed ? 'sticky' : ''} flex flex-col p-10 right-0 top-0 bg-white`} >
                {title.status && <ProductTitle {...title} />}
                {titleInfo.status && <ProductInfo {...titleInfo} />}
                {price.status && <ProductPrice {...price} />}
                {titileThumb.status && <ThumbTitle {...titileThumb} />}
                {thumbUrls.status && <ProductThumb {...thumbUrls} />}
                <div className="flex justify-between">
                    {sizeSelected.status && <SizeSelected  {...sizeSelected} />}
                    {sizeGuide.status && <SizeGuide {...sizeGuide} />}
                </div>
                {sizeLabels.status && <SizeTag sizeSelectFn={sizeSelect}  {...sizeLabels} /> }
                {addBtnLabel.status && <AddCartBtn {...addBtnLabel} /> }
            </div>
        </div>
    );
}

export default ProductCart;
