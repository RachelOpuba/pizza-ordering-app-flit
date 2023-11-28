import { DishesArr } from "@/app/lib/data"
import Image from "next/image"
import { LiaHeart } from "react-icons/lia";
import Link from "next/link";



const Details = ({params}) => {
    

    const productid = params.productId
  return (
    <div className="mt-[50px] md:mt-[100px] px-4">
        {DishesArr
        .filter((dish) => dish.id == productid)
        .map((info) => (
        <div key={info.id} className="flex flex-col md:flex-row gap-8 lg:gap-10 xl:gap-x-20">
            <div className="flex justify-center">
                <Image  src={info.imgRef} height={400} width={400} alt="Pizza" className="h-[300px] lg:h-[400px] xl:h-[550px] w-[300px] lg:w-[400px] xl:w-[550px] "/>
            </div>
            <div className="flex flex-col gap-3  xl:gap-4">
                    <p className="text-3xl font-semibold text-[#242021]">{info.title}</p>
                    <p className=""><span className="text-[#e6230d] font-bold mr-8">${info.price}</span> <span className="text-[#c2c2c5] font-bold">8 Reviews</span></p>
                    <p className="text-[#242021]">{info.desc}</p>
                    <p className="text-[#242021]">Category: {info.category}</p>
                    <p className="text-[#242021]">Tags: {info.tags}</p>
                    <div className="pt-6 xl:pt-9">
                        <p className="text-[#242021] font-semibold pb-4">Choose Pizza Size </p>
                        <div className="flex gap-6 xl:gap-10 items-center">
                            <div className="relative">
                                <Image src={'/pizza-icon.png'} height={35} width={35}/>
                                <div className="bg-[#e6230d] rounded-full absolute right-[-20px] top-[-10px] flex justify-center p-1 pb-0">
                                    <span className="text-white text-[12px]">Small</span>
                                 </div>

                            </div>
                            <div className="relative">
                                 <Image src={'/pizza-icon.png'} height={50} width={50}/>
                                 <div className="bg-[#e6230d] rounded-full absolute right-[-20px] top-[-10px] flex justify-center p-[2px] pb-0">
                                    <span className="text-white text-[12px]">Medium</span>
                                 </div>
                            </div>
                            <div className="relative">
                                 <Image src={'/pizza-icon.png'} height={70} width={70}/>
                                 <div className="bg-[#e6230d] rounded-full absolute right-[-20px] top-[-10px] flex justify-center p-1 pb-0">
                                    <span className="text-white text-[12px]">Large</span>
                                 </div>
                            </div>
                        </div>
                        <div className=" pt-8 xl:pt-12">
                            <p>Choose additional ingredients</p>
                            <input type="checkbox"/><span>Sauce</span>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 pt-4 xl:pt-10">
                            <input type="number"  className="border border-gray-900 h-12 w-[200px]"/>
                            <div className="flex gap-8">
                            <Link href={""}>
                                <button className="flex bg-[#fab21d] justify-center items-center uppercase py-3 hover:bg-[#e7393b]  font-semibold text-white px-8 rounded-full gap-2">Add To Cart</button>
                            </Link>
                            <div className="h-[50px] w-[50px] rounded-full border flex justify-center items-center"><LiaHeart className="text-"/></div>
                            </div>

                        </div>
                        
                    </div>
            </div>
      </div>
    ))}
    </div>
  )
}

export default Details