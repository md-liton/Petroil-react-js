import React from 'react'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

     const bar = ()=>{

         let bar = document.querySelector('.bar')
         let xbar=document.querySelector('.xbar')
         let hidden = document.querySelector('.menu')
         
         bar.classList.add('hidden')
         xbar.classList.remove('hidden')
         hidden.classList.remove('hidden')
     }

     const xbar = ()=>{
         let bar = document.querySelector('.bar')
         let xbar=document.querySelector('.xbar')
         let hidden = document.querySelector('.menu')

             xbar.classList.add('hidden')
             bar.classList.remove('hidden')
             hidden.classList.add('hidden')
     }

    



  return (
    <>
    <nav className="bg-primary_color py-[20px] text-white font-bold">
        <div className="max-w-container mx-auto">
            <div className="nav_main md:flex items-center px-[15px] xl:px-[0]">

                <div className="logo md:w-1/4 flex justify-between items-center">
                    <a href="">
                        <svg width="192" height="45" viewBox="0 0 192 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.184 9.8C41.512 9.8 43.54 10.184 45.268 10.952C46.996 11.72 48.328 12.824 49.264 14.264C50.2 15.704 50.668 17.384 50.668 19.304C50.668 21.224 50.2 22.904 49.264 24.344C48.328 25.784 46.996 26.888 45.268 27.656C43.54 28.424 41.512 28.808 39.184 28.808H35.548V35H27.052V9.8H39.184ZM38.644 22.256C39.796 22.256 40.66 22.004 41.236 21.5C41.812 20.972 42.1 20.24 42.1 19.304C42.1 18.368 41.812 17.648 41.236 17.144C40.66 16.616 39.796 16.352 38.644 16.352H35.548V22.256H38.644ZM74.4063 28.592V35H53.4543V9.8H73.9383V16.208H61.8063V19.16H72.4623V25.28H61.8063V28.592H74.4063ZM83.149 16.388H75.769V9.8H99.025V16.388H91.645V35H83.149V16.388ZM112.032 28.664H109.728V35H101.232V9.8H113.364C115.692 9.8 117.72 10.184 119.448 10.952C121.176 11.72 122.508 12.824 123.444 14.264C124.38 15.704 124.848 17.384 124.848 19.304C124.848 21.104 124.44 22.676 123.624 24.02C122.808 25.364 121.632 26.432 120.096 27.224L125.388 35H116.316L112.032 28.664ZM116.28 19.304C116.28 18.368 115.992 17.648 115.416 17.144C114.84 16.616 113.976 16.352 112.824 16.352H109.728V22.256H112.824C113.976 22.256 114.84 22.004 115.416 21.5C115.992 20.972 116.28 20.24 116.28 19.304ZM141.268 35.576C138.556 35.576 136.12 35.012 133.96 33.884C131.8 32.756 130.108 31.196 128.884 29.204C127.66 27.188 127.048 24.92 127.048 22.4C127.048 19.88 127.66 17.624 128.884 15.632C130.108 13.616 131.8 12.044 133.96 10.916C136.12 9.788 138.556 9.224 141.268 9.224C143.98 9.224 146.416 9.788 148.576 10.916C150.736 12.044 152.428 13.616 153.652 15.632C154.876 17.624 155.488 19.88 155.488 22.4C155.488 24.92 154.876 27.188 153.652 29.204C152.428 31.196 150.736 32.756 148.576 33.884C146.416 35.012 143.98 35.576 141.268 35.576ZM141.268 28.7C142.324 28.7 143.272 28.448 144.112 27.944C144.976 27.416 145.66 26.684 146.164 25.748C146.668 24.788 146.92 23.672 146.92 22.4C146.92 21.128 146.668 20.024 146.164 19.088C145.66 18.128 144.976 17.396 144.112 16.892C143.272 16.364 142.324 16.1 141.268 16.1C140.212 16.1 139.252 16.364 138.388 16.892C137.548 17.396 136.876 18.128 136.372 19.088C135.868 20.024 135.616 21.128 135.616 22.4C135.616 23.672 135.868 24.788 136.372 25.748C136.876 26.684 137.548 27.416 138.388 27.944C139.252 28.448 140.212 28.7 141.268 28.7ZM158.572 9.8H167.068V35H158.572V9.8ZM171.157 9.8H179.653V28.412H191.029V35H171.157V9.8Z" fill="white"/>
                            <path d="M1.31817 30.7647C-3.34564 22.9885 5.42342 9.58824 11.1708 5C16.4051 9.23529 25.3341 22.2952 20.7159 30.7647C17.6367 36.4118 4.70501 36.4118 1.31817 30.7647Z" fill="white"/>
                            <path d="M8.67767 38.6353C2.74191 28.7854 13.9025 11.8118 21.2174 6C27.8792 11.3647 39.2434 27.9073 33.3657 38.6353C29.4467 45.7882 12.9882 45.7882 8.67767 38.6353Z" fill="white" stroke="#F40404" stroke-width="2"/>
                        </svg>
                    </a>
                    <div className="bar md:hidden text-[35px]" onClick={bar}>
                       <BiMenu/>
                    </div>
                    <div className="xbar hidden text-[35px]" onClick={xbar}>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className="menu md:w-3/4 hidden md:block">
                    <ul className="md:flex justify-end items-center md:gap-[15px]">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Gallery</a>
                        </li>
                        <li className="mb-[20px] md:mb-[0]">
                            <a href="">Blog</a>
                        </li>
                        <li >
                            <a className="border px-[30px] py-[15px]" href="">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar