import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuTimer } from "react-icons/lu";
import { OrderlogModel,OrderlogProps } from '../../../types/orderlog.typ';
const Orderlog: React.FC<OrderlogProps> = ({ Orders }) => {    const Status = (state: string) => {
        return state === "Order Completed" ? <IoMdCheckmarkCircleOutline className='text-[#10AF53]' /> : <LuTimer className='text-[#FF9705]' /> ;
    };
  return (
    <div>
        <div>
            <div className="pl-10 text-[0.6rem] text-[#cccccc]">
                {Orders.Timestamp}
            </div>
            <div className='flex justify-between px-4'>
                <div className='flex justify-start items-center gap-2'>
                    <div>
                        {Status(Orders.Status)}
                    </div>
                    <div>{Orders.Name}</div>
                </div>
                <div className='font-normal'>
                  ${Orders.Price}  
                </div>
            </div> 
            <div className='pl-10 font-semibold text-[#F5533D]'>
            {Orders.Status}  
            </div>
            <div style={{marginLeft: '5%', marginRight: '5%'}} className='py-2 flex justify-center'>
                <div style={{width: '100%'}} className=' h-[1px] bg-[#cccccc]' />
            </div>
        </div>
    </div>
  )
}

export default Orderlog