import Image from "next/image";
function Testimonial() {
  return (
    <div className="mt-7 ">
      <main className="px-2">
        <p className="text-slate-500 text-[0.8rem]">CLIENT TESTIMONIAL</p>
        <p className="mt-2 font-semibold text-lg">
          Trusted by worldwide largest companies
        </p>
      </main>
      <section className="bg-[#F7F7F7] px-2 pt-2 flex mt-5 overflow-auto bigger">
        <div className="flex mb-4 big w-[100%]">
          <aside className="w-[15rem]">
            <Image
              src="/Frame 1321319438.png"
              className="w-[100%] h-[18rem]"
              width={100}
              height={40}
              alt="img3"
            />
            <div className="bg-white text-center p-2 py-4">
              <p className="text-[0.9rem]">Bello Samuel</p>
              <p className="text-[0.6rem] text-[gray]">CEO APPLE</p>
            </div>
          </aside>
          <aside className="bg-[blue] w-[19rem] h-[22.2rem] text-[0.9rem] rounded-tr-lg rounded-br-lg text-white p-5 pt-24">
            Working with agency was a game-changer for our brand.Their
            unparalleled creativity and attention to detail transformed our
            digital presence.The new website not only looks stunning but alos
            delivers exceptional performance.Highly recommended
          </aside>
        </div>
        <div className="flex big w-[100%] ml-2">
          <aside className="w-[15rem]">
            <Image
              src="/Frame 1321319438 (1).png"
              className="w-[100%] h-[18rem]"
              width={100}
              height={40}
              alt="img3"
            />
            <div className="bg-white text-center p-2 py-4">
              <p className="text-[0.9rem]">Donald Joseph</p>
              <p className="text-[0.6rem] text-[gray]">Product Manager</p>
            </div>
          </aside>
          <aside className="bg-[blue] w-[19rem] h-[22.2rem] text-[0.9rem] rounded-tr-lg rounded-br-lg text-white p-5 pt-24">
            Working with agency was a game-changer for our brand.Their
            unparalleled creativity and attention to detail transformed our
            digital presence.The new website not only looks stunning but alos
            delivers exceptional performance.Highly recommended
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
