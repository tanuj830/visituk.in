import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='md:container md:mt-20'>
        <div className='flex items-center justify-between my-2'>
            <h2 className=' text-3xl font-semibold tracking-wider'>What to Experience</h2>
            <div>
                <Link className="bgcol px-6 py-2 rounded-full text-sm w-full" href="/all-plans">View all</Link>
            </div>
        </div>
        <div>
        <section class="text-gray-600 body-font">
  <div class="px-6 py-10 ">
    <div class="grid grid-cols-4 gap-10  -m-4">
      <div data-aos="zoom-in"
      class="shadow-md hover:shadow-2xl transition-all rounded-3xl overflow-hidden ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src="https://tse4.mm.bing.net/th?id=OIP.xdzFk8cbxHLBPQvHYPBlVwHaCt&pid=Api&P=0" alt="content"/>
        <div class="p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">uttrakhand</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-3">All Char Dham Packages</h2>
          <p class="leading-relaxed text-base">Starting from</p>
          <p class="leading-relaxed text-base font-semibold text-black"> ₹4500 per day</p>
            <div className='border-t py-2 mt-4'>
            <Link className='col' href="/">Explore Char Dham Packages</Link>
            </div>
        </div>
      </div>
      <div data-aos="zoom-in"
     class="shadow-md hover:shadow-2xl transition-all rounded-3xl overflow-hidden ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src="https://tse4.mm.bing.net/th?id=OIP.Cms42PCGWMgt-q65CCD1igHaEM&pid=Api&P=0" alt="content"/>
        <div class="p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">uttrakhand</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-3">All Do Dham Packages</h2>
          <p class="leading-relaxed text-base">Starting from</p>
          <p class="leading-relaxed text-base font-semibold text-black"> ₹4500 per day</p>
            <div className='border-t py-2 mt-4'>
            <Link className='col' href="/">Explore Do Dham Packages</Link>
            </div>
        </div>
      </div>
  </div>
  </div>
</section>
        </div>
    </div>
  )
}

export default Hero