const HeroSection = () => {
    return (
        <main className="flex ">

          <div className=" absolute bg-zinc-100 bg-opacity-80 h-full w-full -z-10">
            <img id="bgHouse" src="/image/bg_house.jpg" alt="Governor House" />
            </div>

            <div className=" absolute bg-zinc-100 bg-opacity-80 h-full w-full -z-10">
            </div>

            {/* Left Side */}
            <div className=" z-50 m-auto mt-6 block w-[95%] items-center   justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px] ">
                <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10">
                    <div>
                        <h1 className="text-[#044e83] whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl font-sans">Governor Sindh</h1>

                        <h1 className="text-[#044e83] whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">Kamran Khan Tessori</h1>

                        <h1 className="text-[rgb(46,182,232)] mt-5 whitespace-nowrap text-center text-[1.5rem] font-black leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] ">Certified Cloud <br /> Applied Generative Ai <br />Engineer (GenEng)</h1>

                        <p className="text-[#044e83] my-5 whitespace-nowrap text-center text-[1.25rem] font-black text-main sm:text-2xl md:text-left">Earn upto $5000 / Month</p>

                        <p className="text-[#044e83] my-5 w-full text-center text-[1.25rem] font-extrabold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">Now admissions are open in Hyderabad</p>

                        <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
                            <a className="w-full md:w-auto" href="/Apply">
                                <button className="bg-[#044e83] w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">Apply Now</button>
                            </a>

                            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                                <div className="text-[#044e83]  flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                                    <div className="w-40 font-extrabold">562,143</div>
                                </div>
                                <div className="text-[#044e83] text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm">Accepted Application</div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Right Side */}
                <div className=" relative mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
                    <div className="mr-0 md: ml-40 min-w-[500px] lg:w-[600px]">
                        <img id="governorimg" src="image/Governor.png" alt="Governor" />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HeroSection
