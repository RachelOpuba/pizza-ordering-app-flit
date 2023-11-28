'use client'
import { useState } from "react";
import Link from "next/link";

const Signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      }); 

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here, e.g., sending the data to an API
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({ username: '', password: '' });
      };


  return (
    <>
        <div className='flex justify-center items-center my-20'>
            <div>
                <p className="text-center text-2xl text-[#251b2f] font-semibold">Admin Dashboard</p>

                <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-4 w-[300px]">
                    <div className="mb-4">
                    
                        <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border-2  focus:border-[#a2a4a7]"
                        required
                        placeholder="User name"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border-2  outline-[#a2a4a7]  focus:border-[#a2a4a7]"
                        required
                        placeholder="Password"
                        />
                    </div>

                    <Link href={'/admin'}
                        type="submit"
                        className="w-full bg-[#1e7f7f] text-white py-2 px-4  text-center focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Signup
                    </Link>
                </form>

            </div>

        </div>
    </>
  )
}

export default Signup