import React from "react";
import img10 from "../Image/img10.png";
import img5 from "../Image/img5.png";
import img7 from "../Image/img7.png";
import img8 from "../Image/img8.png";
import img9 from "../Image/img9.png";
import img4 from "../Image/img4.png";
import img6 from "../Image/img6.png";
import { NavLink } from "react-router-dom";
import "../App.css";
export default function Gallery() {
  return (
    <div>
      {" "}
      <div className=" mt-[100px] w-full">
        <h2 className="font-bold text-[45px] flex justify-center uppercase mb-10">
          Packer pen Gallery
        </h2>

        <div className=" grid md:grid-cols-2 lg:grid-cols-9  gap-3 mx-auto w-full">
           
     
          <div className=" md:col-start-1 md:col-end-2 md:h-[505px] lg:col-start-1 lg:col-span-2 lg:mt-10 block">
            <img src={img7} className="w-[291px] h-[185px] object-cover mb-3 rounded-lg" />
            <img src={img6} className="w-[291px] h-[308px] object-cover rounded-lg" />
          </div>
          <div className="lg:col-start-3 lg:col-end-8 lg:block">
            <div>
            <div className="md:col-span-1">
            <img src={img9} className=" lg:w-[732px] md:h-[505px] lg:h-[284px] object-cover mb-3 rounded-lg" />
            </div>
            <div className="md:col-start-1">
            <img src={img5} className="md:w-full md:h-[505px] lg:w-[732px] lg:h-[295px] object-cover rounded-lg" />
            </div>
          
            </div>
          </div>
          <div className="md:col-span-2 md:w-full lg:col-start-8 lg:col-end-10 lg:block lg:mt-10">
            <img src={img8} className="md:w-[732px] md:h-[505px] lg:w-[291px] lg:h-[119px] object-cover rounded-lg mb-3" />
             <div className="md:flex lg:block md:h-full">
            <img src={img10} className="md:w-[280px] md:mr-3 md:h-[230px]  lg:w-[291px] h-[230px]  object-cover mb-3 rounded-lg " />
            <img src={img4} className=" md:w-[280px] md:h-[230px] lg:w-[291px] lg:h-[138px] object-cover rounded-lg" />
            </div>
        
          </div>
        </div>
        <div className="flex justify-center mb-[90px]">
          <NavLink
            className="dot-slide rounded-xl"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
              };
            }}
            to={`/tab`}
          ></NavLink>
          <NavLink
            className="dot-slide rounded-xl"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
              };
            }}
            to={`/gallery`}
          ></NavLink>
        </div>
      </div>
    </div>
  );
}
