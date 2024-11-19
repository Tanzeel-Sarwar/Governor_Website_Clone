import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20 bg-zinc-100 w-full'>
            <div className='m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                    <div className='text-zinc-800 '>
                        <h1 className='text-xl font-bold'>Core Courses</h1>
                        <div className='flex flex-col text-sm md:text-base mt-5 gap-3'>
                            <a href="">Programming Fundamentals</a>
                            <a href="">Web2 Using NextJS</a>
                            <a href="">Earn as You Learn</a>
                        </div>
                    </div>

                    <div className='text-zinc-800 '>
                        <h1 className='text-xl font-bold'>Advanced Courses</h1>
                        <div className='flex flex-col text-sm md:text-base mt-5 gap-3 '>
                            <a href="">Web 3 and Metaverse</a>
                            <a href="">Cloud-Native Computing</a>
                            <a href="">Artificial Intelligence (AI) and Deep Learning</a>
                            <a href="">Ambient Computing and IoT</a>
                            <a href="">Genomics and Bioinformatics</a>
                            <a href="">Network Programmability and Automation</a>
                        </div>
                    </div>


                    <div className='text-zinc-800 '>
                        <h1 className='text-xl font-bold'>Social Links</h1>
                        <div className='my-5 gap-3 flex md:text-sm'>
                            <a href="#facebook" className='flex h-8 w-8 items-center justify-center text-white'>

                            <img src="/image/Facebook.png" alt="Twitter" className='rounded-2xl'/>

                            </a>
                            <a href="#Youtube" className='flex h-8 w-8 items-center justify-center text-white'>

                            <img src="/image/Youtube.png" alt="Twitter" className='rounded-2xl'/>

                            </a>
                            <a href="#Twitter" className='flex h-8 w-8 items-center justify-center text-white'>

                                <img src="/image/Twitter.png" alt="Twitter" className='rounded-2xl'/>

                            </a>

                            <a href="#Instagram" className='flex h-8 w-8 items-center justify-center bg-instagram-gradient text-white'>

                                <img src="/image/Instagram.jpeg" alt="Instagram" className='rounded-2xl'/>

                            </a>

                            <a href="#Tiktok" className='flex h-8 w-8 items-center justify-center text-white'>
                                <img src="/image/tiktok.png" alt="Instagram"  className='rounded-2xl'/>
                            </a>
                        </div>

                        <a className='mt-4 flex items-center py-1 text-main underline' href="mailto:education@governorsindh.com" >

                            <div className='mr-3 h-6 w-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>

                            education@governorsindh.com
                        </a>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer