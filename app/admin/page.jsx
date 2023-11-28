import { DishesArr } from "../lib/data"
import Image from "next/image"

const Admin = () => {
  return (
    <>
        <div className='flex flex-col lg:flex-row justify-between gap-4 xl:gap-8 px-4 mt-20'>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <p className="text-2xl font-semibold mb-2">Products</p>
                <div className="overflow-auto ">
                      <table className="w-full mb-4">
                          <thead  className="border-b-2">
                              <tr>
                                  <th className="p-2 text-sm font-bold text-left">Image</th>
                                  <th className="p-2 text-sm font-bold text-left">Id</th>
                                  <th className="p-2 text-sm font-bold text-left">Title</th>
                                  <th className="p-2 text-sm font-bold text-left">Price</th>
                                  <th className="p-2 text-sm font-bold text-left">Action</th>
                              </tr>
                          </thead>
                          <tbody className="border-b">
                            {DishesArr.map((dish, index)=>(
                                <tr key={index} className="align-top border-b">                                 
                                <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[80px]">
                                    <Image src={dish.imgRef} height={60} width={60}/>
                                </td>
                                <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">{dish.id}</td>
                                <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">{dish.title}</td>
                                <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">{dish.price}</td>
                                <td className="text-white text-left  text-sm px-2 py-2 whitespace-nowrap min-w-[]">
                                    <button className="bg-[#008100] p-1 mr-2">Edit</button>
                                    <button className=" bg-[#f82400] p-1">Delete</button>
                                </td>                               
                            </tr>

                            ))}
                              
                          </tbody>
                      </table>
                  </div>
            </div>
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
             <p className="text-2xl font-semibold mb-2">Orders</p>
                 <div className="overflow-auto">
                      <table className="w-full ">
                          <thead  className="border-b-2">
                              <tr>
                                  <th className="p-2 text-sm font-bold text-left">Order ID</th>
                                  <th className="p-2 text-sm font-bold text-left">Customer</th>
                                  <th className="p-2 text-sm font-bold text-left">Total</th>
                                  <th className="p-2 text-sm font-bold text-left">Payment</th>
                                  <th className="p-2 text-sm font-bold text-left">Status</th>
                                  <th className="p-2 text-sm font-bold text-left">Action</th>
                              </tr>
                          </thead>
                          <tbody className="border-b">
                              <tr className="align-top border-b">                                 
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[80px]">65247a...</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">08162648391</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">$175</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Cash</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Delivered</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">
                                    <button className="bg-[#008100] p-1 text-white">Next Stage</button>
                                  </td>                                                                
                              </tr>
                              <tr className="align-top border-b">                                 
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[80px]">65247a...</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">08162648391</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">$175</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Cash</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Delivered</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">
                                    <button className="bg-[#008100] p-1 text-white">Next Stage</button>
                                  </td>                                                                
                              </tr>
                              <tr className="align-top border-b">                                 
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[80px]">65247a...</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">08162648391</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">$175</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Cash</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Delivered</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">
                                    <button className="bg-[#008100] p-1 text-white">Next Stage</button>
                                  </td>                                                                
                              </tr>
                              <tr className="align-top border-b">                                 
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[80px]">65247a...</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[120px]">08162648391</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">$175</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Cash</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">Delivered</td>
                                  <td className="text-[#565452] text-left px-2 py-2 whitespace-nowrap min-w-[70px]">
                                    <button className="bg-[#008100] p-1 text-white">Next Stage</button>
                                  </td>                                                                
                              </tr>
                          </tbody>
                      </table>
                  </div>
            </div>

        </div>
    </>
  )
}

export default Admin