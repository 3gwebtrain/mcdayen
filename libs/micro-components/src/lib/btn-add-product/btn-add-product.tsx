import styles from './btn-add-product.module.scss';

/* eslint-disable-next-line */
export interface BtnAddProductProps {}

export function BtnAddProduct(props: BtnAddProductProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to BtnAddProduct!</h1>
        </div>
    );
}

export default BtnAddProduct;
