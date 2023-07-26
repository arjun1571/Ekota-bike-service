import React from "react";
import img1 from "../../../asset/bike1.png";
import img2 from "../../../asset/bike2.png";
import img3 from "../../../asset/bike3.png";

const Banner = () => {
  return (
    <div className="lg:flex bg-[#264653] lg:p-20 md:p-10 p-5 items-center text-white lg:mt-5 rounded">
      <div className="w-3/4 ">
        <p className="lg:mb-5 md:mb-4 mb-2">
          Computer-controlled digital transistorized with electronic advance
        </p>
        <h1 className="font-bold text-4xl lg:mb-5 md:mb-4 mb-2">
          Providing the highest service is our first responsibility
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="btn btn-warning mt-5">Warning</button>
      </div>
      <div className="lg:w-2/4">
        <div className="carousel mt-10 mb-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img alt="" src={img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img alt="" src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img alt="" src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
