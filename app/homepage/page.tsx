"use client";
import { useState } from "react";
import Image from "next/image";
function Homepage() {
  return (
    <div className="h-[100vh] bg-[#ECF1FD]">
      <Menubar />
      <MenuDetails />
    </div>
  );
}

function Menubar() {
  const [Menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu((Menu) => !Menu);
    console.log(Menu);
  }
  return (
    <div className=" px-2 py-4 relative  flex justify-between">
      <p className="z-10 font-medium">WEBFLOW AGENCY</p>
      <p className="z-10 cursor-pointer" onClick={handleMenu}>
        Click
      </p>
      <div className={"hidden " + (Menu && "me")}>
        <ul className=" list-none  pt-[25%] text-center bg-slate-100 text-[gray] absolute left-0 top-0 w-[100%] h-[94vh]">
          <li>
            <a>Home</a>
          </li>
          <li className="mt-14">
            <a>About</a>
          </li>
          <li className="mt-14">
            <a>Work</a>
          </li>
          <li className="mt-14">
            <a>Blogs</a>
          </li>
          <li className="mt-14">
            <a>Contact</a>
          </li>
          <button className="mt-14 text-white text-sm bg-[#265AE8] p-2 rounded-md">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
}

function MenuDetails() {
  return (
    <div className="text-center p-2 mt-[17%]">
      <p className="text-[0.7rem] text-[#265AE8]">#1 WEBFLOW AGENCY</p>
      <h1 className=" mt-2 text-[1.5rem] font-bold text-slate-800">
        Transform your digital presence with our expert in{" "}
        <span className="text-[#265AE8]">Web Design</span>
      </h1>
      <p className="mt-3 text-[0.7rem] px-4">
        Crafting Experience, building brands - explore the artistry of Webflow
        with us.We create stunning and functional websites
      </p>
      <div className="mt-4">
        <button className=" text-white text-[0.7rem] bg-[#265AE8] p-2 rounded-md">
          Schdule Demo
        </button>
        <button className=" text-[#265AE8] ml-3 w-20 text-[0.7rem] bg-white p-2 rounded-md">
          Pricing
        </button>
      </div>
      <Image
        src="/Frame 1321319504.png"
        className="w-[90%] m-auto mt-5 border-4 rounded-md border-white"
        width={100}
        height={40}
        alt="img1"
      />
    </div>
  );
}
export default Homepage;
