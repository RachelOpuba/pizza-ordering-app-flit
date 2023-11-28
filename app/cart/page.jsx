'use client'
import Link from "next/link"
import { useState } from "react";
import Image from "next/image"

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Modal from "../ui/modal";




const Cart = () => { 
    const [showModal, setShowModal] = useState(false)
    const [open, setOpen] = useState(false)


    const [formData, setFormData] = useState({
        surname: '',
        phoneNumber: '',
        address: '',
      });

      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform any necessary actions with the form data
        console.log('Form submitted with:', formData);
      };


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


    const initialOptions = {
        clientId: "AZY1HyrtZPV0R3gCNnan0r6ZwzmZAAdD7USEa-39rCVzPpTfbsLTVpnfDY85AoxWgGx67UWO3Q78fg7l",
        currency: "USD",
        intent: "capture",
        "disable-funding": 'credit,card,p24',
    };

    
    const style = {"layout":"vertical"};

function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: "1blwyeo8",
                    quantity: 2,
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => {
            // Your code here after create the order
            return order.id;
        });
}
function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID,
        }),
    })
        .then((response) => response.json())
        .then((orderData) => {
            // Your code here after capture the order
        });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </>
    );
}

    
  return (
    
    <div className='mt-20'>
        <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[70%] xl:w-[72%] ms-2'>
            <div className="overflow-auto">
                    <table className="w-full ">
                        <thead  className="border-b-2">
                            <tr>
                                <th className="p-2 text-sm font-bold text-left">Product</th>
                                <th className="p-2 text-sm font-bold text-left">Name</th>
                                <th className="p-2 text-sm font-bold text-left">Extra</th>
                                <th className="p-2 text-sm font-bold text-left">Price</th>
                                <th className="p-2 text-sm font-bold text-left">Quantity</th>
                                <th className="p-2 text-sm font-bold text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            <tr className="align-top">
                                
                                <td className="text-[#69666c] px-2 py-4 min-w-[100px]">
                                    <Image src={'/sandwich.jpg'} height={90} width={90}/>
                                </td>
                                <td className="text-[#69666c] text-left px-2 py-4 whitespace-nowrap min-w-[120px]">Burger Pizza</td>
                                <td className="text-[#69666c] text-left px-2 py-4 whitespace-nowrap min-w-[70px]"></td>
                                <td className="text-[#69666c] text-left px-2 py-4 whitespace-nowrap min-w-[70px]">$40</td>
                                <td className="text-[#69666c] text-left px-2 py-4 whitespace-nowrap min-w-[70px]">4</td>
                                <td className="text-[#69666c] text-left px-2 py-4 whitespace-nowrap min-w-[70px]">$160</td>

                            
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-[30%] xl:w-[28%] bg-[#343334] p-10 text-[#fffdfc] mt-8 lg:mt-0 inset-x-0'>
                <h3 className='uppercase font-bold  pb-8 text-lg'>Cart Total</h3>
                <div className="flex gap-4">
                    <p className="font-semibold">Subtotal:</p>
                    <p className="text-[#bfc1c8]">$160</p>
                </div>
                <div  className="flex gap-4">
                    <p className="font-semibold">Discount:</p>
                    <p className="text-[#bfc1c8]">$79.60</p>
                </div>
                <div  className="flex gap-4">
                    <p className="font-semibold">Total:</p>
                    <p className="text-[#bfc1c8]">$160</p>
                </div>
                {open ? (
                    <div className="pt-4">

                    <div className="bg-white p-1  font-semibold mb-1 text-sm flex justify-center items-center">
                        <button onClick={()=> setShowModal(true)} className="text-[#3d7c82] uppercase">Cash on Delivery</button>
                    </div>
                    <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD", 'disable-funding': 'credit,card,p24' }}>
                    <ButtonWrapper showSpinner={false} />
                    </PayPalScriptProvider>
                    </div>

                ):(
                    <Link href={""} className="">
                    <button onClick={()=>setOpen(true)} className="flex bg-[#fab21d] justify-center mt-10 items-center uppercase py-3   w-full  font-semibold text-white px-8 rounded-full gap-2">Checkout Now!</button>
                </Link>
                )}

              <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
              <form onSubmit={handleSubmit} className="text-[#797f88]  flex flex-col bg-white  w-[480px] py-6 md:py-12  px-10 font-medium rounded-2xl">
                <h2 className="text-[#202942] text-3xl mb-2">You will pay $12 on delivery.</h2>

                <label  className="flex flex-col gap-2">
                    Surname:
                    <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className=" border border-[#989996] z-[200] p-1 placeholder:text-[#939596] placeholder:text-sm"
                    placeholder="John Doe" 
                    />
                </label>


                <label className="flex flex-col gap-2 mt-3">
                    Phone Number:
                    <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className=" border border-[#989996] z-[200] p-1 placeholder:text-[#939596] placeholder:text-sm"
                    placeholder="+234 703 46 36" 
                    />
                </label>


                <label className="flex flex-col gap-2 mt-3">
                    Address:
                    <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className=" border-2 border-[#989996] z-[200] p-1 placeholder:text-[#939596] placeholder:text-sm h-[150px]"
                    placeholder="10 John street" 
                    />
                </label>

                <Link href={'/order'} className="self-center">
                <button onClick={()=>setShowModal(false)} className="bg-[#f4b300] w-[100px]  mt-5 rounded-[8px] text-black border outline py-1">Order</button>
                </Link>
              </form>
                
              </Modal>
                
                
            </div>

           
            
        </div>
    </div>

   
  )
}

export default Cart