import React from 'react'

const Pagethree = () => {
  return (
    <>
      <div className='w-full max-md:flex-col flex relative h-[175vh] lg:h-[110vh]'>
        <div style={{backgroundImage:"url(/images/icon-dots-2.png)"}} className="left relative flex items-center justify-center bg-white h-full w-[40%] max-md:w-full max-md:h-[65vh]">
            <div className="top h-[75%] max-md:h-[80%] max-md:w-[95%] w-[70%] bg-white">
                <img className='w-full h-full object-cover object-center' src="https://dev242.kodesolution.com/techon/wp-content/uploads/2024/08/ab1h1.jpg" alt="" />
            </div>
            <div className="bottom absolute w-[75%] h-[40vh] max-md:hidden rounded-[15px] bottom-0 right-[-5%] p-2 bg-white">
                <img className='w-full h-full object-cover object-center rounded-[10px]' src="https://dev242.kodesolution.com/techon/wp-content/uploads/2024/08/ab3h1.jpg" alt="" />
                <div className='w-[55%] bg-white left-[-10%] h-[60%] p-2 absolute top-[15%]'>
                    <div className='bg-[#0D6EFD] p-2 h-full w-full'>
                    <img src="" alt="" />
                    <p className='font-medium text-white'>The Best IT Service Provider</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" w-[60%] max-md:w-full max-md:h-[120vh] lg:h-full bg-[#F9EBF8] lg:p-[15vh] p-[3vh]">
            <h2 className='text-[2vh] font-semibold text-zinc-500'>ABOUT COMPANY</h2>
            <h1 className='text-[9vh] leading-[10vh] mt-2 max-md:leading-[6vh] font-bold max-md:text-[5vh]'>Your partner for <br /> software innovation</h1>
            <h3 className='text-[2.5vh]  text-zinc-500 mt-5 max-md:text-[2vh]'>Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</h3>
            <div className="elem w-full mt-10 flex gap-3 items-center max-md:gap-7">
                <img className='w-[7vh] h-[7vh] bg-blue-600' src="/images/icons8-service-64.png" alt="" />
                <div className="child flex flex-col gap-2">
                    <h4 className='font-bold text-[2.6vh] max-md:text-[2.5vh]'>End to End Development</h4>
                    <h5 className='text-[2.35vh] text-zinc-500 max-md:text-[2vh]'>Knowledge of technologies rules better than anyone which we apply in our daily work have suffered alteration</h5>
                </div>
            </div>
            <div className="elem w-full mt-10 flex gap-3 items-center max-md:gap-7">
                <img className='w-[7vh] h-[7vh] bg-blue-600' src="/images/icons8-service-64.png" alt="" />
                <div className="child flex flex-col gap-2">
                    <h4 className='font-bold text-[2.6vh] max-md:text-[2.5vh]'>End to End Development</h4>
                    <h5 className='text-[2.35vh] text-zinc-500 max-md:text-[2vh]'>Knowledge of technologies rules better than anyone which we apply in our daily work have suffered alteration</h5>
                </div>
            </div>
           
            <button className='px-[3.5vh] uppercase text-white text-[2vh] font-medium py-[1.6vh] rounded-[50px] mt-[8vh] bg-blue-600'>about us</button>
        </div>
      </div>
    </>
  )
}

export default Pagethree
