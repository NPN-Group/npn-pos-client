import React from 'react'
import { OrdersModel ,OrderProps} from '../../../types/order.type';
import { FaPlusCircle } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import { useState } from 'react';

interface EnhancedOrderProps extends OrderProps {
    onUpdate: (quantity: number, total: number) => void; // Callback to update parent
}
const Order: React.FC<EnhancedOrderProps> = (props) => {

    const { Orders: order, onUpdate } = props;
    const [quantity, setQuantity] = useState<number>(order.Quantity);
    const [total, setTotal] = useState<number>(order.Price * order.Quantity);
    const editMenu = () => {
        console.log("edit");
      }
    
    const increaseQuantity = () =>{
        const newQuantity = quantity + 1;
        const newTotal = total + order.Price;
        setQuantity(newQuantity);
        setTotal(newTotal);
        onUpdate(newQuantity, newTotal); // Notify parent
    }
    const decreaseQuantity = () =>{
        if(quantity > 0){
            const newQuantity = quantity - 1;
            const newTotal = total - order.Price;
            setQuantity(newQuantity);
            setTotal(newTotal);
            onUpdate(newQuantity, newTotal); // Notify parent
        }
    }
    return (
        <div className=''>
            <div className='p-[20px] flex justify-between'>
                <div className='flex justify-start gap-2'>
                    <div className='pb-[20px] flex justify-start items-center gap-1'>
                        <FaPlusCircle style={{fontSize:'1.0em',color: "#F5533D"}} onClick={increaseQuantity}/>
                        <div className='border-[2px] border-color:#F5533D w-7 h-7 text-center rounded-md'>{quantity}</div>
                        <AiFillMinusCircle style={{fontSize:'1.0em',color: "#F5533D"}} onClick={decreaseQuantity}/>
                    </div>
                    <div className=''>

                        <div>{order.Name}</div>
                        <button onClick={editMenu} className='text-[#F5533D]' >
                            Edit
                        </button>
                    </div>
                </div>
                <div className='font-normal'>
                    ${total}
                </div>
            </div>
            <div style={{marginLeft: '5%', marginRight: '5%'}} className='flex justify-center'>
                <div style={{width: '100%'}} className=' h-[1px] bg-[#cccccc]' />
            </div>
        </div>
    );
};

export default Order;