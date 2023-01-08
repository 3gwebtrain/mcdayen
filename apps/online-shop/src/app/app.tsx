import { Footer, Header } from '@mcdayen/components';
import { Cart, Logo, NaviLinks, QuickSearch, User } from '@mcdayen/micro-components';
import { initialNaviLinksProps, NameProps } from '@mcdayen/prop-types';

const nameData: NameProps = {
    name: 'Mohamed Arif',
};

export function App() {
    return (
        <div className="flex flex-col py-6 pl-[70px] pr-5  border-solid border-2 border-green-200 min-h-screen flex-wrap">
            <Header>
                <Logo />
                <NaviLinks naviLinks={initialNaviLinksProps} />
                <div className="flex gap-3">
                    <QuickSearch />
                    <Cart />
                    <User />
                </div>
            </Header>
            <div className="bg-indigo-500 p-2 text-xs">Hello! {nameData.name}</div>
            <picture>
                <source media="(max-width:768px)" srcSet="/assets/mobile/model_front.jpeg"></source>
                <source media="(min-width:769px)" srcSet="/assets/desktop/model_front.jpeg"></source>
                <img alt="women" src="/assets/desktop/model_front.jpeg" />
            </picture>
            <Footer />
        </div>
    );
}

export default App;
