import styles from './single-photo-frame.module.scss';

/* eslint-disable-next-line */
export interface SinglePhotoFrameProps {}

export function SinglePhotoFrame(props: SinglePhotoFrameProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to SinglePhotoFrame!</h1>
        </div>
    );
}

export default SinglePhotoFrame;
