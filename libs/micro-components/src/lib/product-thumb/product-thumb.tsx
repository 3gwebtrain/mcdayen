import styles from './product-thumb.module.scss';

/* eslint-disable-next-line */
export interface ProductThumbProps {}

export function ProductThumb(props: ProductThumbProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to ProductThumb!</h1>
        </div>
    );
}

export default ProductThumb;
