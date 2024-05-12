export enum Selectedpage{
    Home="home",
    Benefits="benefits",
    Classes="classes",
    Contact="contact"
}   
export interface BenefitType{
    icon:JSX.Element,
    title:string,
    description:string
}
export interface classType{
    name:string,
    description?:string,
    image:string
}