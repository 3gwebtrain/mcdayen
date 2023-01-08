import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Footer!</h1>
            <div className="bg-yellow-600 p-2 font-mono">Hello from footer!</div>
            <footer>Hiere </footer>
        </div>
    );
}

export default Footer;
