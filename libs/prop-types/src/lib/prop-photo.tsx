export interface PhotoProps {
    urls: { sm: string; lg:string}
    id: string;
    alt: string;
}

export type PhotoPropsArray = (PhotoProps | PhotoProps[])[]


export const initialPhotoProps: PhotoPropsArray = [
    {
        urls: { sm: "/assets/mobile/model_front.jpeg", lg: "/assets/desktop/model_front.jpeg" },
        id: "model_front",
        alt: "Model front photo"
    },
    [
        {
        urls: { sm: "/assets/mobile/model_front.jpeg", lg: "/assets/desktop/model_side.jpeg" },
        id: "model_side",
        alt: "Model front photo"
    },
    {
        urls: { sm:'', lg: "/assets/desktop/model_back.jpeg" },
        id: "model_back",
        alt: "Model back photo"
        },
    
    ],
    {
        urls: { sm:'', lg: "/assets/desktop/model_close_up.jpeg" },
        id: "model_close_up",
        alt: "Model back photo"
    },
    {
        urls: { sm:'', lg: "/assets/desktop/model_full.jpeg" },
        id: "model_full",
        alt: "Model back photo"
    }
]
