'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Minus } from 'lucide-react'



export default function ImageSlider() {
  const slides = [
    { img1: "/image/Slideshow1.jpg", img2: "/image/Slideshow2.jpg" },
    { img1: "/image/Slideshow3.jpg", img2: "/image/Slideshow4.jpg" },
    { img1: "/image/Slideshow5.jpg", img2: "/image/Slideshow6.jpg" },
    { img1: "/image/Slideshow7.jpg", img2: "/image/Slideshow8.jpg" },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(()  => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full mt-10 max-w-[1300px] mx-auto overflow-hidden" role="region" aria-label="Image Slider">
      <div 
        className="flex transition-transform duration-1000 ease-in-out" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <img
              src={slide.img1}
              alt={`Slide Image ${index * 2 + 1}`}
              className="w-full sm:w-[45%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800"
            />
            <img
              src={slide.img2}
              alt={`Slide Image ${index * 2 + 2}`}
              className="w-full sm:w-[45%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800"
            />
          </div>
        ))} 
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
            <Button

            key={index}
            onClick={() => goToSlide(index)}
            variant={currentSlide === index ? "default" : "outline"}
            size="sm"
            className="w-8 h-8 p-0"
            aria-label={`Go to slide ${index + 1}`}
                >
                    <Minus />
            </Button>
       
        ))}
      </div>

      <br /><hr className='border-gray-400' />
    </div>
  )
}