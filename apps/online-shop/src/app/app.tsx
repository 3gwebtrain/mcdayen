import { Footer, Header, ProductCart, ProductPhotoGallery, Tabs } from '@mcdayen/components';
import { Cart, Logo, MobileMenu, NaviLinks, QuickSearch, User } from '@mcdayen/micro-components';
import { initialNaviLinksProps, initialPhotoProps, initialTabsProps, NaviLinksProps, sizeProps } from '@mcdayen/prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartDetails, sizeHandler } from './store/cart.slice';
import { AppDispatch, RootState } from './store/store.config';

export function App() {
    const dispatch:AppDispatch = useDispatch();
    dispatch(fetchCartDetails());
    const {product} = useSelector((state:RootState) => state.cartStore)
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [linkProps, setLinkProps] = useState<NaviLinksProps | null>(null);

    function mobileMenuHandler() {
        setMobileMenu((current: boolean) => !current);
    }

     useEffect(() => {
        setLinkProps(initialNaviLinksProps);
        const mobileId = document.getElementById('mobileMenu');
         if (mobileId?.offsetParent) {
            mobileMenuHandler();
        }
     }, []);
    
    useEffect(() => {
        setLinkProps((props) => {
            return mobileMenu ? { ...initialNaviLinksProps } : { ...initialNaviLinksProps, classProps: props?.classProps + ' hidden' }
        })
    }, [mobileMenu]);

    function onSizeSelect(selectedSize: sizeProps) {
        dispatch(sizeHandler(selectedSize));
    }
    
    return (
        <section  className="box-border m-auto flex flex-col pl-[18px] py-6   min-h-screen flex-wrap px-5 md:container md:w-[1440px] md:pl-[70px] pr-5 ">
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
            <main  className='flex flex-col justify-between lg:flex-row'>
                <div className='hidden lg:block w-[325px]'>
                    <div>
                        <Tabs tabProps={initialTabsProps}  />
                    </div>
                </div>
                <div className='grow-0 flex-auto' >
                   {initialPhotoProps.length && <ProductPhotoGallery gallery={initialPhotoProps} />}
                </div>
                <div className='flex bg-white'>
                    {product && <ProductCart sizeSelect={onSizeSelect}  passCartProps={product} />}
                </div>
            </main>
            <Footer />
        </section>
    );
}

export default App;
