import { useState } from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";

function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: img1,
      title: "Eco-Friendly Water Bottle",
      description:
        "Stay hydrated while protecting the environment with our eco-friendly water bottle. Made from sustainable materials, it's perfect for daily use and travel.",
    },
    {
      image: img2,
      title: "Wireless Noise-Canceling Headphones",
      description:
        "Immerse yourself in high-quality sound with our wireless noise-canceling headphones. Perfect for work, travel, and relaxation, with long battery life and superior comfort.",
    },
    {
      image: img3,
      title: "Smart Fitness Watch",
      description:
        "Track your fitness goals with our smart watch. It monitors heart rate, steps, and sleep patterns while keeping you connected with notifications and reminders.",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen" id="product">
      <h1 className="pt-2 text-center font-normal text-black text-5xl mb-6 mt-12">
        Our Product
      </h1>
      <div className="carousel w-[1030px] h-[420px] rounded-lg mx-auto relative overflow-hidden">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel-item w-full flex bg-black flex-shrink-0"
            >
              <div className="w-1/2 flex justify-center items-center">
                <img
                  className="w-[300px] h-[330px] rounded-xl"
                  src={slide.image}
                  alt={slide.title}
                />
              </div>
              <div className="w-1/2 mt-20 pr-20 mb-11 text-white">
                <h1 className="mb-8 text-center font-normal text-3xl">
                  {slide.title}
                </h1>
                <p className="text-start font-light">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Fixed Position) */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={handlePrev} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;