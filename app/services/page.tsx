import Image from "next/image";
import img3 from "./Frame 1321318020.png";
function Service() {
  return (
    <div className="p-2">
      <Donework />
      <Ourservice />
    </div>
  );
}

function Donework() {
  return (
    <div className="mt-9 text-center sm:px-16">
      <p className="text-slate-500 text-[0.7rem] sm:text-[0.9rem]">
        CLIENT WE HAVE WORK WITH
      </p>
      <p className="mt-2 font-semibold text-lg">
        Top Start-up builders trust us with their development
      </p>
      <Image
        src={img3}
        className="text-center lg:w-[70%] m-auto mt-2"
        width={370}
        height={90}
        alt="img2"
      />
    </div>
  );
}
function Ourservice() {
  return (
    <div className="mt-10 px-3 lg:px-24">
      <p className="text-slate-500 text-[0.7rem] sm:text-[0.9rem]">
        OUR SERVICES
      </p>
      <p className="mt-2 font-semibold text-lg">
        We provide professional webflow developments
      </p>
      <p className="text-slate-500 text-[0.7rem] mt-2 sm:text-[0.8rem] sm:w-[60%]">
        Our mission is to create a supportive environment where individual with
        a shared enthusiasm can come
      </p>
      <div className="mt-3 xl:px-32">
        <div className="flex justify-between">
          <div className="w-[47%] rounded-lg">
            <Image
              src="/Frame 1321319428.png"
              className="text-center sm:w-[100%] mt-2  rounded-tl-md rounded-tr-md"
              width={200}
              height={60}
              alt="img3"
            />
            <main className="p-2 sm:px-5 w-[12.5rem] sm:w-[100%] sm:pt-5 sm:h-[8rem] py-4 bg-[#F7F7F7] rounded-br-md rounded-bl-lg">
              <p className="text-[0.8rem] font-medium">/1 Web Design</p>
              <p className="text-[0.6rem] mt-1 text-slate-500 sm:text-[0.8rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                ullam, laboriosam temporibus.
              </p>
            </main>
          </div>
          <div className="w-[47%]  rounded-lg">
            <Image
              src="/Frame 1321319428 (1).png"
              className="text-center sm:w-[100%] mt-2 rounded-tl-md rounded-tr-md"
              width={200}
              height={60}
              alt="img4"
            />
            <main className="sm:w-[100%] sm:px-5 sm:pt-5 sm:h-[8rem] p-2 w-[12.5rem] py-4 bg-[#F7F7F7] rounded-br-md rounded-bl-lg">
              <p className="text-[0.8rem] font-medium">/2 Web Development</p>
              <p className="text-[0.6rem] mt-1 text-slate-500 sm:text-[0.8rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                ullam, laboriosam temporibus.
              </p>
            </main>
          </div>
        </div>
        <div className="flex mt-4">
          <Image
            src="/Frame 1321319431.png"
            className="text-center sm:w-[60%]  rounded-tl-md rounded-bl-md"
            width={200}
            height={60}
            alt="img6"
          />
          <main className="p-2 pt-9 sm:pt-16 lg:pt-28 lg:px-8 pl-3 text-white w-[50%] bg-[blue] rounded-br-md rounded-tr-lg">
            <p className="text-[0.8rem] font-medium">/3 SEO Integration</p>
            <p className="text-[0.6rem] mt-1  sm:text-[0.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              ullam, laboriosam temporibus.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Service;
