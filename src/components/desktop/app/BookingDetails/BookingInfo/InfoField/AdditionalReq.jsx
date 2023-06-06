import React from 'react';

const AdditionalReq = ({setMessage, message}) => {
  return (
    <div class="relative group mb-3 ">
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div class="relative px-7 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none space-x-6 py-3">

      <div class="space-y-2">
        <div className=''>
          
          <h1 className="text-md font-bold">please Let us know what you need</h1>
       
          <p className="text-sm">Requests are subject to availability. We'll send yours right after you book.</p>
        </div>

        <div className=" mt-2 px-3 py-3 d-flex justify-content-center">
          <textarea name="" defaultValue={message} onChange={(e) => setMessage(e.target.value) } id="" cols="100" rows="10" placeholder='message' className='px-3 rounded py-3 bg-gray-100'></textarea>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdditionalReq;