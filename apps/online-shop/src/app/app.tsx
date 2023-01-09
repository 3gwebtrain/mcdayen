import { Footer, Header } from '@mcdayen/components';
import { Cart, Logo, MobileMenu, NaviLinks, QuickSearch, User } from '@mcdayen/micro-components';
import { initialNaviLinksProps } from '@mcdayen/prop-types';
import { useEffect, useState } from 'react';

export function App() {
    
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [linkProps, setLinkProps] = useState(initialNaviLinksProps);

    function mobileMenuHandler() {
        setMobileMenu((current: boolean) => !current);
            setLinkProps((props) => {
                return !mobileMenu ? {...initialNaviLinksProps, classProps:props.classProps + ' hidden' } : {...initialNaviLinksProps }
            })
        
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { mobileMenuHandler() },[]);

    return (
        <section style={{border:'1px solid red'}}  className="box-border m-auto flex flex-col pl-[18px] py-6  min-h-screen flex-wrap px-5 md:container md:w-[1440px] md:pl-[70px] pr-5 ">
            <Header>
                <Logo />
                 <NaviLinks passNaviLinks={linkProps} />
                <div className="flex gap-3">
                    <QuickSearch />
                    <Cart />
                    <User />
                    <MobileMenu menuHandler={mobileMenuHandler} />
                </div>
            </Header>
            <main style={{border:'1px solid red'}} className='flex flex-col justify-between lg:flex-row'>
                <div className='flex-none hidden lg:block'>
                    
                </div>
                <div className='grow-0'>
                    <picture>
                        <source media="(max-width:768px)" srcSet="/assets/mobile/model_front.jpeg"></source>
                        <source media="(min-width:769px)" srcSet="/assets/desktop/model_front.jpeg"></source>
                        <img alt="women" src="/assets/desktop/model_front.jpeg" />
                    </picture>
                </div>
                <div className='flex-none'>3</div>
            </main>
          
            <Footer />
        </section>
    );
}

export default App;
