import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <section className="about py-14">
        <div className="max-w-container mx-auto">
            <div className="about_main md:flex text-center md:text-left md:px-[20px] xl:px-[0]">
                <div className="about_let w-full md:w-1/2">
                    <h2 className=" font-bold text-3xl md:text-5xl md:pr-[50px] lg:pr-[200px] xl:pr-[320px] md:leading-[72px] px-[12px] md:px-[0]">The biggest
                        supplier on
                        the country</h2>
                </div>
                <div className="about_right w-full md:w-1/2 text-p text-xl py-[20px] lg:py-[60px] font-medium">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About