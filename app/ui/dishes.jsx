'use client';
import { DishesArr} from "../lib/data"
import Image from "next/image"
import OrderButton from "./orderButton";
import StarRating from "./starRating";



const dishes = () => {
    const handleRatingChange = (newRating) => {
        console.log(`Selected rating: ${newRating}`);
        // You can perform any action with the new rating here
      };
  return (
    <>
        <div className="mt-16 px-4 inset-x-0">
            <h2 className="text-[#e6230d] font-semibold text-xl pb-1">Popular Dishes</h2>
            <h2 className="text-3xl font-bold  pb-12">Brows our Menu</h2>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DishesArr.map((dish)=>(
                    <div className=" flex flex-col justify-between border shadow rounded-xl max-w-[500px]  h-[580px] p-4">
                        <div className="w-full flex justify-center h-[55%]">
                            <Image src={dish.imgRef} height={200} width={300} className="h-[300px] w-[300px]"/>
                        </div>
                        <div className="pb-4">
                            <div className="flex gap-[50%] font-semibold text-xl py-4">
                                <p>{dish.title}</p>
                                <p className="text-[#e6230d]">${dish.price}</p>
                            </div>
                            <div ><StarRating initialRating={5} onChange={handleRatingChange} /></div>
                            <p className="pt-4 pb-8">{dish.desc}</p>
                            <OrderButton/>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default dishes