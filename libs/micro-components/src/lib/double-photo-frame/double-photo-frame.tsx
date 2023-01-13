import styles from './double-photo-frame.module.scss';

/* eslint-disable-next-line */
export interface DoublePhotoFrameProps {}

export function DoublePhotoFrame(props: DoublePhotoFrameProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to DoublePhotoFrame!</h1>
        </div>
    );
}

export default DoublePhotoFrame;
