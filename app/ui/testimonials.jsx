import Image from "next/image"
import { TestimonialsArr} from "../lib/data"

const testimonials = () => {
  return (
    <>
    <div className="pt-8 px-4">
        <Image src={'/leaf.png'} width={100} height={100}/>
         <h2 className="text-[#e6230d] font-semibold text-xl pb-1">Cutomer Feedback</h2>
         <h2 className="text-4xl font-bold  pb-12">Client Testimonials</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {TestimonialsArr.map((testimony, index)=>(
                <div key={index} className="flex flex-col justify-center items-center p-4 pt-8 border shadow rounded-xl">
                <Image src={testimony.imgRef} height={80} width={80} className="rounded-full" alt="Reviewer"/>
                <p className="font-bold pt-4 pb-6 text-lg">{testimony.title}</p>
                <p className="text-center px-6 text-lg text-[#3d3b3a] pb-8">{testimony.testimony}</p>
                </div>
            ))}
         </div>

    </div>
    </>
  )
}

export default testimonials