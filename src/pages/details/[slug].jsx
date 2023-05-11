import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../data/plans.json";
import { FiPhoneCall } from "react-icons/fi";
import { FcOnlineSupport } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";
import { MdLocalConvenienceStore, MdEmojiTransportation } from "react-icons/md";
import { HiCurrencyRupee} from 'react-icons/hi'
import { GiSevenPointedStar} from 'react-icons/gi'
import Header2 from "../../components/Header2"
import { BiTimeFive } from "react-icons/bi";
import { BsFillPersonFill, BsStarHalf } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { BsFillCarFrontFill} from "react-icons/bs";
import { MdUpdate } from "react-icons/md";
import Link from "next/link";
import numberToINR from '@/utils/numberToINR';

import OffersCard from "@/components/HomeScreenComponents/OffersCard";
export default function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  const[persons, setPersons] = React.useState(0)
  const[perPersonPrice, setPerPersonPrice] = React.useState(0)
  const[personProps, setPersonProps] = React.useState(0)
  const[price, setPrice] = React.useState(0)
  const [subSection, setSubSection] = useState("about")

  // setting up total price and persons to state 
    // const handleChange=(e, p)=>{
    //   console.log(p)
    //   console.log(e.target.persons)
    // }

    // calculating price
  useEffect(() => {
    setPerPersonPrice(price/persons)
  })


  const [selectedCar, setSelectedCar] = useState("2");
  const [showPrice, setShowPrice] = useState(false);
  const [plan, setPlan] = useState({});
  
  const [planPrice, setPlanPrice] = useState(plan?.price)

useEffect(() => {
  
  setPersonProps(router.query.persons)

  data.plans.map((plan) => (
    plan.id == slug ? setPlan(plan) : null))
}, [slug])


  useEffect(() => {
    


      const carData = data.vehicles.filter(v => v.persons === selectedCar);
      // console.log(carData[0],carData[0].pricePerDay*plan.days,"the selected car");
      if(carData.length > 0)
      {
          setPlanPrice(carData[0].pricePerDay * plan.days)
          setShowPrice(true)
      }
  }, [selectedCar])


  return (
    <>
      {plan !== "undefined"
        ? 
            <>
                <div className="md:pb-10 bg-gradient-to-br from-neutral-100 to-white-100">
                 <div className=" py-1  w-full bg-green-600">
                      <h3 className="text-sm md:text-md text-white text-center uppercase px-2 md:p-2">Avail our Special Offer and make the best deal for you ! </h3>
                      </div>
                  <section className="flex flex-col md:relative  text-white  bg-slate-800 md:px-6 md:py-10 py-3 ">
                    <div className="xl:container">
                      <div className="px-3 md:px-0">
                        <h1 className="text-3xl font-semibold">{plan.title}</h1>
                        <div className="md:w-[50%] leading-5">
                        <small className="text-[14px]  text-justify leading-7">
                          Embark on a divine adventure with <b className="text-lg">{plan.title}</b>, the
                          journey of a lifetime  that will lift your
                          spirit and lift your heart!
                        </small>
                        </div>
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
                            <small className="font-semibold text-sm">
                              Choose number of people to know actual price 
                            </small>
                            {/* {
                              plan.specialoffer === true ? <small className="text-lg text-green-400">(₹{Math.round(plan.price / plan.persons)}/person)</small>:null
                            } */}
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
                            ({plan.ratingsCount} ratings)
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

                    <div className="mx-3 md:mx-0 overflow-hidden text-black md:absolute  border shadow-md hover:shadow-lg rounded-lg md:top-7 md:w-[30%] md:right-24  top-0 right-0 bg-white mt-6 md:mt-0">
                      <img className="overflow-hidden h-44 w-full object-cover" src={plan.img} alt="" />
                      <div className="py-2 px-3">
                        <h2 className="text-lg font-semibold ">
                          Book {plan.title}
                        </h2>
                        {
                            showPrice === true ?  <div className='flex flex-col md:my-1'>
                            <div className=' flex items-center h-10 font-semibold text-lg gap-1'>
                                <h3><HiCurrencyRupee /></h3>
                                <div><strike className="text-red-600 text-[12px]">₹{numberToINR(plan.exPrice)}</strike></div>
                                <div className='text-green-600 text-lg font-bold'> ₹{numberToINR(planPrice)}</div>
                                <div className='text-red-600 text-sm italic'>(Saving {Math.round(((plan.exPrice - planPrice) / plan.exPrice) * 100)}%)</div>
                            </div>
                            <div></div>
                        </div>: <h3 className=' text-sm text-gray-600 mt-4 tracking-wider'>Customize your package & get final calculation</h3>
                           }
                        <div className='w-full mt-2 '>
                                    {
                                      personProps === "0" ? 
                                      <select onChange={e => setSelectedCar(e.target.value)} className='border-2 rounded-full w-full px-5 py-2 cursor-pointer '>
                                      
                                      <option value={"4"}>2 - 4 (Dezire, Xylo)</option>
                                      <option value={"6"}>5 - 6 (Triber)</option>
                                      <option value={"8"}>7 - 8 (Innova, Bolero, Max)</option>
                                      <option value={"13"}>9 - 13 (Traveller)</option>
                                  </select>:
                                  <select onChange={e => setSelectedCar(e.target.value)} className='border-2 rounded-full w-full px-5 py-2 cursor-pointer '>
                                      {
                                        personProps === "4" ?<option value={"4"}>2 - 4 (Dezire, Xylo)</option> : personProps === "6" ?
                                        <option value={"6"}>5 - 6 (Triber)</option>: personProps === "8" ?
                                  <option value={"8"}>7 - 8 (Innova, Bolero, Max)</option>: personProps === "13" ?
                                  <option value={"13"}>9 - 13 (Traveller)</option>:<option value={"2"}>Select number of peoples</option>
                                  
                                      }
                                      <option value={"2"}>Select number of peoples</option>
                                      <option value={"4"}>2 - 4 (Dezire, Xylo)</option>
                                      <option value={"6"}>5 - 6 (Triber)</option>
                                      <option value={"8"}>7 - 8 (Innova, Bolero, Max)</option>
                                      <option value={"13"}>9 - 13 (Traveller)</option>
                              </select>
                                    }
                                </div> 
                        <div className="flex flex-col justify-between mt-4 mb-4">
                          <Link
                            href="tel:7668088539"
                            className="bg-[#d00000] px-3 py-3 mt-2 border rounded-lg hover:bg-[#ea0000
                            ] text-white flex items-center justify-center gap-2"
                          >
                            <h2 className="text-xl">
                              <FiPhoneCall />
                            </h2>
                            <h2 className="">Book on call</h2>
                          </Link>
                          {/* <button  className='bg-slate-200 px-3 py-2 mt-2 border rounded-lg hover:bg-slate-300 flex items-center justify-center gap-2'><h2 className='text-xl'><FcOnlineSupport/></h2><h2>Book Online</h2></button> */}
                        </div>
                      </div>
                    </div>
                  </section>



                

                <section className="md:container">
                  <div className="px-3 py-3 ">
                  <div className="mt-6 md:mt-20 bg-white border px-5 rounded-lg shadow tracking-widest md:px-10 py-6 md:py-10">
                    <div className="">
                      <h2 className="text-xl  uppercase font-semibold border-l-8 border-green-500 px-3  my-3">
                        This tour includes
                      </h2>
                    </div>
                    <div className=" flex items-center gap-x-10 flex-wrap text-slate-700">
                      <div className="flex items-center gap-1 py-1 md:py-4 ">
                        <h1 className="text-2xl text-black">
                          <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/way_oo6dkw.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">
                          {plan.days} days and {plan.nights} nights{" "}
                        </h1>
                      </div>
                      <div className="flex items-center gap-1 py-1 md:py-4 ">
                        <h1 className="text-2xl text-black">
                            <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1683133634/ezgif-5-3d935309ed_exoaa8.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Stay on Demand</h1>
                      </div>
                      <div className="flex items-center gap-1 py-1 md:py-4 ">
                        <h1 className="text-2xl text-black">
                          <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946772/car_ytnkq9.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Experienced Driver</h1>
                      </div>
                      <div className="flex items-center gap-1 py-1 md:py-4 ">
                        <h1 className="text-2xl text-black">
                        <img className="w-10" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1680946773/spray_ay4hv3.gif" alt="" />
                        </h1>
                        <h1 className="text-sm">Clean & Sanitized Vechile</h1>
                      </div>
                    </div>
                  </div>
                  </div>
                </section>

                {/* grid of itenary and  */}
                <div className="flex flex-col md:flex-row md:container">
                <section className="px-3 py-3 ">
                  <div className="">
                    <div className=" bg-white border p-5 rounded-lg shadow md:tracking-widest md:px-14 md:py-10">
                      <div className="flex gap-x-3">
                        <button className={`text-[8px] md:text-sm border rounded-full  transition-all duration-500 border-neutral-300 md:px-4 px-2 py-2 ${subSection === "about" ? "bg-green-500 text-white   " : "bg-white "}    uppercase font-semibold tracking-widest mb-10`} onClick={() => setSubSection("about")}>
                          About
                        </button>
                        {
                          plan.itenary &&
                          <button className={`text-[8px] md:text-sm  border rounded-full transition-all duration-500 border-neutral-300 md:px-4 px-2 py-2 ${subSection === "itinerary" ? "bg-green-500 text-white " : "bg-white"}  uppercase font-semibold tracking-widest  mb-10`} onClick={() => setSubSection("itinerary")}>Itineary</button>
                        }
                        {
                          plan.transportation &&
                          <button className={`text-[8px] md:text-sm  border rounded-full transition-all duration-500 border-neutral-300 md:px-4 px-2 py-2 ${subSection === "transportation" ? "bg-green-500 text-white " : "bg-white"}  uppercase font-semibold tracking-widest  mb-10`} onClick={() => setSubSection("transportation")}>Transportation</button>
                        }
                        {
                          
                          <button className={`text-[8px] md:text-sm  border rounded-full transition-all duration-500 border-neutral-300 md:px-4 px-2 py-2 ${subSection === "policies" ? "bg-green-500 text-white " : "bg-white"}  uppercase font-semibold tracking-widest  mb-10`} onClick={() => setSubSection("policies")}>Policies</button>
                        }
                      </div>
                      {
                        subSection === "about" && <div className="">
                          {
                            plan.about != undefined ?
                            plan.about.map(ab=>(<div className="flex items-center gap-x-4">
                              <h2 className="col"><GiSevenPointedStar /></h2>
                              <h2 className="text-sm text-justify text-slate-600 mt-3 ">{ab}</h2>
                              </div>)):null
                          }
                        </div>
                      }
                      
                      {
                        subSection === "transportation" && <div className="">
                          {
                            plan.transportation.map(ab=>(<div className="flex items-center gap-x-4">
                            <h2 className="col"><GiSevenPointedStar /></h2>
                            <h2 className="text-sm text-justify text-slate-600 mt-3 ">{ab}</h2>
                            </div>))
                          }
                        </div>
                      }
                      
                      {
                        (plan.itenary && subSection === "itinerary") &&<>
                        {
                            plan.about != undefined ?
                            plan.itenary.map(ab=>(<div className="flex items-center gap-x-4">
                              <h2 className="col"><GiSevenPointedStar /></h2>
                              <h2 className="text-sm text-justify text-slate-600 mt-3 ">{ab}</h2>
                              </div>))
                          :null}</>
                      }
                      {
                        (plan.policies && subSection === "policies") &&
                        <>
                        {
                            plan.policies != undefined ?
                            plan.policies.map((pol,ind)=>(<div className="flex items-center gap-x-4">
                                  <div dangerouslySetInnerHTML={{ __html: pol }} className="text-sm  text-justify text-slate-700"></div>
                                   <div/></div>))
                          :null
                        }
                        </>
                      }
                    </div>
                  </div>
                </section >
                </div>
                </div>
              
            </>: null}

      
    </>
  );
}




