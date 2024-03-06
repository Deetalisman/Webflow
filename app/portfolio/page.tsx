import Image from "next/image";
import { MdAirlineStops } from "react-icons/md";
function Portfolio() {
  return (
    <div className="mt-5 bg-black text-white pt-5 lg:p-10 xl:px-32">
      <main className="px-5 sm:w-[70%] lg:w-[60%]">
        <p className="text-slate-500 text-[0.9rem] lg:text-[1rem]">
          Our Portfolio
        </p>
        <p className="mt-2 font-semibold text-lg tracking-wide">
          Building creative conversion web design and development
        </p>
        <button className="bg-[blue] mt-2 p-2 text-[0.7rem] rounded-lg">
          View All Projects
        </button>
      </main>
      <section className="px-5 mt-7 flex justify-between flex-wrap">
        <div className="mb-5 w-[48%] border-b-2 border-white">
          <Image src="/Component 1.png" width={320} height={40} alt="img5" />
          <p className="mt-2 text-[0.9rem]">E Commerce Web Development</p>
          <p className="text-[0.7rem] mt-2 text-[gray]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            architecto eaque qui aut asperiores perferendis ex quia. Odit est
            omnis per
          </p>
          <div className="flex">
            <p className="text-[0.7rem] mt-2 text-[gray] mb-2">View Project</p>
            <MdAirlineStops className="mt-2 ml-2" />
          </div>
        </div>
        <div className="mb-5 w-[48%] border-b-2 border-white">
          <Image
            src="/Component 1 (1).png"
            width={320}
            height={40}
            alt="img5"
          />
          <p className="mt-2 text-[0.9rem]">Web Flow/SEO Integration</p>
          <p className="text-[0.7rem] mt-2 text-[gray]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            architecto eaque qui aut asperiores perferendis ex quia. Odit est
            omnis per
          </p>
          <div className="flex">
            <p className="text-[0.7rem] mt-2 text-[gray] mb-2">View Project</p>
            <MdAirlineStops className="mt-2 ml-2" />
          </div>
        </div>
        <div className="mb-5 w-[48%] border-b-2 border-white">
          <Image
            src="/Component 1 (2).png"
            width={320}
            height={40}
            alt="img5"
          />
          <p className="mt-2 text-[0.9rem]">E Commerce Web Development</p>
          <p className="text-[0.7rem] mt-2 text-[gray]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            architecto eaque qui aut asperiores perferendis ex quia. Odit est
            omnis per
          </p>
          <div className="flex">
            <p className="text-[0.7rem] mt-2 text-[gray] mb-2">View Project</p>
            <MdAirlineStops className="mt-2 ml-2" />
          </div>
        </div>
        <div className="mb-5 w-[48%] border-b-2 border-white">
          <Image
            src="/Component 1 (3).png"
            width={320}
            height={40}
            alt="img5"
          />
          <p className="mt-2 text-[0.9rem]">Web Flow/SEO Integration</p>
          <p className="text-[0.7rem] mt-2 text-[gray]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            architecto eaque qui aut asperiores perferendis ex quia. Odit est
            omnis per
          </p>
          <div className="flex">
            <p className="text-[0.7rem] mt-2 text-[gray] mb-2">View Project</p>
            <MdAirlineStops className="mt-2 ml-2" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
