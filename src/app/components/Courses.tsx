import React from 'react'

const Courses = () => {
    return (
 
        <div className='m-auto xl:w-[1300px] lg:w-[90%] w-[95%] mt-10 mb-10'>

            <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>

                <div className='grid sm:grid-cols-4 grid-cols-1  gap-5 mt-10'>
                    
                    <a href="#Programming Fundamentals" className='hover:scale-105 duration-200 transition all'>
                        <div className=' overflow-hidden h-fit shadow-xl rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                            <div>
                                <img src="/image/Course1.jpg" alt="Programming Fundamentals"/>
                            </div>
                            <div className='px-4 flex justify-center items-center   h-[70px]'>
                                <p>Programming Fundamentals</p>
                            </div>
                        </div>
                    </a>

                    <a href="#Web2 Using NextJS" className='hover:scale-105 duration-200 transition all'>
                        <div className=' overflow-hidden h-fit  box_shadow shadow-xl rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                            <div>
                                <img src="/image/Course2.jpg" alt="Programming Fundamentals" />
                            </div>
                            <div className='px-4 flex justify-center items-center   h-[70px]'>
                                <p>Web2 Using NextJS</p>
                            </div>
                        </div>
                    </a>

                    <a href="#Earn as You Learn" className='hover:scale-105 duration-200 transition all'>
                        <div className=' overflow-hidden h-fit shadow-xl rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold '>
                            <div>
                                <img src="/image/Course3.jpg" alt="Programming Fundamentals" />
                            </div>
                            <div className='px-4 flex justify-center items-center   h-[70px]'>
                                <p>Earn as You Learn</p>
                            </div>
                        </div>
                    </a>


                </div>
        </div>

    )
}

export default Courses