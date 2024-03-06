"use client";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineSubject } from "react-icons/md";
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
    <div className=" px-2 py-4 relative flex justify-between">
      <div className="flex justify-between lg:px-5">
        <p className="z-10 font-medium text-[1.2rem] md:mt-2">WEBFLOW AGENCY</p>
        <MdOutlineSubject
          className="z-10 cursor-pointer text-[2.3rem] md:hidden"
          onClick={handleMenu}
        />
      </div>
      <div className={"hidden md:block " + (Menu && "me")}>
        <ul className=" list-none md:flex   pt-[25%] md:pt-3 text-center bg-slate-100 md:bg-transparent text-[gray] absolute md:relative left-0 md:right-0 lg:right-5 top-0 w-[100%] sm:w-auto h-[99vh] md:h-[2.7rem]">
          <li className="md:mr-3 cursor-pointer lg:mr-5 xl:mr-8">
            <a>Home</a>
          </li>
          <li className="mt-14 md:mt-0 md:mr-3 cursor-pointer lg:mr-5 xl:mr-8">
            <a>About</a>
          </li>
          <li className="mt-14 md:mt-0 md:mr-3 cursor-pointer lg:mr-5 xl:mr-8">
            <a>Work</a>
          </li>
          <li className="mt-14 md:mt-0 md:mr-3 cursor-pointer lg:mr-5 xl:mr-8">
            <a>Blogs</a>
          </li>
          <li className="mt-14 md:mt-0 md:mr-3 cursor-pointer lg:mr-5 xl:mr-8">
            <a>Contact</a>
          </li>
          <button className="mt-14 md:mt-0 cursor-pointer md:mr-7 text-white text-sm bg-[#265AE8] p-2 md:py-1 rounded-md">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
}

function MenuDetails() {
  return (
    <div className="text-center p-2  mt-[15%] sm:mt-[10%] lg:mt-[5%]">
      <main className="sm:px-10 lg:px-40">
        <p className="text-[0.7rem] text-[#265AE8]">#1 WEBFLOW AGENCY</p>
        <h1 className=" mt-2 text-[1.8rem] lg:px-20  lg:text-[2rem] font-bold text-slate-800">
          Transform your digital presence with our expert in{" "}
          <span className="text-[#265AE8]">Web Design</span>
        </h1>
        <p className="mt-3 text-[0.7rem] px-4 sm:text-[0.8rem] lg:px-40 xl:px-52">
          Crafting Experience, building brands - explore the artistry of Webflow
          with us.We create stunning and functional websites
        </p>
        <div className="mt-4">
          <button className=" text-white text-[0.7rem] lg:text-[0.9rem] bg-[#265AE8] p-2 rounded-md">
            Schdule Demo
          </button>
          <button className=" text-[#265AE8] ml-3 w-20 text-[0.7rem] lg:text-[0.9rem] bg-white p-2 rounded-md">
            Pricing
          </button>
        </div>
      </main>
      <section className="flex lg:px-14 sm:px-14 xl:w-[80%] xl:m-auto">
        <Image
          src="/Frame 1321319504.png"
          className="m-auto mt-5 border-4 sm:w-[18rem] rounded-md border-white"
          width={330}
          height={40}
          alt="img1"
        />
        <Image
          src="/Frame 1321319504 (1).png"
          className="m-auto mt-5 border-4 hidden sm:block sm:w-[18rem] rounded-md border-white"
          width={330}
          height={40}
          alt="img1"
        />
        <Image
          src="/Frame 1321319504 (2).png"
          className="m-auto h-[14.5rem] mt-5 border-4 hidden lg:block lg:w-[18rem] rounded-md border-white"
          width={330}
          height={40}
          alt="img1"
        />
      </section>
    </div>
  );
}
export default Homepage;
