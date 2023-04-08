import React from 'react'

const Offerings = () => {

    
        const offerings=[
            {
                "title":"Transportation Service",
                "img":"https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/car_ytnkq9.gif"
            },
            {
                "title":"Pre Planned Route",
                "img":"https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/way_oo6dkw.gif"
            },
            {
                "title":"Cleanliness",
                "img":"https://res.cloudinary.com/dqfbod03i/image/upload/v1680946773/spray_ay4hv3.gif"
            },
            {
                "title":"Customer Support",
                "img":"https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/support_cgcxwp.gif"
            }
        ]

  return (
    <section className=' mt-20'>
        <h2 className='text-2xl text-center font-semibold uppercase'>Our Offerings</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-1'>
          {
            offerings.map(off=>(
                <div className='flex items-center flex-col p-6'>
                    <img className='w-20' src={off.img} />
                    <h2 className='font-semibold tracking-wider'>{off.title}</h2>
                </div>
            ))
          }
        </div>
    </section>
  )
}

export default Offerings