import React from 'react'

const AdvancedCourses = () => {
  return (
    <div className='m-auto mt-10 mb-10 xl:w-[1300px] lg:w-[90%] w-[95%]'>

        <h1 className='text-2xl text-center font-extrabold mt-10 lg:text-4xl sm:text-4xl sm:text-left text-main'>Advanced Courses</h1>

        <div className='grid grids-col-1 sm:grid-cols-4 gap-5 mt-10'>
            <a href="#Artificial Intelligence" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/4.jpg" alt="Artificial Intelligence" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Artificial Intelligence</p>
                    </div>
                </div>
            </a>

            <a href="#Web 3 and Metaverse" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/5.jpg" alt="Web 3 and Metaverse" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Web 3 and Metaverse</p>
                    </div>
                </div>
            </a>

            <a href="#Cloud-Native Computing" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/6.jpg" alt="Cloud-Native Computing" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Cloud-Native Computing</p>
                    </div>
                </div>
            </a>

            <a href="#Ambient Computing and IoT" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/7.jpg" alt="Ambient Computing and IoT" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Ambient Computing and IoT</p>
                    </div>
                </div>
            </a>

            <a href="#Genomics and Bioinformatics" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/8.jpg" alt="Genomics and Bioinformatics" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Genomics and Bioinformatics</p>
                    </div>
                </div>
            </a>

            <a href="#Network Programmability and Automation" className='hover:scale-105 transition-all duration-200'>
                <div className='overflow-hidden shadow-xl h-fit rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 box-shadow text-lg font-bold'>
                    <div>
                        <img src="/image/9.jpg" alt="Network Programmability and Automation" />
                    </div>
                    <div className='px-4 flex justify-center items-center h-[70px]'>
                        <p>Network Programmability and Automation</p>
                    </div>
                </div>
            </a>

        </div>

    </div>
  )}

export default AdvancedCourses