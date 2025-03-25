import { Section4CardLogo1 } from "../../../../../lib/images/section-4/section-4"
import { Section4CardLogo2 } from "../../../../../lib/images/section-4/section-4"
import { Section4CardLogo3 } from "../../../../../lib/images/section-4/section-4"



export interface IDataSeaction4 {
    img: string,
    name : string,
    position : string,
    desc : string
}

export const DataSection4 : IDataSeaction4[] = [
    {
        img : Section4CardLogo3,
        name :"Floyd Miles",
        position : "Vice President,GoPro",
        desc :"To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable." 
    },
    {
        img : Section4CardLogo2,
        name :"Jane Cooper",
        position : "CEO,Airbnb",
        desc :"I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it." 
    },
    {
        img : Section4CardLogo1,
        name :"Kristin Watson",
        position : "Co-Founder,Strapi",
        desc :"Landify saved our time in designing my company page." 
    },
]