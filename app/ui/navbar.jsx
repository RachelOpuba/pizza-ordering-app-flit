'use client';
import { useState } from "react";
import {motion, useCycle, AnimatePresence} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'; 
import {ShoppingCartIcon} from '@heroicons/react/24/solid'; 
import {Bars3Icon} from '@heroicons/react/24/solid'; 
import {XMarkIcon} from '@heroicons/react/24/solid'; 




const links = [
    { name: 'Home', href: '/'},  
    { name: 'Products', href: '/products' },
    { name: 'Pages', href: '/'},
    { name: 'Blog', href: '/'},
    { name: 'Contact', href: '/'},
  ];

  
  
  export default function Page (){
    const pathname = usePathname();
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    const [showMenu, setShowMenu] = useState(false)

    

    const mobileMenu = <>
        <nav className=" fixed inset-0 z-[1] left-0 w-full bg-slate-900  text-white flex md:hidden flex-col gap-7 items-center pt-[20%] transition">
        <AnimatePresence>
        <motion.div
        variants={{
          open:{
            x: "0%",
          }, 
          closed:{
            x: "-100%",
          },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        >
        {links.map((link) =>( 
          <Link
            key={link.name}
            href={link.href}
                      >
           
            <p className="uppercase text-md font-bold text-white my-3 py-4 px-4 border-b border-slate-800 hover:border-fuchsia-600 hover:text-fuchsia-600 transition text-center" onClick={()=> toggleMobileNav()}>{link.name}</p>
          </Link>
        )
      )}
        </motion.div> 
        </AnimatePresence>    
        </nav> 
    </>
  return (
    <>
    <nav className=" sticky top-0 inset-x-0  ">
    <div className="w-full  max-w-[1440px] h-[100px] px-4 ">
        <div className="flex justify-between items-center h-full">
            
                <Image
                src={"/logo.png"}
                width={70}
                height={50}
                alt="Logo"
                className="self-center h-[48px] w-[52px] md:h-20 md:w-20 "
                />

                <Image 
                src={"/redimg.png"}
                width={150}
                height={100}
                alt="Logo"
                className="hidden lg:block self-start"
                />

           
            <div className="flex gap-7 items-center">
            {links.map((link) =>( 
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'underline-animation',
              {
                ' ': pathname === link.href,
              },
            )}          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block uppercase text-md font-bold">{link.name}</p>
          </Link>
        )
      )}

            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon className="hidden md:block w-6 h-6"/>
              <ShoppingCartIcon className="text-blue-500 w-8 h-8"/>   
              
              <div className="block md:hidden ms-8 z-[50]">
              {mobileNav ?  <XMarkIcon className="w-10 h-10 text-white" onClick={()=> toggleMobileNav()}/>: <Bars3Icon className="w-10 h-10 " onClick={()=>toggleMobileNav()}/>  }
              </div>
            </div>
              {mobileNav && mobileMenu}
            
            </div>
            
        </div>
        </div>
    </nav>
    </>
  )
}

