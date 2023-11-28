import Image from 'next/image'
import Link from 'next/link'
import { IoIosCheckmarkCircle } from "react-icons/io";


import React from 'react'

const page = () => {
  return (
    <>
        <div className='mt-20'>
          <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-[70%] xl:w-[72%] ms-2'>
              <div className="overflow-auto">
                      <table className="w-full ">
                          <thead  className="border-b-2">
                              <tr>
                                  <th className="p-2 text-sm font-bold text-left">Order ID</th>
                                  <th className="p-2 text-sm font-bold text-left">Customer</th>
                                  <th className="p-2 text-sm font-bold text-left">Address</th>
                                  <th className="p-2 text-sm font-bold text-left">Total</th>
                              </tr>
                          </thead>
                          <tbody className="border-b">
                              <tr className="align-top">                                 
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">6553e94e699e1964952785a2</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">08162648391</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">10 John Street</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">$160</td>
  
                              
                                  
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-4  pt-8 justify-items-center w-full'>
                    <div className='flex flex-col '>
                        <Image src={'/paid.png'} height={50} width={50} alt='Paid'/>
                        <p>Payment</p>
                        <IoIosCheckmarkCircle className='text-[40px] text-[#1b7f00] '/>

                    </div>
                    <div className='flex flex-col animate-pulse'>
                        <Image src={'/preparing.png'} height={50} width={50} alt='Preparing'/>
                        <p className='text-gray-500 '>Preparing</p>
                        {/* <IoMdCheckmarkCircle className='text-[50px] text-green-500'/> */}

                    </div>
                    <div className='flex flex-col mt-6 md:mt-0'>
                        <Image src={'/bike.png'} height={50} width={50} alt='Bike'/>
                        <p className='text-gray-500'>On the way</p>
                        {/* <IoMdCheckmarkCircle className='text-[50px] text-green-500'/> */}

                    </div>
                    <div className='flex flex-col   mt-6 md:mt-0'>
                        <Image src={'/delivered.png'} height={50} width={50} alt='Delivered'/>
                        <p className='text-gray-500'>On the way</p>
                        {/* <IoMdCheckmarkCircle className='text-[50px] text-green-500'/> */}

                    </div>
                  </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-[30%] xl:w-[28%] bg-[#343334] p-10 text-[#fffdfc] mt-8 lg:mt-0 inset-x-0'>
                  <h3 className='uppercase font-bold  pb-8 text-lg'>Cart Total</h3>
                  <div className="flex gap-4">
                      <p className="font-semibold">Subtotal:</p>
                      <p className="text-[#bfc1c8]">$160</p>
                  </div>
                  <div  className="flex gap-4">
                      <p className="font-semibold">Discount:</p>
                      <p className="text-[#bfc1c8]">$79.60</p>
                  </div>
                  <div  className="flex gap-4">
                      <p className="font-semibold">Total:</p>
                      <p className="text-[#bfc1c8]">$160</p>
                  </div>                                                                        
                      <Link href={""} className="">
                          <button className="flex bg-[#fab21d] justify-center mt-10 items-center uppercase py-3   w-full  font-semibold text-white px-8 rounded-full gap-2">Paid</button>
                       </Link>                                                                
             </div>
          </div>
          </div>
  
    </>
  )
}

export default page