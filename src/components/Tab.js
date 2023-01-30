import React from "react";
import img1 from "../Image/img1.png";
import img2 from "../Image/img2.png";
import img3 from "../Image/img3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faMarker } from "@fortawesome/free-solid-svg-icons";
import { faPallet } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { NavLink } from "react-router-dom";
export default function Tab() {
  return (
    <div>
      <div className="grid md:grid-cols-1  lg:grid-cols-4 gap-6">
      
          <div className=" cursor-pointer bg-banner flex justify-center items-center md:items-center  ">
            <div className="bg-white w-[235px]  h-[140px] flex justify-center  flex-col lg:mx-[34px] items-center ">
      
              <div className="w-[58px] h-[58px] bg-banner  flex justify-center items-center rounded-full">
                <FontAwesomeIcon
                  icon={faPencil}
                  className="text-icon text-4xl "
                />
              </div>
        
              <p className="font-bold text-[21px] leading-[31.5px]">Pencils</p>
            </div>
          </div>
     

        <div className=" cursor-pointer flex justify-center  mx-7 w-[300px] ">
          <div className="bg-white w-[235px] h-[140px] my-8 flex flex-col  justify-center items-center">
            <div className="w-[58px] h-[58px] bg-banner  flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faMarker} className="text-icon text-4xl" />
            </div>
            <p className="font-bold text-[21px] leading-[31.5px]">Markers</p>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-center mx-7 w-[300px]">
          <div className="bg-white w-[235px] h-[140px] my-8 flex flex-col justify-center items-center">
            <div className="w-[58px] h-[58px] bg-banner  flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faPallet} className="text-icon text-4xl" />
            </div>
            <p className="font-bold text-[18px] leading-[31.5px]">
              Drawing Color
            </p>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-center col-span-1 mx-7 w-[300px]">
          <div className="bg-white w-[235px] my-8 flex flex-col justify-center items-center h-[140px]">
            <div className="w-[58px] h-[58px] bg-banner  flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faBook} className="text-icon text-4xl" />
            </div>
            <p className="font-bold text-[18px] leading-[31.5px]">Notebooks</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row  lg:flex w-full  h-[500px] bg-banner ">
       <div className="md:block lg:flex">
        <div className=" w-2/5 ml-12 md:w-[600px] mt-12">
          <div className="lg:w-[350px]">
            <p className="font-normal font-fontPoppins md:text-xl lg:text-2xl leading-8  ">
              Graphite Artist Quality Fine Art Drawing and Sketching Pencils
              Replaceable Nib Pencils.
            </p>
          </div>
          <ul className="list-disc uppercase font-semibold mx-4 leading-10 mb-9 lg:block ">
            <div className="md:flex">
            <li >Mechanic Pencils</li>
            <li>Architect Choice </li>
            </div>
            <div  className="md:w-1/2">
            <li>Excutive Pencils</li>
            <li>Engravable Pencils</li>
            </div>
          </ul>
          <button className="rounded uppercase bg-buttonShop font-normal text-sm leading-10  text-white px-6 py-3">
            Shop all
          </button>
        </div>

        <div className="w-3/5 mt-10 mr-12 h-[500x]">
          <div className="h-20 w-[712px] rounded-2xl border-banner mx-auto">
            <div className="w-full flex flex-row">
              <div className="font-bold text-4xl w-[200px] h-full text-text1 bg-ban flex flex-row">
                <div className="flex justify-center mx-auto">
                  <h2 className="leading-lineMedium my-3 h-14 w-[132px]">
                    25% off
                  </h2>
                </div>
              </div>
              <div className=" mx-auto flex items-center">
                <p className="banner-text ">
                  Offer Applicable on All Our Pencils
                </p>
              </div>
            </div>

            <div className="flex flex-row  h-[280px] mx-auto w-[712px] mt-10">
              <div className=" lg:w-1/3 md:w-1/2 bg-white text-center mr-5 rounded-md">
                <div className="flex flex-col items-center">
                  <img className="img-pencils" src={img1} />
                  <p className="font-semibold text-sm leading-6">
                    Aero Mechanical Pencil
                  </p>
                  <p className="font-semibold text-sm ">$99.00</p>
                </div>
              </div>
              <div className=" lg:w-1/3 md:w-1/2  text-center mr-5 bg-white rounded-md">
                <div className="flex flex-col items-center  ">
                  <img className="img-pencils" src={img2} />
                  <p className="font-semibold text-sm leading-6">
                    Castell Mechanical Pencil
                  </p>
                  <p className="font-semibold text-sm ">$75.00</p>
                </div>
              </div>
              <div className="w-1/3 bg-white text-center mr-5 ">
                <div className="flex flex-col items-center rounded-md">
                  <img className="img-pencils" src={img3} />
                  <p className="font-semibold text-sm leading-6">
                    Architect Choice Pencil
                  </p>
                  <p className="font-semibold text-sm ">$45.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center ">
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
          className="dot-slide rounded-xl mb-[90px]"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
          to={`/gallery`}
        ></NavLink>
      </div>
    </div>
  );
}
