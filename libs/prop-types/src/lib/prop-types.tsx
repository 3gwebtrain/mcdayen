import { ReactNode } from 'react';

export interface NameProps {
    name: string;
}

export interface ChildProps {
    children: ReactNode;
}

export interface NaviLinkProps {
    label: string;
    link: string;
    aria: string;
    id: string;
}


export interface NaviLinksProps {
    classProps: string;
    naviLinks:NaviLinkProps[]
}

export const initialNaviLinksProps: NaviLinksProps = {
    classProps: 'gap-4 hidden lg:flex',
    naviLinks: [
    {
        label: 'The Edit',
        link: 'theEditPage',
        aria: 'click to visit the edit page',
        id: 'editPage',
    },
    {
        label: 'New Arrivals',
        link: 'newArrivalsPage',
        aria: 'click to visit the new Arrivals page',
        id: 'newArrivalPage',
    },
    {
        label: 'Designers',
        link: 'designersPage',
        aria: 'click to visit the Designers page',
        id: 'designersPage',
    },
    {
        label: 'Clothing',
        link: 'clothingPage',
        aria: 'click to visit the Clothing page',
        id: 'clothingPage',
    },
    {
        label: 'Shoes',
        link: 'shoesPage',
        aria: 'click to visit the Shoes page',
        id: 'shoesPage',
    },
    {
        label: 'Bags',
        link: 'bagsPage',
        aria: 'click to visit the Bags page',
        id: 'bagsPage',
    },
    {
        label: 'Accessories',
        link: 'accessoriesPage',
        aria: 'click to visit the Accessories page',
        id: 'accessoriesPage',
    },
    {
        label: 'Jewelry',
        link: 'jewelryPage',
        aria: 'click to visit the Jewelry page',
        id: 'jewelryPage',
    },
    {
        label: 'Beauty',
        link: 'beautyPage',
        aria: 'click to visit the Beauty page',
        id: 'beautyPage',
    },
    {
        label: 'Home',
        link: 'homePage',
        aria: 'click to visit the Home page',
        id: 'homePage',
    },
]
}

export interface MenuHandlerProps {
    menuHandler:() => void
}