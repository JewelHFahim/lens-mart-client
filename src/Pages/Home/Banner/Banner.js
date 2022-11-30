import React from "react";
import './Banner.css'
import img1 from "../../../Assets/slider/slide9.jpg";
import img3 from "../../../Assets/slider/slide7.jpg";
import img4 from "../../../Assets/slider/slide8.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full my-10">

        {/* slide-1 */}


        <div id="slide1" className="carousel-item relative w-full">
          <img style={{ height: "400px" }} src={img3} className="w-full" alt=""/>
          <div className="absolute transform -translate-y-1/2 right-2/3 top-1/2 text-center pb-10" >
            <h2 className="text-4xl font-bold text-base-100 my-4">Capture the Savings</h2>
            <h2 className="text-3xl text-base-100 mb-3">on select Nikon lenses</h2>
            <h2 className="text-lg mb-3 text-orange-700">BE INSPIRED. INSPIRE OTHERS.</h2>
            <button className="btn btn-outline rounded-3xl bordr border-white text-white mt-2">Read More</button>
          </div>
          <div className="absolute flex justify-between transform  right-5 top-2/3">
            <a href="#slide3" className="btn btn-outline text-white btn-circle mr-2">❮</a>
            <a href="#slide2" className="btn btn-outline text-white btn-circle">❯</a>
          </div>
        </div>


        {/* slide-2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="" />
          <div className="absolute transform -translate-y-1/2 left-2/3 top-1/2 text-center pb-10" >
            <h2 className="text-3xl text-base-100">Z 5</h2>
            <h2 className="text-3xl text-base-100">24-200mm lens kit</h2>
            <h2 className="text-4xl font-bold text-base-100 my-4">SAVE $500</h2>
            <p className="text-lg text-orange-700">LOWEST PRICE</p>
            <button className="btn btn-outline rounded-3xl bordr border-white text-white mt-2">Read More</button>
          </div>
          <div className="absolute flex justify-between transform  right-5 top-2/3">
            <a href="#slide1" className="btn btn-outline text-white btn-circle mr-2">❮</a>
            <a href="#slide3" className="btn btn-outline text-white btn-circle">❯</a>
          </div>
        </div>
       

      {/* slide-3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img4} className="w-full" alt=""/>
          <div className="absolute transform -translate-y-1/2 right-2/3 top-1/2 text-center pb-10" >
            <h2 className="text-4xl font-bold text-base-100 my-4">SAVE UP TO $500</h2>
            <h2 className="text-3xl text-base-100 mb-3">on select Nikon lenses</h2>
            <h2 className="text-lg mb-3 text-orange-700">LOWEST PRICE OF THE SEASON</h2>
            <button className="btn btn-outline rounded-3xl bordr border-white text-white mt-2">Read More</button>
          </div>
          <div className="absolute flex justify-between transform  right-5 top-2/3">
            <a href="#slide2" className="btn btn-outline text-white btn-circle mr-2">❮</a>
            <a href="#slide1" className="btn btn-outline text-white btn-circle">❯</a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Banner;
