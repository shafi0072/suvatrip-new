import React from 'react';

const Notification = () => {
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6">
        <img src="/images/2239-star-of-bethlehem-outline.gif" alt="" className='w-12'/>
        <div class="space-y-2">
          <p class="text-slate-800 text-sm"><span className='text-green-600 text-md font-bold'>Great choice of property</span> - with an average guest rating of 8.5 from 52 reviews </p>

        </div>
      </div>
    </div>
  );
};

export default Notification;