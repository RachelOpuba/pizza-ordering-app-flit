import Link from "next/link"
import {ShoppingCartIcon} from '@heroicons/react/24/solid'; 


const orderButton = () => {
  return (
             <Link href={"/products"}>
                <button className="flex bg-[#fab21d] justify-center items-center  py-3  px-6 rounded-full gap-2"><ShoppingCartIcon className="h-6 w-6 text-[#fffcfb]"/><span className="uppercase text-[#fff6d2]">Order Now</span></button>
            </Link>
  )
}

export default orderButton