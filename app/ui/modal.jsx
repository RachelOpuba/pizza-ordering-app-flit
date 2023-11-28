import { useState } from "react"


const Modal = ({isVisible, onClose, children}) => {
  
  const [formData, setFormData] = useState({
    surname: '',
    phoneNumber: '',
    address: '',
  });
  
    if(!isVisible) return null

    const handleClose = (e)=>{
        if(e.target.id === 'wrapper') onClose()
    }

    

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


  return (
    <>
    <div onClick={handleClose} id="wrapper" className="fixed inset-0 z-[100] bg-black bg-opacity-10 backdrop-blur-[1px] flex justify-center py-10 ">
        {children}
    </div>
    </>
  )
}

export default Modal