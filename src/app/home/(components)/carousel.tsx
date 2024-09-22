'use client'

import { ComponentProps, MouseEvent, ReactElement, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselProps extends ComponentProps<'div'> {
  children: ReactElement;
}

export function Carousel ({children, ...props}: CarouselProps) {

  const carousel = useRef<HTMLDivElement>(null);

  const [ballsState, setBallsState] = useState(0)

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(carousel.current) {
      const width = carousel.current.scrollLeft -= carousel.current.offsetWidth 
      const index =  Math.round(width / carousel.current.offsetWidth)

      if(Math.sign(index) === -1) {
        setBallsState(2)

        console.log(Math.sign(index))
        
        carousel.current.scrollLeft = carousel.current.offsetWidth * 2
        
        return
      }

      console.log(index)

      setBallsState(index)
    }
  };

  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if(carousel.current) {
      const width = carousel.current.scrollLeft += carousel.current.offsetWidth 
      const index =  Math.round(width / carousel.current.offsetWidth)
  
      if(index > children.props.children.length - 1) {
        setBallsState(0)

        carousel.current.scrollLeft = 0
        return
      }

      setBallsState(index)
    }
  }

  return (
    <div {...props} className="flex flex-col items-center justify-center gap-8 py-12 bg-brown400 w-full rounded-lg relative">
      <button className="absolute left-10" onClick={handleLeftClick}>
        <FaChevronLeft className="size-8 fill-white"/>
      </button>
      <button className="absolute right-10" onClick={handleRightClick}>
        <FaChevronRight className="size-8 fill-white"/>
      </button>
      <div ref={carousel} className="flex w-full overflow-auto overflow-x-hidden scroll-smooth">
        <div className="min-w-full">
          {children}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        {Array.from({ length: children.props.children.length }).map((_, i) => {
          return (
            <div key={i} className={`h-3 w-3 rounded-[100%] ${i === ballsState ? `bg-brown500` : `bg-gray600`}`}></div>
          )
        })
        }
      </div>
    </div>
  );
}
