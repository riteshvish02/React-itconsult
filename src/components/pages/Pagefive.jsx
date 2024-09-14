import React from 'react'

function Pagefive() {
  return (
    <>
      <div className='w-full  bg-red-300 flex h-[100vh]'>
        <div className="left p-[17vh] bg-[#F2F3F6] w-[55%] h-full">
            <h3 className='text-[2.5vh] font-medium text-blue-600'>WHY CHOOSE US</h3>
            <h1 className='text-[9vh] font-bold leading-[10vh]'>We are increasing business success</h1>
            <div className="content flex flex-wrap h-[45vh] mt-[9%] w-full ">
                <div className="elem w-[50%]">
                    <div className="top flex gap-[5%] ">
                        <div className='w-[8vh] bg-blue-600 h-[8vh] p-2 flex items-center justify-center overflow-hidden rounded-full'>
                        <img className='w-[100%] h-full   object-center object-cover ' src="/images/icons8-security-portal-50.png" alt="" />
                        </div>
                        <h2 className='text-[2.5vh] font-semibold'>Product <br /> Design</h2>
                    </div>
                    <p className='text-zinc-600 text-[2.2vh] mt-2'>Good knowledge becuase you something many times.</p>
                </div>
                <div className="elem  w-[50%]">
                    <div className="top flex gap-[5%] ">
                        <div className='w-[8vh] bg-blue-600 h-[8vh] p-2 flex items-center justify-center overflow-hidden rounded-full'>
                        <img className='w-[100%] h-full   object-center object-cover ' src="/images/icons8-security-portal-50.png" alt="" />
                        </div>
                        <h2 className='text-[2.5vh] font-semibold'>Product <br /> Design</h2>
                    </div>
                    <p className='text-zinc-600 text-[2.2vh] mt-2'>Good knowledge becuase you something many times.</p>
                </div>
                <div className="elem  w-[50%]">
                    <div className="top flex gap-[5%] ">
                        <div className='w-[8vh] bg-blue-600 h-[8vh] p-2 flex items-center justify-center overflow-hidden rounded-full'>
                        <img className='w-[100%] h-full   object-center object-cover ' src="/images/icons8-security-portal-50.png" alt="" />
                        </div>
                        <h2 className='text-[2.5vh] font-semibold'>Product <br /> Design</h2>
                    </div>
                    <p className='text-zinc-600 text-[2.2vh] mt-2'>Good knowledge becuase you something many times.</p>
                </div>
                <div className="elem  w-[50%]">
                    <div className="top flex gap-[5%] ">
                        <div className='w-[8vh] bg-blue-600 h-[8vh] p-2 flex items-center justify-center overflow-hidden rounded-full'>
                        <img className='w-[100%] h-full   object-center object-cover ' src="/images/icons8-security-portal-50.png" alt="" />
                        </div>
                        <h2 className='text-[2.5vh] font-semibold'>Product <br /> Design</h2>
                    </div>
                    <p className='text-zinc-600 text-[2.2vh] mt-2'>Good knowledge becuase you something many times.</p>
                </div>
            </div>
        </div>
        <div style={{backgroundImage:"url(public/images/bg-n1.jpg)", backgroundSize:"cover",backgroundPosition:"center"}}
         className="right w-[45%] flex items-center h-full ">
           <div className="div flex flex-col  gap-[15%] justify-end bg-[#222429] w-[45vh] h-[50vh]">
             <h2 className='text-white text-[4vh] ml-4 font-semibold'>We’re bringing latest business innovation in to the digital world</h2>
             <div className="sec w-full h-[25%] flex items-center justify-center bg-blue-600">
                <h3 className='text-white font-bold'>Best IT Service Provider.</h3>
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Pagefive
