import Link from 'next/link'
import React from 'react'

const Hero1 = () => {
  return (
    <div data-aos="flip-up" className='xl:container mt-10 md:mt-32 px-[1rem] md:px-[7rem] '>
    <div className='flex flex-col md:flex-row   items-center justify-between gap-6'>
        <div className=''>
            <h4 className='text-3xl font-semibold  tracking-wider text-slate-600'>Find The Perfect Package</h4>
            <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
        <Link className='uppercase  duration-300 ease-in-out rounded-full text-sm text-green-500 hover:text-green-700' href="/">Explore All packages</Link>
        </div>
            <div className=' hidden md:inline-block '>
            <div className='grid grid-cols-1  '>
            <img className='w-72 rounded-2xl h-[27vw] hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/15335740/pexels-photo-15335740.jpeg" alt="" />
            </div>
            </div>
       <div className=''>
        {/* for mobile */}
       <div className='inline md:hidden '>
       <div className=' flex flex-row flex-nowrap overflow-scroll gap-6'>
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150 ease-in-out' src="https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg" alt="" />
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg" alt="" />
            {/* <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/13022659/pexels-photo-13022659.jpeg" alt="" /> */}
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/12584382/pexels-photo-12584382.jpeg" alt="" />
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/12495840/pexels-photo-12495840.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        </div>
        {/* for pc */}
       <div className='hidden md:inline'>
       <div className=' grid grid-cols-2  gap-6'>
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150 ease-in-out' src="https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg" alt="" />
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg" alt="" />
            {/* <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/13022659/pexels-photo-13022659.jpeg" alt="" /> */}
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/12584382/pexels-photo-12584382.jpeg" alt="" />
            <img className='w-72 rounded-2xl hover:shadow-xl hover:scale-110 duration-150' src="https://images.pexels.com/photos/12495840/pexels-photo-12495840.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Hero1