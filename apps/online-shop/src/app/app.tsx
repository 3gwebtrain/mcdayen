import { Footer, Header } from '@mcdayen/components';
import { NameProps } from '@mcdayen/prop-types';

const nameData: NameProps = {
    name: 'Mohamed Arif',
};

export function App() {
    return (
        <div>
            <div className="bg-indigo-500 p-2 font-mono">Hello! {nameData.name}</div>
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
