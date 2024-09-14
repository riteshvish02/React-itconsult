import React from 'react'
const Pagetwo = () => {
  return (
    <>
      <div style={{backgroundImage:"url(/images/pattern-shape-1.png)"}} className=' w-full h-[150vh] lg:h-[100vh] bg-[#0D0D0D]'>
            <div className='overlay  pt-10 w-full h-full bg-[#0c0c0cb5] '>
                <h2 className='text-center text-white lg:text-[2.3vh] font-medium'>OUR SERVICES</h2>
                <h1 className='text-center text-[4.3vh] lg:text-[8vh] mt-3 text-white lg:leading-[9vh] font-bold  lg:font-medium'>We offer a wide <br className='lg:hidden' /> variety <br className='hidden lg:block' /> of it services</h1>
                <div className='container flex max-md:flex-col gap-10 lg:flex w-[85%] h-[100vh] lg:h-[43vh] items-center justify-between mt-[10vh]  m-auto'>
                    <div style={{backgroundImage:"url(/images/bg-n1.jpg)",backgroundSize:"cover",backgroundPosition:"center"}} className="elem lg:w-[32%] w-full h-[50vh]  lg:h-full flex flex-col text-white justify-between p-[2vh] bg-red-600">
                        <h2 className='text-[3vh] font-bold text-white'>Technology <br />
                        Solution</h2>
                        <div className="cont flex w-full h-[10vh] lg:h-[13vh] items-center justify-between bg-[#0E0F11]">
                            <div className="imgg h-full bg-blue-600 w-[15vh] flex items-center justify-center">
                                <img className='bg-blue-600 object-cover object-center h-[5vh] w-[5vh]' src="/images/icons8-growth-50.png" alt="" />
                            </div>
                            <p className='lg:text-[2.3vh] text-[1.8vh] ml-3'>Developing a comprehensive IT strategy that aligns.</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:"url(/images/bg-n1.jpg)",backgroundSize:"cover",backgroundPosition:"center"}} className="elem lg:w-[32%]  w-full h-[50vh]  lg:h-full flex flex-col text-white justify-between p-[2vh] bg-red-600">
                        <h2 className='text-[3vh] font-bold text-white'>Technology <br />
                        Solution</h2>
                        <div className="cont flex w-full h-[10vh] lg:h-[13vh] items-center justify-between bg-[#0E0F11]">
                            <div className="imgg h-full bg-blue-600 w-[15vh] flex items-center justify-center">
                                <img className='bg-blue-600 object-cover object-center h-[5vh] w-[5vh]' src="/images/icons8-service-64.png" alt="" />
                            </div>
                            <p className='text-[1.8vh] lg:text-[2.3vh] ml-3'>Developing a comprehensive IT strategy that aligns.</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:"url(/images/bg-n1.jpg)",backgroundSize:"cover",backgroundPosition:"center"}} className="elem lg:w-[32%] w-full h-[50vh]  lg:h-full flex flex-col text-white justify-between p-[2vh] bg-red-600">
                        <h2 className='text-[3vh] font-bold text-white'>Technology <br />
                        Solution</h2>
                        <div className="cont flex w-full h-[10vh] lg:h-[13vh] items-center justify-between bg-[#0E0F11]">
                            <div className="imgg h-full bg-blue-600 w-[15vh] flex items-center justify-center">
                                <img className='bg-blue-600 object-cover object-center h-[5vh] w-[5vh]' src="/images/icons8-security-portal-50.png" alt="" />
                            </div>
                            <p className='text-[1.8vh] lg:text-[2.3vh] ml-3'>Developing a comprehensive IT strategy that aligns.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Pagetwo
