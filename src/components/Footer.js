import React from 'react'
import Link from 'next/link'
import {BsAirplaneEngines} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='xl:container bg-slate-800 p-6 text-slate-300 mt-10'>
      <div className=' flex md:flex-row flex-col items-center justify-between gap-6 md:gap-32'>
        {/* section1 */}
        <div className='flex items-center justify-center'>
            <div>
            <Link className="text-3xl text-themecol flex items-center justify-center"  href="/">
              <BsAirplaneEngines/><span className="ml-2">ARTravells</span>
            </Link>
            <div className='flex flex-col'>
            <small className='font-semibold text-white'>Keep travelling all year round!</small>
             </div>
            </div>
        </div>
        {/* section2 */}
        <div className='flex items-center justify-center mb-2 md:mb-10'>
          <div className='flex  items-center justify-center gap-3 md:gap-32'>
              <div className=''>
                <div ><h3 className='text-md md:text-lg text-white'>Discover us</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/about">About Us</Link>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/about">Our Team</Link>
                </div>
              </div>
              <div className=''>
                <div ><h3 className='text-md md:text-lg text-white'>Support</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/contact">Contact Us</Link>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">How To Book</Link>
                </div>
              </div>
              <div className=''>
                <div ><h3 className='text-md md:text-lg text-white'>Resources</h3></div>
                <div className='flex  justify-center flex-col mt-2 '>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">Guest Reviews</Link>
                  <Link className='hover:scale-110 hover:text-white text-sm md:text-md' href="/aboutus">Blog</Link>
                </div>
              </div>
          </div>
        </div>

      </div>
        {/* section3 */}
        <div className='text-justify w-full my-2 mt-8 md:mt-0'>
      <hr />
        <div className='mt-2'>
        <p className='font-semibold text-[13px] md:w-[60%] mt-2'>*Caution: Beware of Fake Promotions or Offers</p>
          <p className='text-[13px] md:w-[60%] mt-2'>*Please do not believe or engage with any promotional emails, SMS or Web-link which ask you to click on a link and fill . All ARTravellers authorized email communications are delivered from domain @artravellers.co.in.</p>
          <p className='text-[13px] md:w-[60%] mt-2'>*ARTravells bears no liability or responsibility whatsoever for any communication which is fraudulent or misleading in nature and not received from registered domain</p>
        </div>
        </div>
        {/* section4 */}
        <div className=' py-3'>
          <hr />
          <div className='my-2'>
              <h3 className='text-center text-[11px]'>© 2022-23 ARTravelles Pvt Ltd. All Rights Reserved.</h3>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer