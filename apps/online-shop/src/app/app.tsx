import { Footer, Header, ProductCart, Tabs } from '@mcdayen/components';
import { Cart, Logo, MobileMenu, NaviLinks, QuickSearch, TabButton, User } from '@mcdayen/micro-components';
import { CartProps, initialCartProps, initialNaviLinksProps, NaviLinksProps } from '@mcdayen/prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartDetails } from './store/cart.slice';
import { AppDispatch } from './store/store.config';

export function App() {
    
    const dispatch:AppDispatch = useDispatch();
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [linkProps, setLinkProps] = useState<NaviLinksProps | null>(null);
    const [cartProps, setCartProps] = useState<CartProps | null>(null);

    function mobileMenuHandler() {
        setMobileMenu((current: boolean) => !current);
        setLinkProps((props) => {
            return !mobileMenu ? { ...initialNaviLinksProps, classProps: props?.classProps + ' hidden' } : { ...initialNaviLinksProps }
        })
    }

    useEffect(() => {
        dispatch(fetchCartDetails()).then(({payload}) => {
            console.log('response', payload);
        });
    },[dispatch]);

    useEffect(() => { mobileMenuHandler() },[]);
    useEffect(() => { setCartProps(initialCartProps) }, [setCartProps]);

    return (
        <section style={{border:'1px solid red'}}  className="box-border m-auto flex flex-col pl-[18px] py-6  min-h-screen flex-wrap px-5 md:container md:w-[1440px] md:pl-[70px] pr-5 ">
            <Header>
                <Logo />
                {linkProps && <NaviLinks passNaviLinks={linkProps} />}
                <div className="flex gap-3">
                    <QuickSearch />
                    <Cart />
                    <User />
                    <MobileMenu menuHandler={mobileMenuHandler} />
                </div>
            </Header>
            <main style={{border:'1px solid red'}} className='flex flex-col justify-between lg:flex-row'>
                <div className='hidden lg:block'>
                    <Tabs>
                        <TabButton>content-1</TabButton>
                        <TabButton>content-2</TabButton>
                        <TabButton>content-3</TabButton>
                    </Tabs>
                </div>
                <div className='grow-0'>
                    {cartProps && <ProductCart passCartProps={cartProps} />}
                </div>
                <div className='flex-none'>
                    
                </div>
            </main>
          
            <Footer />
        </section>
    );
}

export default App;
