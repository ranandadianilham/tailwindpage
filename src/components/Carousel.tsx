import type from 'react'
import React, { useState } from "react";

type CarouselProps = {
  children?: React.ReactNode 
}

export const Carousel = ({children} : CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const numChildren = (children as React.ReactNode[]).length;

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? numChildren - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % numChildren);
  };

  return (
    <div className="relative border mt-10 border-cyan-700 h-64">
      <button className="absolute left-0 top-0 text-black rounded-l-lg p-2" onClick={handlePrevClick}>&lt;</button>
      <button className="absolute right-0 top-0 text-black rounded-r-lg p-2" onClick={handleNextClick}>&gt;</button>
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}