import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Hero2 = () => {

  const bestofuk = [
    {
      "img": "https://images.pexels.com/photos/15335735/pexels-photo-15335735.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Haridwar"
    },
    {
      "img": "https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg",
      "name": "Kedarnath"
    },
    {
      "img": "https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg",
      "name": "Badrinath"
    },
    {
      "img": "https://images.pexels.com/photos/12583557/pexels-photo-12583557.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Gangotri"
    }
  ]
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (

    <div className='mt-24 xl:container'>
      <div className='px-4 md:px-0'>
        <h1 className='text-3xl font-semibold tracking-wider text-slate-600 text-center'>Best of Uttrakhand</h1>
        <div className='flex items-center justify-center mt-2'>
          <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
        </div>
        <div className='mt-6'>
          <div className='relative flex items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            {/* npm i tailwind-scrollbar-hide and in tailwind config.js add require('tailwind-scrollbar-hide') inside plugins */}
            <div
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex'
            >
              {bestofuk.map((item) => (
                <img
                  className='w-80 h-full mx-2 rounded-2xl hover:brightness-75 duration-300 ease-in-out'
                  src={item.img}
                  alt='/'
                />
              ))}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2