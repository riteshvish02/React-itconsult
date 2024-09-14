import React from 'react'

const Pageone = () => {
  return (
    <>
      <div style={{backgroundImage:"url(/images/bg-n1.jpg)",backgroundPosition:"center",backgroundSize:"cover"}}
       className='page w-full h-[80vh] lg:h-[110vh] relative'>
        <div className='leftimg absolute'>
            <img src="/images/lines-1.png" alt="" />
        </div>
        <div className='img  absolute top-[50%] z-[9] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <img src="/images/tech.png" alt="" />
        </div>
        <div  className="overlay relative flex  items-center justify-center flex-col bg-[#0000008e] text-white w-full h-full">
            <h1 style={{WebkitTextStroke:"0.5px gray"}} className='absolute text-[12.5vh] lg:text-[50vh] font-bold text-[#63636331]'>EXPERT</h1>
            <h3 className='bg-[#3d3c3c40] relative z-[99] text-white lg:text-[2.5vh] font-medium '>STRATEGIC SOLUTIONS, LASTING IMPACT</h3>
            <h2 className='bg-[#36353537] relative z-[99] lg:text-[15vh] text-white text-center leading-[10vh] text-[8vh] lg:leading-[14vh] font-bold lg:font-semibold mt-3'>IT Consulting <br /> Services </h2>
            <button className='relative z-[99] text-[2.3vh] font-medium rounded-[50px] uppercase text-white mt-10 px-[4.5vh] bg-[#0D6DFA] py-[2vh]'>explore now</button>
        </div>
       </div>
    </>
  )
}

export default Pageone
