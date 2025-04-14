import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <div className="custom-dots-container">
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button className="dot"></button>
    )
  };

  return (
    <div id="hero" className="flex justify-center items-center w-full min-h-screen pt-[20px]">
      <div className="w-[90vw] max-w-[1200px] min-h-[520px] relative overflow-hidden">
        <Slider {...settings} className="w-full h-[510px] relative">
          {[image1, image2, image3, image4].map((img, index) => (
            <div key={index} className="h-[520px] flex justify-center items-center relative">
              <img className="object-cover w-full h-full" src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;