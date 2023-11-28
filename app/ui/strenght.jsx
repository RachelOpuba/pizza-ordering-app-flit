import { StrenghtArr} from "../lib/data"
import Image from "next/image"

const strenght = () => {
  return (
    <>
    <div className="mt-20 bg-[#fffbec] px-4 py-20  md:py-14 inset-x-0 relative">
        <h2 className="text-[#e6230d] font-semibold text-xl pb-1">Our Strenght</h2>
        <h2 className="text-4xl font-bold  pb-12">Why We Are The Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {StrenghtArr.map((info, index)=>(
                <div key={index} className="flex flex-col">
                    <Image src={info.imgRef} height={40} width={40} alt="Icon" className="h-[35px] w-[30px]"/>
                    <p className="font-bold pt-3 pb-4">{info.title}</p>
                    <p>{info.desc}</p>
                </div>
            ))}
        </div>
        <div className="absolute top-4 md:top-24 lg:top-16 right-4 ">
          <Image src={"/pizza-pice.png"} height={250} width={240} alt="Half Pizza" className="h-[80px] md:h-[150px] xl:h-[180px]  w-[100px] md:w-[200px] xl:w-[240px]"/>
        </div>
    </div>
    </>
  )
}

export default strenght