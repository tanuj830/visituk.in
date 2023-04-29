import React from 'react'

const Hero3 = () => {
    const data = [
        {
            "title": "Our Excellence",
            "disp": "Keeping in mind the needs of our clients, we offer all the travel related services under one roof. We take pride in introducing ourselves as a leading travel agent and tour organizer."
        },
        {
            "title": "Quality Assurance",
            "disp": "We are quality conscious and client-oriented service providers. We always strive to deliver our best to our clients.We intend to give maximum satisfaction to our customers."
        },
        {
            "title": "Customer satisfaction",
            "disp": "Superior customer service, 24x7 dedicated helpline to serve customers in all manners."
        },
        {
            "title": "Best Deals Guaranteed",
            "disp": "Great experiences at lowest prices guaranteed."
        },
    ]
  return (
    <>
        <div className='hidden md:inline'>
        <div className='flex items-center justify-center h-[100vh] bg-no-repeat ' style={{background:"url(https://images.pexels.com/photos/235778/pexels-photo-235778.jpeg?auto=compress&cs=tinysrgb&w=2840)", backgroundSize:"100%, 100%", backgroundRepeat:"no-repeat"}}>
    
    <div className='mx-[1rem] md:mx-[4rem]'>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-10 '>
     {
       data.map(d=>(
           <div className="tracking-widest shadow-lg backdrop-blur-lg  bg-slate-100 bg-opacity-10 md:p-10 p-4 rounded-lg md:rounded-2xl">
                   <h2 className='border-l-8 px-2 border-green-600 text-xl font-bold text-slate-50 brightness-200'>{d.title}</h2>
                   <h3 className='text-sm mt-3 text-slate-300 brightness-200'>{d.disp}</h3>
               </div>
       ))
      }
     </div>
    </div>
        </div>
    </div>
        <div className='inline md:hidden'>
        <div className='flex items-center justify-center bg-contain bg-no-repeat py-10 ' style={{background:"url(https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundSize:"100%, 100%", backgroundRepeat:"no-repeat"}}>
    
    <div className='mx-[1rem] md:mx-[4rem]'>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-10 '>
     {
       data.map(d=>(
           <div className="tracking-widest shadow-lg backdrop-blur-lg  bg-slate-100 bg-opacity-10 md:p-10 p-4 rounded-lg md:rounded-2xl">
                   <h2 className='border-l-8 px-2 border-green-600 text-xl font-bold text-slate-50 brightness-200'>{d.title}</h2>
                   <h3 className='text-sm mt-3 text-slate-300 brightness-200'>{d.disp}</h3>
               </div>
       ))
      }
     </div>
    </div>
</div>
        </div>
    </>
  )
}

export default Hero3