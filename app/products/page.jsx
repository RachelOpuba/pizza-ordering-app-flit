'use client';
import { DishesArr } from "../lib/data";
import Image from "next/image";
import Link from "next/link"
import StarRating from "../ui/starRating";
import OrderButton from "../ui/orderButton";
import { LuListFilter } from "react-icons/lu"; import Dishes from "../ui/dishes"
import { IoIosArrowDown } from "react-icons/io";

const Product = () => {
  const handleRatingChange = (newRating) => {
    console.log(`Selected rating: ${newRating}`);
    // You can perform any action with the new rating here
  };
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-between items-center  px-4 mb-12">
           <Link href={"/products"}>
                <button className="flex bg-[#fab21d] justify-center items-center  py-1  px-5 rounded-full gap-1"><LuListFilter className="h-6 w-6 text-[#fffcfb]"/><span className=" text-[#fff6d2] font-bold">Filter</span></button>
            </Link>
           <div className="flex gap-20 ">
            <div className="hidden md:block">
              <p className="font-bold text-lg">Showing all 9 results</p>
            </div>
            <div class="relative inline-flex">
                <select
                  class="block appearance-none w-full bg-white border border-gray-300  font-medium text-[#676069] px-4 py-[5px] pr-[150px] rounded leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled selected >
                    Default Sorting
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown/>
                </div>
            </div>
           </div>
        </div>
        <div className=" px-4 inset-x-0">
            

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DishesArr.map((dish, index)=>(
                  <Link href={`products/${dish.id}`}>
                    <div key={index} className=" flex flex-col justify-between border shadow rounded-xl max-w-[500px]  h-[580px] p-4">
                        <div className="w-full flex justify-center h-[55%]">
                            <Image src={dish.imgRef} height={200} width={300} className="h-[300px] w-[300px]" alt="Icon"/>
                        </div>
                        <div className="pb-4">
                            <div className="flex gap-[50%] font-semibold text-xl py-4">
                                <p>{dish.title}</p>
                                <p className="text-[#e6230d]">${dish.price}</p>
                            </div>
                            <div ><StarRating initialRating={5} onChange={handleRatingChange} /></div>
                            <p className="pt-4 pb-8">{dish.desc}</p>
                            <Link href={`products/${dish.id}`}>
                              <OrderButton/>
                            </Link>
                            
                        </div>
                        
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Product