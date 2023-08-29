import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <section className="bg-banner  bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative  after:z-[-1] z-[1]">
        <div className="max-w-container mx-auto">
            <div className="banner_main py-[70px] lg:px-[20px] text-center lg:text-left lg:py-60 ">
                <h1 className="text-white text-[35px]  lg:text-[64px] font-bold lg:pr-[200px] xl:pr-[500px]  md:pb-7 z-[1]">We exist since 1975 on the oil and gas industry.</h1>
                <button className="py-3 px-10 bg-primary_color text-white mt-[10px] md:md-[0]">LEARN MORE</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner