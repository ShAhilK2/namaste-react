import React from 'react'

function ContactUs() {
  return (
    <div>
     <h1 className='p-4 m-4 font-bold text-xl '>Contact Us </h1>
     <form>
      <input type='text' placeholder='name' className='p-2 m-2 border border-black'/>
      <input type='text' placeholder='message' className='p-2 m-2 border border-black'/>
<button className='p-2 m-2 bg-gray-100 rounded-lg border border-black'>Submit</button>
     </form>
    </div>
  )
}

export default ContactUs
