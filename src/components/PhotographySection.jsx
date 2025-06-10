import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photoData = {
  Nature: [
    "/photos/nature1.jpg",
    "/photos/nature2.jpg",
    "/photos/nature3.jpg"
  ],
  Portraits: [
    "/photos/portrait1.jpg",
    "/photos/portrait2.jpg"
  ],
  Cityscapes: [
    "/photos/city1.jpg",
    "/photos/city2.jpg"
  ]
};

const PhotographySection = () => {
  const [activeCategory, setActiveCategory] = useState("Nature");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <section
      id="photography"
      className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white py-20 px-8 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Photography</h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {Object.keys(photoData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border transition 
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {photoData[activeCategory].map((src, index) => (
              <div key={index} className="px-4">
                <img
                  src={src}
                  alt={`${activeCategory} ${index + 1}`}
                  className="rounded-lg shadow-lg max-h-[500px] object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
