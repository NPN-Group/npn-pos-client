'use client'
import React from 'react'
import '@/app/globals.css'
import { IoPlayBackOutline } from "react-icons/io5";
import Order from '../../components/order';
import { OrdersModel } from '../../../../types/order.type';
import { useState } from 'react';
import Link from 'next/link'
import { Box } from '@mui/material';

function page() {
  const Addmenu = () => {
    console.log("add");
  }
  const Ordernow = () => {
    console.log("order");
  }
  const [orders, setOrders] = useState<OrdersModel[]>([
    { Quantity: 1, Name: 'Item A', Price: 10 },
    { Quantity: 2, Name: 'Item B', Price: 20 },
    { Quantity: 2, Name: 'Item C', Price: 20 },
    { Quantity: 2, Name: 'Item D', Price: 20 },
    { Quantity: 2, Name: 'Item B', Price: 20 },
    { Quantity: 2, Name: 'Item C', Price: 20 },
    { Quantity: 2, Name: 'Item D', Price: 20 },
    { Quantity: 2, Name: 'Item B', Price: 20 },
    { Quantity: 2, Name: 'Item C', Price: 20 },
    { Quantity: 2, Name: 'Item D', Price: 1 },
]);

const handleUpdate = (index: number, quantity: number, total: number) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = { ...updatedOrders[index], Quantity: quantity };
    setOrders(updatedOrders);
    console.log(`Order ${index} updated: Quantity = ${quantity}, Total = ${total}`);
};

const totalSum = orders.reduce((sum, order) => sum + order.Quantity * order.Price, 0);

  return (
  <div className='font-semibold'>
    <div >
    <Box sx={{width: '390px',height:'64px'}} />
      <div className='p-[20px] flex justify-start items-center gap-2 fixed top-0 w-full bg-white'>
        <Link href = '/'>
          <IoPlayBackOutline style={{color: "#F5533D", fontSize:'1.5em'}} />
        </Link>
        <h2 className='overflow-ellipsis truncate w-50'>namning restaurant welcome</h2>
        <div></div>
      </div>
      <div className='px-[20px] flex justify-between'>
        <p>
          My order
        </p>
        <button onClick={Addmenu} className='text-[#F5533D]'>
          Add Menu 
        </button>
      </div>
    </div>
    <div className='overflow-y-auto h-full'>
      {orders.map((order, index) => (
                  <Order
                      key={index}
                      Orders={order}
                      onUpdate={(quantity, total) => handleUpdate(index, quantity, total)}
                  />
              ))}
    </div>
    <Box sx={{width: '390px',height:'88px'}}></Box>
    <div className='fixed bottom-0 w-full pb-2 bg-white'>
      <div style={{marginLeft: '5%', marginRight: '8%'}} className='flex justify-between py-2'>
        <div className='font-semibold'>
          Total
        </div>
        <div className='text-red-500 font-semibold'>
          ${totalSum}
        </div>
      </div>
      <div style={{marginLeft: '5%', marginRight: '8%'}} className='flex justify-center '>
          <div style={{width: '100%'}} className=' h-[40px] bg-[#F5533D] py-1.5 rounded-md text-center hover:cursor-pointer text-white' onClick={Ordernow}>
            Order Now
          </div>
      </div>
    </div>
  </div>
  )
}

export default page