export class Product{
    id!:number;
    name!:string;
    description!:string;
    gender!:string;
    brand!:string;
    category!:string;
    size!:number[];
    color!:any[];
    price!:number;
    discountPrice?:number;
    is_in_inventory!:boolean;
    items_left!:number;
    imageURL!:string;
    slug!:string;
}