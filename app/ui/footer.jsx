import { InformationArr, TopItemsArr, OthersArr } from "../lib/data"
import Link from "next/link"
import {motion, useCycle, AnimatePresence} from "framer-motion"
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'; 
import {ShoppingCartIcon} from '@heroicons/react/24/solid'; 



const footer = () => {
  return (
    <footer className='bg-[#fffaee] py-6 md:py-8 lg:py-12 ps-6 md:ps-4 px-4 max-w-[1440px]  z-1'>
        <div className=" grid grid-cols-1 md:grid-cols-4 ">
            <div>
              <h2 className="uppercase font-bold ">Information</h2>
              <ul className=" text-sm text-[#beb7ad] font-bold tracking-[0.15px] flex flex-col gap-5 mt-4  md:mt-[18px]">
                {InformationArr.map((info, index) => (
                <li key={index}>
              <Link href={info.href}>{info.title}</Link>
            </li>
          ))}
        </ul>
            </div> 
            <div>
            <h2 className="uppercase font-bold mt-8 md:mt-0">Top Items</h2>
            <ul className="text-[#beb7ad] font-bold text-sm tracking-[0.15px] flex flex-col gap-5 mt-4  md:mt-[18px]">
                {TopItemsArr.map((item, index) => (
                <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
            </div>
            <div>
            <h2 className="uppercase font-bold mt-8 md:mt-0">Others</h2>
            <ul className=" text-[#beb7ad] font-bold text-sm tracking-[0.15px] flex flex-col gap-5 mt-4  md:mt-[18px]">
                {OthersArr.map((other, index) => (
                <li key={index}>
              <Link href={other.href}>{other.title}</Link>
            </li>
          ))}
        </ul>
            </div>
            <div className="">
            <h2 className="uppercase font-bold mt-8 md:mt-0">Social Media</h2>
            <div className=" mt-4 md:mt-[18px]">
                 <div className="flex gap-4 mb-4 ">
                    <div className="bg-[#3b5a9e] h-10 w-10"></div>
                    <div className="bg-[#db3125] h-10 w-10"></div>
                    <div className="bg-[#24a2e4] h-10 w-11"></div>
                    <div className="bg-[#e95636] h-10 w-11"></div>
                  </div>
                  <p className="font-semibold text-[#7e7773] md:text-sm">Signup and get exclusive offers and coupon codes</p>
            </div>
            
            
            <div >
                 
                  
                  <Link href={"/"} className="flex items-center mt-4 lg:mt-8">
                    <button className="uppercase bg-[#ffb000] text-[#fffdc8]  font-bold py-[6px] px-3 rounded-full">Sign Up</button>
                  </Link>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default footer