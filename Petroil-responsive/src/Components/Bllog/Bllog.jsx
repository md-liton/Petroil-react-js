import React from 'react'
import './Bllog.css'

const Bllog = () => {
  return (
    <>
    <section className=" py-[20px] xl:py-[50px] bg-secondary_color">
        <div className="max-w-container mx-auto">
            <div className="blogs_main">
                <div className="blog_items_main md:flex md:justify-between md:gap-[30px]">
                    <div className="blog_item bg-blog_img_one bg-no-repeat bg-cover bg-center md:w-1/3 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative z-[1] after:z-[-1] mb-[15px] md:mb-[0]" >
                        <div className=" p-[20px] xl:py-[85px] xl:px-[45px]  text-center md:text-left">
                            <p className="text-white text-[25px] xl:text-[30px] font-bold text-pops xl:pr-[120px] mb-[15px] md:mb-[50px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className="py-[10px] px-[20px] text-white bg-secondary_color text-[15px] text-pops font-semibold uppercase">read more</a>
                        </div>
                    </div>
                    <div className="blog_item bg-blog_img_three bg-no-repeat bg-cover bg-center md:w-1/3 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative z-[1] after:z-[-1] mb-[15px] md:mb-[0]">
                        <div className="p-[20px] xl:py-[85px] xl:px-[45px] text-center md:text-left">
                            <p className="text-white text-[25px] xl:text-[30px] font-bold text-pops xl:pr-[120px] mb-[15px] md:mb-[50px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className="py-[10px] px-[20px] text-white bg-secondary_color text-[15px] text-pops font-semibold uppercase">read more</a>
                        </div>
                    </div>
                    <div className="blog_item bg-blog_img_two bg-no-repeat bg-cover bg-center md:w-1/3 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] relative z-[1] after:z-[-1] mb-[15px] md:mb-[0]">
                        <div className="p-[20px] xl:py-[85px] xl:px-[45px] text-center md:text-left">
                            <p className="text-white text-[25px] xl:text-[30px] font-bold text-pops xl:pr-[120px] mb-[15px] md:mb-[50px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className="py-[10px] px-[20px] text-white bg-secondary_color text-[15px] text-pops font-semibold uppercase">read more</a>
                        </div>
                    </div>
                </div>

                
                <div className="flex justify-end mt-[20px]">
                    <p className="flex gap-[10px] text-[13px] md:text-[16px] text-pops font-bold ">MORE FROM THE BLLOG 
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="black"/>
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Bllog