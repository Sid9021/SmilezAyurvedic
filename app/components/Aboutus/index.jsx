import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

const Aboutdata = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Discover the essence of Smilez Ayurveda, where ancient traditions meet modern wellness.",
    link: "Learn more"
  },
  {
    heading: "Our Services.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Explore our range of holistic treatments designed to rejuvenate your mind, body, and spirit.",
    link: "View services"
  },
  {
    heading: "Our Works.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "See how we’ve transformed lives with our bespoke wellness programs.",
    link: "See our work"
  }
]

const Aboutus = () => {
  return (
    <section id="aboutus-section" className="relative bg-lightgrey py-12 lg:py-16 my-16 rounded-3xl lg:overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 opacity-30 z-0 h-[65vh] lg:h-auto"></div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-10 ">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="decorative dots"
          className="absolute bottom-1 -left-20 opacity-50"
        />
        <div className="text-right lg:mb-16">
          <h3 className="text-lg tracking-widest text-center lg:text-right text-blue font-semibold">
            ABOUT US
          </h3>
          <h4 className="text-4xl lg:text-6xl font-bold text-center lg:text-right text-darkblue leading-tight mb-5">
            Know more about us.
          </h4>
        </div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={item.imgSrc}
                alt={`${item.heading} image`}
                width={100}
                height={100}
                className="mb-5 mx-auto"
              />
              <h4 className="text-3xl font-semibold text-center text-navyblue mb-5">
                {item.heading}
              </h4>
              <p className="text-lg font-light text-center text-gray-600 mb-5">
                {item.paragraph}
              </p>
              <div className="text-center">
                <Link href="#" className="text-lg font-medium text-blue hover:text-navyblue transition-colors">
                  {item.link}
                  <ChevronRightIcon width={20} height={20} className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col w-full h-[300px] mx-auto lg:mt-24">
          <Image
            src="/images/aboutus/lobby.jpg"
            alt="man icon"
            width={480}
            height={480}
            className="absolute top-[70px] hidden lg:block left-0 rounded transform scale-110"
          />
          <div className="relative bg-white p-8 rounded-3xl shadow-xl max-w-2xl ml-auto">
            <h3 className="text-2xl font-medium text-darkblue mb-4 text-center lg:text-left">
              Smilez Ayurveda: A Sanctuary of Wellness
            </h3>
            <p className="text-lg font-light text-gray-700">
              Nestled in the serene surroundings of Thottakattukara, Aluva, Smilez Ayurveda stands as a beacon of holistic wellness. Spread across an expansive area, this wellness sanctuary offers rejuvenating treatments and comfortable stay facilities for patients seeking healing and renewal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
