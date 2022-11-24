import React from "react";
import detailslens from '../../../Assets/detailslens.png';
import { FaCameraRetro } from "react-icons/fa";


const DetaisInfo = () => {
  return (
    <div>
      <div className="hero min-h-screen p-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={detailslens}
            className="max-w-sm rounded-lg w-1/2"
            alt=""
          />
          <div className="w-1/2 text-neutral">
            <h1 className="text-4xl font-bold">One lens. So many possibilities.</h1>
            <p className="py-3">
            An immensely versatile all-in-one zoom that’s ready to capture all the beauty you encounter on your next trek.
            </p>

            <div className="flex items-center">
            <FaCameraRetro className="text-secondary text-6xl m-2" />
            <div>
            <h2 className="text-lg font-semibold my-1">The Shots</h2>
            <p>At just 570 g, the compact NIKKOR Z 24-200mm f/4-6.3 VR is the perfect grab and go lens for all-day versatility and convenience.</p>
            </div>
            </div>
            
            <div className="flex items-center my-4">
            <FaCameraRetro className="text-secondary text-6xl m-2" />
            <div>
            <h2 className="text-lg font-semibold my-1">DX Crop Mode</h2>
            <p>The already impressive 200mm reach of the NIKKOR Z 24-200mm f/4-6.3 VR can be effectively extended to an amazing 300mm </p>
            </div>
            </div>

            <div className="flex items-center mb-4">
            <FaCameraRetro className="text-secondary text-6xl m-2" />
            <div>
            <h2 className="text-lg font-semibold my-1">Outstanding Optics</h2>
            <p>The NIKKOR Z 24-200mm f/4-6.3 VR is loaded with advanced Nikon lens technologies to capture photos and videos</p>
            </div>
            </div>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaisInfo;
