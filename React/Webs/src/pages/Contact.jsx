import React, { useState } from 'react'

const Contact = () => {
  const [FullName,setFullName] = useState("");
    const [email,setemail] = useState("");
  const [message,setmessage] = useState("");
  const [isloading,setisloading] = useState("");

  const handleClearForm = () => {
    setFullName("");
    setemail("");
    setmessage("");
  };
  

  const hendleSubmit = async(e)=>{
    e.prevenDefault();
    setisloading(true)
      try{

       const response = await fetch(
"https://official-joke-api.appspot.com/jokes/random"
       )
    const data = {
      FullName,
      email,
      message,
    };
    console.log(data);
  
}catch (error){
  console.log(error.message);
} finally {
  setisloading(false);
}


    handleClearForm();
  };

  return (
    <>
   <h1 className='font-bold text-center'> Contact Us </h1>
   <form onReset={handleClearForm} onSubmit={hendleSubmit}>
    <div className='text-center'>
      <div>
      <label htmlFor="FullName">Full Name :-</label>
      <input type="FullName" name='FullName' id='FullName' value={FullName} placeholder='Enter your Name' onChange={(e) => setFullName(e.target.value)} className='text-primary border-2 ml-3 mb-1' />
    </div>
    <div>
      <label htmlFor="email">Email :-</label>
      <input type="email" name='email' id='email' value={email} placeholder='Enter your Email' onChange={(e) => setemail(e.target.value)} className='text-primary border-2 ml-10 mb-1' />
    </div>
    <div>
      <label htmlFor="message">Message :-</label>
      <textarea name="message" id='message' value={message} placeholder='Enter your message'onChange={(e) => setmessage(e.target.value) } className='text-primary border-2 ml-3'  ></textarea>
    </div>

<div>
  <button type='Resst' className=' border-3 mr-3'>Reset</button>
  <button type='Submit' className='border-3'>Submit</button>
</div>

    </div>
   </form>

    
    </>
  )
}

export default Contact;