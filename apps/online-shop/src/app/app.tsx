import { Footer, Header } from '@mcdayen/components';

export function App() {
    return (
        <div>
            empty
            <Header />
            <picture>
                <source media="(max-width:768px)" srcSet="/assets/mobile/fashion_front.jpeg"></source>
                <source media="(min-width:769px)" srcSet="/assets/desktop/fashion_front.jpeg"></source>
                <img alt="women" src="/assets/desktop/fashion_front.jpeg" />
            </picture>
            <Footer />
        </div>
    );
}

export default App;
