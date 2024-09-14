import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='parentnav w-full h-[15vh] flex bg-white lg:h-[18vh]'>
      <div className='leftnav hidden w-[20%] h-full bg-white lg:flex items-center justify-center '>
        <img className='w-[80%]' src="/images/logo-wide.png" alt="" />
      </div>
      <div className='rightnav w-[100%] h-full bg-green-300 lg:w-[80%]'>
        <div className='top hidden h-[40%] w-full bg-[#0F0F0F] items-center text-[2.2vh] px-[3vh] text-white  justify-between lg:flex'>
          <div className="right flex gap-5">
            <h3><i class="ri-map-pin-fill"></i> Lorem ipsum dolor</h3>
            <h3><i class="ri-mail-fill"></i> Lorem ipsum dolor</h3>
          </div>
          <div className="left flex text-[3vh] gap-4">
              <i class="ri-twitter-fill"></i>
              <i class="ri-youtube-fill"></i>
              <i class="ri-linkedin-fill"></i>
              <i class="ri-instagram-line"></i>
          </div>
        </div>
        <div className="bottom w-full flex items-center justify-between bg-white px-[3vh] h-full lg:h-[60%] ">
          <div className="left hidden lg:flex text-[2.5vh] font-medium gap-10 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Home</Link>
          </div>
          <div className="left  w-[50%] h-[100%] items-center flex lg:hidden">
              <img className='w-[30vh]' src="/images/logo-wide.png" alt="" />
          </div>
          <i className="text-3xl text-zinc-700 ri-menu-2-line  lg:hidden"></i>
          <div className="right hidden lg:flex items-center text-[3vh] text-[0e0f11] gap-4">
            <i class="ri-search-line"></i>
            <div  className='w-[1.2px] h-[5vh] bg-zinc-600'></div>
            <i class="ri-shopping-cart-line"></i>
            <div className='subright flex items-center gap-2'>
            <i className="text-white px-2 py-1 rounded-full  bg-slate-600 ri-phone-fill"></i>
             <div className='flex flex-col justify-center'>
              <h2 className='text-[2.2vh] text-slate-600'>call anytime</h2>
              <h1 className='text-[2.5vh] font-medium'>+88 017 500 500 88</h1>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default Nav
