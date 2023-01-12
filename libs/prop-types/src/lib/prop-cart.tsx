export interface imageProps {
    name: string;
    urls: {sm:string,lg:string}
    aria: string;
    id: string;
}

export interface sizeProps {
    isSelected: boolean;
    size: string;
    aria: string;
    id: string;
}

export interface CartProps {
    title: {status:boolean, value:string;}
    titleInfo: {status:boolean, value:string;}
    price: {status:boolean, value:string;}
    titileThumb: {status:boolean, value:string;}
    thumbUrls: { status: boolean, value: imageProps[]; }
    sizeSelected: {status:boolean, value:string}
    sizeGuide: { status: boolean, value: string };
    sizeLabels: {status:boolean, value:sizeProps[];}
    addBtnLabel: {status:boolean, value:string; iconUrl:string}
}

export const initialCartProps:CartProps = {
    title: { status: true, value: 'welcome' },
    titleInfo: { status: true, value: '' },
    price: { status: true, value: '' },
    titileThumb: { status: true, value: '' },
    thumbUrls: { status: true, value: [{ name: '', urls: { sm: '', lg: '' }, aria: '', id: '' }] },
    sizeSelected: {status:false, value:''},
    sizeGuide: {status:false, value:''},
    sizeLabels: { status: true, value: [{isSelected:false, size:'', aria:'', id:''}] },
    addBtnLabel: { status: true, value: '', iconUrl:'' },
}


export const mockResponseCartProps:CartProps = {
    title: { status: true, value: 'JONATHAN SIMKHAI' },
    titleInfo: { status: true, value: 'Lurex Linen Viscose Jacket in Conchiglia' },
    price: { status: true, value: '$225' },
    titileThumb: { status: true, value: 'Color Conchiglia' },
    thumbUrls: {
        status: true, value: [
            { name: 'thumb-front', urls:{sm:'/assets/mobile/model_front.jpeg',lg:''}, aria: 'The front view thumb', id: 'thumb-front' },
            { name: 'thumb-side', urls: { sm:'/assets/mobile/model_front.jpeg',lg:''}, aria: 'The side view thumb', id: 'thumb-side' }
        ]
    },
    sizeSelected: {status:true, value:'xx'},
    sizeGuide: {status:true, value:'SIZE GUIDE'},
    sizeLabels: {
        status: true, value: [
            { isSelected: false, size: 'XS', aria: 'click to select XS', id: 'size-xs' },
            { isSelected: false, size: 'S', aria: 'click to select S', id: 'size-s' },
            { isSelected: false, size: 'M', aria: 'click to select M', id: 'size-m' },
            { isSelected: false, size: 'L', aria: 'click to select L', id: 'size-l' },
            { isSelected: false, size: 'XXL', aria: 'click to select XXL', id: 'size-XXL' }
        ]
    },
    addBtnLabel: { status: true, value: 'Add to Bag', iconUrl:'icon-url' },
}