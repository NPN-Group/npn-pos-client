export type OrderlogModel = {
    Timestamp:string;
    Price:number;
    Name:string;
    Status:string;
}
export interface OrderlogProps{
    Orders:OrderlogModel;
}