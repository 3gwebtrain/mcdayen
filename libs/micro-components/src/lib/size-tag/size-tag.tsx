import styles from './size-tag.module.scss';

/* eslint-disable-next-line */
export interface SizeTagProps {}

export function SizeTag(props: SizeTagProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to SizeTag!</h1>
        </div>
    );
}

export default SizeTag;
