'use client'
import React from 'react'
import Link from 'next/link'
import { IoPlayBackOutline } from "react-icons/io5";
import Orderlog from '@/app/components/orderlog';
import { OrderlogModel,OrderlogProps } from '../../../../types/orderlog.typ';
import { useState } from 'react';
import { Box } from '@mui/material';
function page() {
  const [orders, setOrders] = useState<OrderlogModel[]>([
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 10,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 87,Status:"Order in Process" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 58,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 1,Status:"Order Completed" },
    { Timestamp: "29 Oct 24, 17:17", Name: 'Item A', Price: 8,Status:"Order Completed" },

]);
  const total = orders.reduce((acc, order) => acc + order.Price, 0);
  const count = orders.reduce((acc, order) => acc + 1, 0);
  return (
    <div className='font-semibold'>
      <Box sx={{width: '390px',height:'64px'}} />
      <div className='fixed top-0 w-full bg-white'>
        <div className='p-[20px] flex justify-start items-center gap-2'>
          <Link href = '/'>
            <IoPlayBackOutline style={{color: "#F5533D", fontSize:'1.5em'}} />
          </Link>
          <h2 className='overflow-ellipsis truncate w-50'>NPNHomeMade - Ladkrabang 51</h2>
          <div></div>
        </div>
        
      </div>
      <div className='px-[20px] pb-3 font-semibold'>
          Order History
        </div>
      <div  className="overflow-y-auto border border-gray-300 h-full">
        {orders.map((order, index) => (
          <Orderlog key={index} Orders={order} />
        ))}
      </div>
      <Box sx={{width: '390px',height:'83.5px'}} />

      <div  className='bg-[#F5533D] font-semibold text-white fixed bottom-0 w-full'>
        <div className='py-1 px-6'>
            Orders ({count})
        </div>
        <div style={{marginLeft: '5%', marginRight: '5%'}}  className='flex justify-center'>
                <div style={{width: '100%'}} className=' h-[2px] bg-white' />
            </div>
        <div className='flex justify-between px-6 py-1.5' style={{fontSize:25,}}>
            <div>
              Total
            </div>
            <div>
              ${total}
            </div>
        </div>
      </div>
      </div>
  )
}

export default page