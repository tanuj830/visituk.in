import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className=' px-[1rem] md:px-[7rem] md:mt-20'>
        <div className='flex px-3 md:px-0 gap-y-5 md:gap-y-0 flex-col md:flex-row md:items-center md:justify-between my-2'>
            <div>
            <h2 className=' text-3xl font-semibold tracking-wider'>What to Experience</h2>
            </div>
            <div>
                <Link className="bgcol px-6 py-2 rounded-full text-sm w-full tracking-wide" href="/all-plans">Explore Packages</Link>
            </div>
        </div>
        <div>
        <section class="text-gray-600 body-font">
  <div class="px-6 py-10 ">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10  -m-4">
      <div data-aos="zoom-in"
      class="shadow-md hover:shadow-2xl transition-all rounded-3xl overflow-hidden ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src="https://tse4.mm.bing.net/th?id=OIP.xdzFk8cbxHLBPQvHYPBlVwHaCt&pid=Api&P=0" alt="content"/>
        <div class="p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">uttrakhand</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-3">All Char Dham Packages</h2>
          <p class="leading-relaxed text-base">Starting from</p>
          <p class="leading-relaxed text-base font-semibold text-black"> ₹4500 per day</p>
            <div className='border-t py-2 mt-4'>
            <p className='col'>Explore All  Packages</p>
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
            <p className='col'>Explore All  Packages</p>
            </div>
        </div>
      </div>
      <div data-aos="zoom-in"
     class="shadow-md hover:shadow-2xl transition-all rounded-3xl overflow-hidden ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src="https://images.pexels.com/photos/15335735/pexels-photo-15335735.jpeg?auto=compress&cs=tinysrgb&w=600" alt="content"/>
        <div class="p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">uttrakhand</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-3">Ganga Arti (Haridwar)</h2>
          <p class="leading-relaxed text-base">Starting from</p>
          <p class="leading-relaxed text-base font-semibold text-black"> ₹4500 per day</p>
            <div className='border-t py-2 mt-4'>
            <p className='col'>Explore All  Packages</p>
            </div>
        </div>
      </div>
      <div data-aos="zoom-in"
     class="shadow-md hover:shadow-2xl transition-all rounded-3xl overflow-hidden ">
          <img class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src="https://images.pexels.com/photos/14617402/pexels-photo-14617402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="content"/>
        <div class="p-6 rounded-lg">
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">uttrakhand</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-3">Kedarnath Packages</h2>
          <p class="leading-relaxed text-base">Starting from</p>
          <p class="leading-relaxed text-base font-semibold text-black"> ₹4500 per day</p>
            <div className='border-t py-2 mt-4'>
            <p className='col'>Explore All  Packages</p>
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