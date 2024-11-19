import { ChevronDown } from 'lucide-react'

const Navbar = () => {
    return (
        <header className="bg-[#044e83] w-100% m-auto flex h-16 items-center justify-between md:h-20 lg:w-[100%]  top-0  bg-main backdrop-blur-3xl print:hidden">
            <div className="sticky top-0  w-full bg-main backdrop-blur-3xl print:hidden">
                <div className="m-auto flex h-16  items-center justify-between md:h-20 lg:w-[90%] ">

                    {/* Logo */}
                    <div className="ml-6 h-8 w-[230px] z-40">
                        <a href="" className=" sm:mt-20 sm:w-[80px] md:w-[90px] mt-14 w-[70px]">
                            <img loading="lazy" src="image/Logo.png" alt="Logo"/>
                        </a>
                    </div>

                    {/* Subtitle */}
                    <div className="stroke-black tracking-tight drop-shadow-{100px} font-roboto ml-24  text-[24px] text-nowrap subpixel-antialiased font-bold text_shadow text-[#b9d8f3] ">
                        <h1 id="mainHeading" className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">Tuition Free Education Program on Latest Technologies</h1>
                        <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">Tuition Free Program</h1>
                    </div>

                    {/* Nav Link */}
                    <ul className="flex  w-[100%] text-base font-normal text-white">
                        <a href="" className=" ml-24 mr-[7%] text-[15px]">Home</a>
                        <a href="#Apply" className="mr-[7%] text-[15px] ">Apply</a>
                        <a href="#Jobs" className="mr-[7%] text-[15px] ">Jobs</a>
                        <a href="#Result" className="mr-[7%] text-[15px]">Result</a>
                        <span>
                            <a href="#Courses" className="flex absolute text-[15px]">Courses
                                <svg className=" h-5 w-5 text-white ml-2 mt-1">
                                    <ChevronDown
                                        size={15} />
                                </svg>
                            </a>
                        </span>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Navbar
