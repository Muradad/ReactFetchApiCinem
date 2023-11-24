import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            url: 'https://media.gettyimages.com/id/1068477222/photo/azerbaijan-baku-city-skyline.jpg?s=612x612&w=0&k=20&c=xoL6zA7VwL3zcrvlpzXSUTh-p4pyiqJvzg8zp-fXZvE=',
        },
        {
            url: 'https://media.gettyimages.com/id/1208458380/photo/downtown-baku-azerbaijan-at-sunset.jpg?s=612x612&w=0&k=20&c=WhyVYTGMOZ21gktYdkDID5cHFSAXw5PaQTgSzgXf5ts=',
        },
        {
            url: 'https://media.gettyimages.com/id/171283286/photo/shirvan-shakirs-palace.jpg?s=612x612&w=0&k=20&c=FbSBl1QxA42PB_uacsgQcKKgLX_SyYGh7oCU3AHRmtI=',
        },
        {
            url: 'https://media.gettyimages.com/id/1311737764/photo/flame-towers-in-baku-at-dusk.jpg?s=612x612&w=0&k=20&c=51oR-jtlwO3V0PtVlPWooF902S0Ol5SVhAiscgvAev8=',
        },
    ];

    const handleSlideClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
        
            <div className="max-w-[1400] h-56 w-full m-auto relative">
                <div
                    style={{
                        backgroundImage: `url(${slides[currentSlide].url})`,
                    }}
                    className="w-full h-[650px]  bg-center bg-cover duration-500"
                  
                ></div>
            </div>

            <div className="flex justify-center px-2 absolute top-[70%] left-[10%]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`text-2xl cursor-pointer ${index === currentSlide ? 'text-white' : ''}`}
                        onClick={() => handleSlideClick(index)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Slider;
