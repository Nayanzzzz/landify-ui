import { Feature1 } from "../../../../lib/images/section-3/section-3"
import { Feature2 } from "../../../../lib/images/section-3/section-3"
import { Feature3 } from "../../../../lib/images/section-3/section-3"
import { Feature4 } from "../../../../lib/images/section-3/section-3"
import { Feature5 } from "../../../../lib/images/section-3/section-3"
import { Feature6 } from "../../../../lib/images/section-3/section-3"

export interface IFeatureData {
    title : string,
    img : string
}



export const FeatureData : IFeatureData[]= [
    {
        title : "Robust workflow",
        img : Feature1
    },
    {
        title : "Flexibility",
        img : Feature2
    },
    {
        title : "User friendly",
        img : Feature3
    },
    {
        title : "Multiple layouts",
        img : Feature4
    },
    {
        title : "Bettter components",
        img : Feature5
    },
    {
        title : "well organised",
        img : Feature6
    },
]