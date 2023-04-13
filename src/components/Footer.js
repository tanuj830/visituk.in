import React from 'react'
import Link from 'next/link'
import {GiMountains} from 'react-icons/gi'
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
const Footer = () => {
  return (
    <div className='w-full shadow-2xl'>
         <div className=' bg-slate-800   text-slate-300 flex flex-col mt-10'>
  <div className='md:px-[300px] px-2 '>
        <div className=' bg-white shadow-2xl shadow-slate-700 md:py-20 py-7 md:px-6 rounded-b-2xl text-slate-600'>
        <div className=' flex justify-center mb-2 md:mb-10'>
   <div className='flex  flex-col md:flex-row justify-center gap-5 md:gap-20'>
       <div className=''>
         <div ><h3 className='text-sm text-black font-bold uppercase tracking-wider'>Discover us</h3></div>
         <div className='flex  justify-center flex-col mt-2 '>
          <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px]' href="/about">About Us</Link>
          <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px] ' href="/about">Our Team</Link>
         </div>
      </div>
       <div className='md:border-l-2 border-slate-300 md:px-2'>
         <div ><h3 className='text-sm text-black font-bold uppercase tracking-wider'>Support</h3></div>
         <div className='flex   flex-col mt-2 '>
           <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px] ' href="/contact">Contact Us</Link>
           <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px] ' href="/aboutus">How To Book</Link>
        </div>
       </div>
       <div className='md:border-l-2 border-slate-300 md:px-2'>
         <div ><h3 className='text-sm text-black font-bold uppercase tracking-wider'>Resources</h3></div>
         <div className='flex   flex-col mt-2 '>
           <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px] ' href="/aboutus">Guest Reviews</Link>
           <Link className='hover:scale-110 hover:text-black  uppercase tracking-wider  text-[12px] ' href="/aboutus">Blog</Link>
         </div>
       </div>
       <div className='grid grid-cols-3 gap-2'>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
          <div><img className='w-20' src="https://media.istockphoto.com/id/1209865783/photo/view-of-the-kedarnath-temple-lights-at-night-with-mountains-in-the-background-in-uttarakhand.jpg?b=1&s=612x612&w=0&k=20&c=KgnQGNfOk48s-0WRDmHDtUy-mRyNsLS9h9IYOGP1uws="/></div>
       </div>
   </div>
        </div>
      </div>
  </div>
  <div className=' md:p-10'>
            <div className='flex justify-center items-center py-3 mt-4'>
                <h3 className='text-white'> ___________ </h3>
                <h3 className='text-white text-xl'> visituttrakhand.in </h3>
                <h3 className='text-white'> ___________ </h3>
            </div>
            <div className='flex justify-center gap-6'>
            <Link className="hover:scale-110 text-2xl" href="https://www.instagram.com/visituttrakhand.in/" ><BsInstagram/></Link>
      <Link className="hover:scale-110 text-2xl" href="http://localhost:3000/https:wa.link/prs44x" ><BsWhatsapp/></Link>
            </div>
            <div className='text-center mt-10'>
            <small className='text-md font-bold'>© 2023 visituttrakhand.in All rights reserved.</small>
            <div className='mt-2'>
 <p className='font-semibold text-[13px]  mt-2'>*Caution: Beware of Fake Promotions or Offers</p>
   <p className='text-[13px] '>*Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill . All ARTravellers authorized email communications are delivered from domain @artravellers.co.in.</p>
   <p className='text-[13px] '>*ARTravells bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain</p>
 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer



// <div className='xl:container flex md:flex-row flex-col items-center justify-between gap-6 md:gap-32'>
// {/* section1 */}
// <div className='flex items-center justify-center'>
//     <div>
//     <Link className="text-3xl text-themecol flex items-center justify-center gap-1"  href="/">
//     <GiMountains /><h6 className="tracking-tighter">visituttrakhand.in</h6>
//     </Link>
//     <div className='flex flex-col'>
//     <small className='font-semibold text-white'>Keep travelling all year round!</small>
//      </div>
//      <div className='mt-4 flex text-white brightness-200 items-center  gap-3 md:gap-2 text-2xl'>
//       <small className='text-md brightness-50'>Contact us via: </small>
//       <Link className="hover:scale-110" href="https://www.instagram.com/visituttrakhand.in/" ><BsInstagram/></Link>
//       <Link className="hover:scale-110" href="tel:8181813626" ><FiPhoneCall/></Link>
//       <Link className="hover:scale-110" href="http://localhost:3000/https:wa.link/prs44x" ><BsWhatsapp/></Link>
//      </div>
//     </div>
// </div>
// {/* section2 */}
// <div className='xl:container flex items-center justify-center mb-2 md:mb-10'>
//   <div className='flex  items-center justify-center gap-7 md:gap-32'>
//       <div className=''>
//         <div ><h3 className='text-md md:text-lg text-white'>Discover us</h3></div>
//         <div className='flex  justify-center flex-col mt-2 '>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/about">Abot Us</Link>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/about">Our Team</Link>
//         </div>
//       </div>
//       <div className=''>
//         <div ><h3 className='text-md md:text-lg text-white'>Support</h3></div>
//         <div className='flex  justify-center flex-col mt-2 '>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/contact">Contact Us</Link>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">How To Book</Link>
//         </div>
//       </div>
//       <div className=''>
//         <div ><h3 className='text-md md:text-lg text-white'>Resources</h3></div>
//         <div className='flex  justify-center flex-col mt-2 '>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">Guest Reviews</Link>
//           <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">Blog</Link>
//         </div>
//       </div>
//   </div>
// </div>

// </div>
// {/* section3 */}
// <div className='xl:container text-justify w-full my-2 mt-8 md:mt-0'>
// <div className='mt-2'>
// <p className='font-semibold text-[13px] md:w-[60%] mt-2'>*Caution: Beware of Fake Promotions or Offers</p>
//   <p className='text-[13px] md:w-[60%] mt-2'>*Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill . All ARTravellers authorized email communications are delivered from domain @artravellers.co.in.</p>
//   <p className='text-[13px] md:w-[60%] mt-2'>*ARTravells bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain</p>
// </div>
// </div>
// {/* section4 */}
// <div className='xl:container py-3'>
//   <hr />
//   <div className='my-2'>
//       <h3 className='text-center text-[11px]'>© 2022-23 ARTravelles Pvt Ltd. All Rights Reserved.</h3>
//   </div>
// </div>
