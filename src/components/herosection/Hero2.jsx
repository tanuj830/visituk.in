import React from 'react'

const Hero2 = () => {

  const bestofuk=[
    {
      "img":"https://images.pexels.com/photos/15335735/pexels-photo-15335735.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name":"Haridwar"
    },
    {
      "img":"https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg",
      "name":"Kedarnath"
    },
    {
      "img":"https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg",
      "name":"Badrinath"
    },
    {
      "img":"https://images.pexels.com/photos/12583557/pexels-photo-12583557.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name":"Gangotri"
    }
  ]

  return (
    <div className='mt-24 xl:container'>
        <div className=''>
            <h1 className='text-3xl font-semibold tracking-wider text-slate-600 text-center'>Best of Uttrakhand</h1>
            <div className='flex items-center justify-center mt-2'>
            <div className=' mt-1 w-24 border-b-4 border-green-600 '><hr /></div>
            </div>
            <div className='mt-6'>
       <div className=' flex flex-row flex-nowrap overflow-scroll gap-6'>
           {
            bestofuk.map(place=>(
              <img className='w-96 rounded-2xl hover:brightness-75 duration-300 ease-in-out' src={place.img} alt="" />
            ))
           }
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero2