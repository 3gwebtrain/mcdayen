import {
    AddCartBtn,
    ProductInfo,
    ProductPrice,
    ProductThumb,
    ProductTitle, SizeGuide, SizeSelected, SizeTag, ThumbTitle
} from '@mcdayen/micro-components';
import { CartProps, sizeProps } from '@mcdayen/prop-types';

export function ProductCart({ passCartProps, sizeSelect}: { passCartProps: CartProps, sizeSelect:(v:sizeProps)=>void }): JSX.Element {
    const { title, titleInfo, price, titileThumb, thumbUrls, sizeSelected, sizeGuide, sizeLabels, addBtnLabel } = passCartProps;
    
    return (
        <div  className="flex flex-col sm:pr-10">
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
    );
}

export default ProductCart;
