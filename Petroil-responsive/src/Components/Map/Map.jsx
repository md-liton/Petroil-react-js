import React from 'react'

const Map = () => {
  return (
    <>
    <section>
        <iframe className="w-full h-[200px] md:h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24543.073263456914!2d90.36155453624261!3d23.877216365245474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1691078344711!5m2!1sen!2sbd">
        </iframe>
        <div className="bg-primary_color py-[15px] xl:py-[45px] md:px-[20px] xl:px-[0]">
            <div className="max-w-container mx-auto md:flex md:justify-between md:items-center text-center md:text-left">
                <h3 className="text-white text-[25px] xl:text-[36px] font-bold text-pops ">Want to join as member branch in your area?</h3>
                <button className="border py-[15px] px-[45px] text-white my-[15px] md:my-[0]">CONTACT</button>
            </div>
        </div>
        <div className="bg-yellow h-[2px]"></div>
    </section>
    </>
  )
}

export default Map