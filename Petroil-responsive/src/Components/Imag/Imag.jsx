import React from 'react'
import './Imag.css'
import Img1 from '../../Images/img-1.jpg'
import Img2 from '../../Images/img-2.jpg'
import Img3 from '../../Images/img-3.jpg'
import Img4 from '../../Images/img-4.jpg'

const Imag = () => {
  return (
    <>
    <section className="md:flex md:justify-between md:gap-[15px] md:py-[15px]">

        <div className='img_left md:flex md:justify-end md:gap-[15px]'>
            <div className="img_item mb-[10px] md:mb-[0] ">
                <img src={Img4} alt="img"/>
            </div>
            <div className="img_item mb-[10px] md:mb-[0]">
                <img src={Img3} alt="img"/>
            </div>
        </div>

        <div className='img_right md:flex md:justify-end md:gap-[15px]'>
            <div className="img_item mb-[10px] md:mb-[0]">
                <img src={Img2} alt="img"/>
            </div>
            <div className="img_item mb-[10px] md:mb-[0]">
                <img src={Img1} alt="img"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Imag