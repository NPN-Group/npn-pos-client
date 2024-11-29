export type OrdersModel = {
    Quantity:number;
    Price:number;
    Name:string;
}
export interface OrderProps{
    Orders:OrdersModel;
}