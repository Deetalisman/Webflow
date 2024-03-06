import Image from "next/image";
import Homepage from "./homepage/page";
import Service from "./services/page";
import Startup from "./startup/page";
import Testimonial from "./testimonial/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <main>
      <Homepage />
      <Service />
      <Startup />
      <Testimonial />
      <Portfolio />
    </main>
  );
}
