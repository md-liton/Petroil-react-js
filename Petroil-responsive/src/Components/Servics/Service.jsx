import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <>
    <section>
        <div className="service_main ">
            <div className="service_item md:flex md:pl-[20px] xl:pl-[0]">
                <div className="w-full text-center md:text-left md:w-1/2 xl:py-[100px] xl:pl-[100px]">
                    <h2 className="text-[30px] md:text-[45px] lg:text-[64px] font-bold">Our Services</h2>
                    <p className="text-pops md:text-xl text-p xl:pr-[300px] mb-[10px] md:mb-[0]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div className="w-full md:w-1/2 bg-imgOne bg-no-repeat bg-cover bg-center  after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative xl:px-[60px] p-[20px] xl:py-[120px] z-[1] after:z-[-1] mb-[15px] md:mb-[0]">
                    <h3 className="text-white text-pops text-[20px] md:text-[32px] font-bold ">Modern natural oil and gas refineries.</h3>
                    <button className="py-[10px] px-[15px] md:py-[14px] md:px-[30px] bg-primary_color text-white mt-[25px]">LERN MORE</button>
                </div>
            </div>


            <div className="service_item md:flex">
                <div className="w-full md:w-1/2 bg-imgTwo bg-no-repeat bg-cover bg-center  after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative p-[20px] xl:px-[60px] xl:py-[120px] z-[1] after:z-[-1] mb-[15px] md:mb-[0]">
                    <h3 className="text-white text-pops text-[20px] md:text-[32px] font-bold ">Supply of national industries.</h3>
                    <button className="py-[10px] px-[15px] md:py-[14px] md:px-[30px] bg-primary_color text-white mt-[25px]">LERN MORE</button>
                </div>
                <div className="w-full md:w-1/2 bg-imgThree bg-no-repeat bg-cover bg-center  after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative p-[20px] xl:px-[60px] xl:py-[120px] z-[1] after:z-[-1] mb-[15px] md:mb-[0]">
                    <h3 className="text-white text-pops text-[20px] md:text-[32px] font-bold ">Supply of national industries.</h3>
                    <button className="py-[10px] px-[15px] md:py-[14px] md:px-[30px] bg-primary_color text-white mt-[25px]">LERN MORE</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service