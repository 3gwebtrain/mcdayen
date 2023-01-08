import styles from './micro-components.module.scss';

/* eslint-disable-next-line */
export interface MicroComponentsProps {}

export function MicroComponents(props: MicroComponentsProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to MicroComponents!</h1>
        </div>
    );
}

export default MicroComponents;
