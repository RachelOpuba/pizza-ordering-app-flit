import { StrenghtArr} from "../lib/data"
import Image from "next/image"

const strenght = () => {
  return (
    <>
    <div className="mt-20 bg-[#fffbec] px-4 py-10 inset-x-0">
        <h2 className="text-[#e6230d] font-semibold text-xl pb-1">Our Strenght</h2>
        <h2 className="text-4xl font-bold  pb-12">Why We Are The Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {StrenghtArr.map((info)=>(
                <div className="flex flex-col">
                    <Image src={info.imgRef} height={40} width={40}/>
                    <p className="font-bold pt-3 pb-4">{info.title}</p>
                    <p>{info.desc}</p>
                </div>
            ))}
        </div>

    </div>
    </>
  )
}

export default strenght