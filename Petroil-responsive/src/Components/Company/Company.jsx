import React from 'react'
import './Company.css'

const Company = () => {
  return (
    <>
    <section className="py-[60px] bg-shadow_color">
        <div className="max-w-container mx-auto">
            <div className="company_main md:flex">
                <div className="company_left p-[20px] lg:py-[50px] lg:px-[35px] xl:py-[100px] xl:px-[75px] bg-primary_color w-full md:w-[30%]">
                    <h3 className="text-white text-[20px] md:text-[30px] xl:text-[36px] font-bold text-pops">Learn more about our company</h3>
                </div>
                <div className="company_right w-full md:w-[70%] bg-companyImg bg-cover bg-no-repeat bg-center flex justify-center items-center py-[50px] px-[20px] md:py-[0] md:px-[0]">
                    <button className="  py-[12px] px-[30px] bg-white text-pops font-semibold text-[16px] text-primary_color">LERN MORE</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Company