export interface TabContentProps {
    contents: {
        id: string;
        aria: boolean;
        content: {
            des: string;
            note: { text: string; link: string },
            learn: { text: string; link: string }
        }
    }
    
}

export interface TabProps  {
    tab: {
        label: string;
        id: string;
        aria: boolean;
    }
};

export interface TabExtProps extends TabProps {
    tabProps: TabProps;
    queIndex: number;
    index: number;
    callBack:(n:number) => void
}


export type TabsProps = (TabProps & TabContentProps)[];

export const initialTabsProps:TabsProps = [
    {
        tab: {
            label: "details",
            id: 'tab-details',
            aria: false
        },
        contents: {
            id: 'content-details',
            aria: false,
            content: {
                des: '1 The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.',
                note:{text:'See the', link:'EDITOR’S NOTE'},
                learn:{text:'Learn about the', link:'DESIGNER'}
            }
        }
    },
    {
            tab: {
                label: "delivery",
                id: 'tab-delivery',
                aria: false,
            },
            contents: {
                id: 'content-delivery',
                aria: false,
                content: {
                    des:'Delivery contents goes here',
                    note:{text:'See the', link:'EDITOR’S NOTE'},
                    learn:{text:'Learn about the', link:'DESIGNER'}
                }
            }
        },
        
        {
            tab: {
                label: "fit",
                id: 'tab-fit',
                aria: false,
            },
            contents: {
                id: 'content-fit',
                aria: false,
                content: {
                    des:'Fit contents goes here',
                    note:{text:'See the', link:'EDITOR’S NOTE'},
                    learn:{text:'Learn about the', link:'DESIGNER'}
                }
            }
        },
        {
            tab: {
                label: "share",
                id: 'tab-share',
                aria: false,
            },
            contents: {
                id: 'content-share',
                aria: false,
                content: {
                    des:'share contents goes here',
                    note:{text:'See the', link:'EDITOR’S NOTE'},
                    learn:{text:'Learn about the', link:'DESIGNER'}
                }
            }
        }
]

