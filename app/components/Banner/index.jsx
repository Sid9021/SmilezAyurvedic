import Image from "next/image";
import Contactusform from "../Navbar/Contactus";

const Banner = () => {
  return (
    <div className="lg:mx-auto lg:max-w-8xl lg:my-10 sm:py-10 lg:py-8 lg:h-full">
      <div className="flex flex-col items-center lg:items-start md:flex-row lg:justify-around relative w-full lg:w-auto">

        {/* COLUMN-1 */}
        <div id="#home-page" className="md:relative absolute top-[21%] z-[1] m-auto lg:-mx-20 lg:mt-16">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              AYURVEDIC EXCELLENCE
            </button>
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-white md:text-black">
              Revitalize your mind<br /> and body.
            </h1>
          </div>
          <div className="py-3 text-center lg:text-start">
            <Contactusform type="Banner" />
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="lg:-m-20 lg:pt-20 hidden md:block">
          <Image
            src="/images/banner/Spa.png"
            alt="hero-image"
            width={450}
            height={450}
          />
        </div>

        {/* MOBILE VIDEO */}
        <div className="block md:hidden bg-black w-full h-full relative">
          <video
            src="/videos/hero_mobile.mp4"
            autoPlay
            loop
            muted
            className="w-full opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
