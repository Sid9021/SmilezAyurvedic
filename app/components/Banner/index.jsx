import Image from "next/image";
import Contactusform from "../Navbar/Contactus";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="lg:mx-auto lg:max-w-8xl lg:my-10 sm:py-10 lg:py-8 lg:h-screen">
      <div className="flex lg:mt-12 justify-center items-center -mt-6 relative lg:justify-around mx-auto">

        {/* COLUMN-1 */}

        <div id="#home-page" className="absolute top-[20%] left-[5%] lg:relative z-[1] mx-auto lg:-mx-20 ">
          <div className="py-3 text-center lg:text-start">
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              AYURVEDIC EXCELLENCE
            </button>
          </div>
          <div className="py-3 text-center lg:text-start ">
            <h1 className="text-6xl lg:text-80xl font-bold text-white lg:text-black">
              Revitalize your mind<br/> and body.
            </h1>

          </div>
          <div className="py-3 text-center lg:text-start ">
            <Contactusform type="Banner"/>
     

          </div>

        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            src="/images/banner/Spa.png"
            alt="hero-image"
            width={450}
            height={450}
          />
        </div>

        {/* MOBILE VIDEO */}
        <div className="block md:hidden mt-6 bg-black w-full h-full relative">
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
