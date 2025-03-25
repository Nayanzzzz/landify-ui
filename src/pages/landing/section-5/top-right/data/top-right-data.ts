import { TopRight1 } from "../../../../../lib/images/section-5/top-right"
import { TopRight2 } from "../../../../../lib/images/section-5/top-right"
import { TopRight3 } from "../../../../../lib/images/section-5/top-right"
import { TopRight4 } from "../../../../../lib/images/section-5/top-right"

export interface ITopData {
    img : string ,
    title : string,
    desc : string
}


export const TopRightData:ITopData[] = [
    {
        img : TopRight1,
        title : "10,000+",
        desc : "Downloads"
    },
    {
        img : TopRight2,
        title : "2 Million",
        desc : "Users"
    },
    {
        img : TopRight3,
        title : "500+",
        desc : "Clients"
    },
    {
        img : TopRight4,
        title : "140",
        desc : "Countries"
    },
    
]