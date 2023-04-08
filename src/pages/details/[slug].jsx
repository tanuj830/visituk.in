import { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../data/plans.json";
import { FiPhoneCall } from "react-icons/fi";
import { FcOnlineSupport } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";
import { MdLocalConvenienceStore, MdEmojiTransportation } from "react-icons/md";
import { HiCurrencyRupee} from 'react-icons/hi'

import { BiTimeFive } from "react-icons/bi";
import { BsFillPersonFill, BsStarHalf } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { BsFillCarFrontFill} from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import Link from "next/link";
import OffersCard from "@/components/HomeScreenComponents/OffersCard";
export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  const[persons, setPersons] = React.useState(0)
  const[perPersonPrice, setPerPersonPrice] = React.useState(0)
  const[price, setPrice] = React.useState(0)

  // setting up total price and persons to state 
    const handleChange=(e, p)=>{
      console.log(p)
      console.log(e.target.persons)
    }

    // calculating price
  useEffect(() => {
    setPerPersonPrice(price/persons)
  })


  return (
    <>
      {slug !== "undefined"
        ? data.plans.map((plan) => (
            <>
              {plan.id == slug ? (
                <div className="">
                  {
                    plan.specialoffer === true ? <div className=" py-1  w-full bg-green-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">Avail our Special Offer and make the best deal for you ! </h3>
                      </div>:<div className=" py-1  w-full bg-slate-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">You can customize this tour <small className="text-slate-200 text-md">by choosing number of peoples and vechile</small> </h3>
                      </div>
                  }
                  <section className="flex flex-col md:relative  text-white  bg-slate-800 md:py-10 py-3 ">
                    <div className="xl:container">
                      <div className="px-3 md:px-0">
                        <h1 className="text-3xl font-semibold">{plan.title}</h1>
                        <small className="text-lg mt-1 text-justify">
                          Embark on a divine adventure with {plan.title}, the
                          journey of a lifetime <br /> that will lift your
                          spirit and lift your heart!
                        </small>
                        <div className="w-[50%] mt-1">
                          <hr />
                        </div>
                        <div className="mt-6">
                          <small className="flex items-center gap-1">
                            <h6 className="text-xl">
                              <BiTimeFive />
                            </h6>{" "}
                            <small className="font-semibold text-sm">
                              {plan.days} days + {plan.nights} nights{" "}
                            </small>
                          </small>
                        </div>
                        <div className="mt-2">
                          <small className="flex items-center gap-1">
                            <h6 className="text-xl">
                              <BsFillPersonFill />
                            </h6>{" "}
                            {
                              plan.specialoffer === true ? <small className="font-semibold text-sm">
                              Tour of {plan.persons} people
                            </small>: <div>
                              <small className="font-semibold text-sm">Tour of {
                                plan.persons.map((per, index)=>(
                                  
                                    index == plan.persons.length-1 ? per: per + " or "
                                  
                                ))
                              } people <small className="text-green-400 text-sm">(Customizable)</small></small>
                            </div>
                            }
                            {
                              plan.specialoffer === true ? <small className="text-lg text-green-400">(₹{Math.round(plan.price / plan.persons)}/person)</small>:null
                            }
                          </small>
                        </div>
                        <small className="flex items-center gap-1 mt-2">
                          <h6 className="text-2xl">
                            <BiTrip />
                          </h6>
                          <small className="font-semibold text-sm md:w-[50%]">
                            {plan.via}
                          </small>
                        </small>
                        <h6 className="flex items-center  mt-2 gap-2 text-yellow-500">
                          <small className="text-lg">4.5</small>{" "}
                          <small className="flex items-center text-lg">
                            <AiTwotoneStar /> <AiTwotoneStar />{" "}
                            <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf />
                          </small>{" "}
                          <small className="text-sm text-violet-400">
                            (12,800 ratings)
                          </small>
                        </h6>

                        <div className="flex items-center gap-1 mt-2">
                          <div>
                            <h6 className="text-2xl">
                              <MdUpdate />
                            </h6>
                          </div>
                          <div>
                            <h6>Last Updated 3/2023</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-3 md:mx-0 overflow-hidden text-black md:absolute  border shadow-md hover:shadow-lg rounded-lg md:top-10 md:w-[25%] md:right-56  top-0 right-0 bg-white mt-6 md:mt-0">
                      <img className="overflow-hidden" src={plan.img} alt="" />
                      <div className="py-2 px-3">
                        <h2 className="text-xl text-justify font-semibold text-slate-600">
                          Book {plan.title}
                        </h2>
                        <div className="">
                          <small className=" text-red-600">
                            <strike className="text-[12px]">
                              {" "}
                              ₹ {plan.exPrice}
                            </strike>
                          </small>
                          <small className=" text-lg font-semibold text-green-700">
                            {" "}
                            <small>now at</small> ₹{plan.price}
                          </small><br />
                          <small className="text-md ">Now you can enjoy this tour only at ₹{Math.round(plan.price / plan.persons)}/person</small>
                          <br />
                          {/* <small className=' text-lg font-semibold text-green-600'>  <small>You are saving</small> ₹{(plan.exPrice) - (plan.price)}</small> */}
                        </div>
                        <div className="flex flex-col justify-between mt-4 mb-4">
                          <Link
                            href="tel:7668088539"
                            className="bg-[#d00000] px-3 py-3 mt-2 border rounded-md hover:bg-[#ea0000] text-white flex items-center justify-center gap-2"
                          >
                            <h2 className="text-xl">
                              <FiPhoneCall />
                            </h2>
                            <h2 className="">Book on call</h2>
                          </Link>
                          {/* <button  className='bg-slate-200 px-3 py-2 mt-2 border rounded-md hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FcOnlineSupport/></h2><h2>Book Online</h2></button> */}
                        </div>
                      </div>
                    </div>
                  </section>

                {/* customization section */}
                 {
                    plan.specialoffer === false ? 
                <section className="xl:container md:mt-20 p-6 md:w-[60%]">
                 <div className="border p-3">
                 <div className="mt-10 ">
                    <div>
                      {/* customization main logic here */}
                       <div>
                       <h2 className=" text-xl uppercase tracking-wider font-bold">Available Vehicles</h2>
                        {
                          data.vehicles.map(vech=>(
                            
                              <div className=" mt-3  rounded p-2">
                        <hr />
                                  <h2 className="flex items-center gap-3"><h2 className="w-14"><img src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/car_ytnkq9.gif" alt="" /></h2><h2 className="text-lg font-bold">{vech.name}</h2></h2>
                                  <h6 className="flex items-center gap-1 mb-3"><h6 className="text-2xl"><HiCurrencyRupee/></h6>Price per day <h6 className="text-lg font-bold text-green-600">₹{vech.pricePerDay}</h6>/Person</h6>
                                  <label className="">Select number of travellers</label>
                                  <select className="border w-full p-1" name="persons" id="personsid">
                                  {
                                      vech.persons.map(per=>(
                                            <option className="" persons={per} >{per}</option>
                                       ))
                                   }          
                        </select>
                              </div>
                            
                          ))
                         
                        }
                        {
                          console.log(perPersonPrice)
                        }
                       </div>
                       {/* <div>
                       <label className="text-slate-600">Please select vechiles</label>
                      <select className="border w-full p-1" name="persons" id="personsid">
                        {
                          plan.persons.map(per=>(
                            <option className="" persons={per}>{per}</option>
                          ))
                        }
                      </select>
                       </div> */}
                    </div>
                 </div>
                 </div>
                </section>:null
                  }



                  <section className="mt-20 px-3  xl:container">
                    <div>
                      <h2 className="text-2xl font-semibold ">
                        This tour includes:
                      </h2>
                    </div>
                    <div className="md:w-[50%] grid-cols-2 grid md:grid-cols-3 text-slate-700">
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                          <BiTrip />
                        </h1>
                        <h1 className="text-lg">
                          {plan.days} days and {plan.nights} nights{" "}
                        </h1>
                      </div>
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                          <MdLocalConvenienceStore />
                        </h1>
                        <h1 className="text-lg">Convenience</h1>
                      </div>
                      <div className="flex items-center gap-1 py-4 ">
                        <h1 className="text-2xl text-black">
                          <MdEmojiTransportation />
                        </h1>
                        <h1 className="text-lg">Vechile with driver</h1>
                      </div>
                    </div>
                  </section>

                  <section className="xl:container mt-10  w-full">
                    <div className="px-2 md:px-0">
                      <div className=" border p-3 md:p-5 rounded-lg">
                        <h3 className="text-2xl font-semibold  my-3">
                          About Tour
                        </h3>
                        <div dangerouslySetInnerHTML={{__html:plan.disp}} className="text-lg text-justify text-slate-600"></div>
                      </div>
                    </div>
                  </section>
                  {/* Tour Itinerary */}
                  <section className="xl:container mt-6 p-3"></section>
                </div>
              ) : null}
            </>
          ))
        : null}

      {/* other plans */}
      <section className="xl:container px-3 mt-6">
        <h1 className="text-xl text-center uppercase font-bold my-3">Popular packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
          {data.plans.map((plan) => (
           <>
           {
            plan.specialoffer === true ?  <Link href={`/details/${encodeURIComponent(plan.id)}`} className="border px-4 py-2 ">
            <div className="flex gap-6">
            <div><img className="w-16 h-16 rounded-full" src={plan.img} alt="" /></div>
            <div>
              <h2 className="font-semibold">{plan.title}</h2>
            <div className=' mt-1 md:mt-2'>
                            
                            <h3 className='flex items-center text-yellow-500 gap-2'><small className='text-md font-semibold'>{plan.ratings}</small><small className='flex items-center text-md'> <AiTwotoneStar /> <AiTwotoneStar />{" "}
                        <AiTwotoneStar /> <AiTwotoneStar /> <BsStarHalf /></small></h3>
                        </div>
                        <div className="">
                      <small className=" text-red-600">
                        <strike className="text-[12px]">
                          {" "}
                          ₹ {plan.exPrice}
                        </strike>
                      </small>
                      <small className=" text-lg font-semibold text-green-700">
                        {" "}
                        <small>now at</small> ₹{plan.price}
                      </small><br />
                      {/* <small className=' text-lg font-semibold text-green-600'>  <small>You are saving</small> ₹{(plan.exPrice) - (plan.price)}</small> */}
                    </div>
            </div>
            </div><hr />
                      <small className="text-md text-justify">Now you can enjoy this tour only at <small className="font-bold text-green-600 text-lg">₹{Math.round(plan.price / plan.persons)}</small>/person</small>
        </Link>: null
           }
           </>
          ))}
        </div>
      </section>
    </>
  );
}
