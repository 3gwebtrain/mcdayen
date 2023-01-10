export interface CartProps {
    title: {status:boolean, value:string;}
    titleInfo: {status:boolean, value:string;}
    price: {status:boolean, value:string;}
    titileThumb: {status:boolean, value:string;}
    thumbUrls: {status:boolean, value:string[];}
    sizeLabels: {status:boolean, value:string[];}
    addBtnLabel: {status:boolean, value:string;}
}

export const initialCartProps:CartProps = {
    title: { status: true, value: 'welcome' },
    titleInfo: { status: true, value: '' },
    price: { status: true, value: '' },
    titileThumb: { status: true, value: '' },
    thumbUrls:{status:true, value:['']},
    sizeLabels: { status: true, value: [''] },
    addBtnLabel: { status: true, value: '' },
}