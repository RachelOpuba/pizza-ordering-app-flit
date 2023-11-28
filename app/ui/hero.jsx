import Image from "next/image"
import OrderButton from "./orderButton";
import Link from "next/link";

const hero = () => {
  return (
    <>
    <div className="mt-20  mb-16 flex justify-between items-center z-1">
         <div className="ps-4">
            <div className="flex flex-col gap-2 text-5xl font-[800] text-[#202425] pt-4">
                <h1 >Handmade,   </h1>
                <h1 className="py-2">With an Extra</h1>
                <h1 className="">Pinch of <span className="text-[#f72400]">Love</span></h1>
            </div>
            <p className="text-3xl max-w-full w-[80%] xl:max-w-[60%] text-[#242021] mt-6 leading-10 pb-8">Lorep Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link href={'/products'}>
              <OrderButton/>
            </Link>
         </div>
         


              <div className="flex justify-end">
                <div className="bg-[#fab21d]  h-[480px] xl:h-[580px] hidden md:block w-[180px] lg:w-[250px] xl:w-[380px] rounded-l-full relative z-[-2]" >
                <div className="absolute left-[-150px] lg:left-[-180px] xl:left-[-250px] top-5 z-[-1] md:z-1">
                <Image src={"/tomato-piz.png"} width={400} height={400} alt="Tomato Pizza" className="h-[200px] lg:h-[250px] xl:h-[400px] w-[200px] lg:w-[250px] xl:w-[400px]"/>
                <Image src={"/onion.png"} width={100} height={100} alt="Sliced Onion" className="h-[60px] xl:h-[120px] w-[60px] xl:w-[120px] ms-[-50px] mt-[120px] lg:mt-[80px] xl:ms-[-120px] xl:mt-[-50px]"/>
                <Image src={"/nut-piza.png"} width={170} height={170} alt="Nut Pizza" className="h-[120px] xl:h-[170px] w-[120px] xl:w-[170px] absolute right-[0px] lg:right-[-20px] bottom-[-50px] xl:bottom-[-130px]"/>
            </div>
            
        </div>
        </div>
        
    </div>
    </>
  )
}

export default hero