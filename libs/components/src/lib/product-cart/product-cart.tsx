import { ProductInfo } from '@mcdayen/micro-components';
import { CartProps } from '@mcdayen/prop-types';

export function ProductCart({ passCartProps }: { passCartProps: CartProps }): JSX.Element {
    const { title } = passCartProps;
    return (
        <div>
            {title.status && <ProductInfo passProductInfo={title.value} /> }
        </div>
    );
}

export default ProductCart;
