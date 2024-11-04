'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const servicesData = [
  {
    id: 1,
    title: "Tibetan Marma",
    description:
      "It involves stimulating ‘Marma’ points which are special points on the body where energy flows. Manipulating these points influence the flow of energy and promotes healing.",
    imgSrc: "/images/services/Tibentan.jpg"
  },
  {
    id: 2,
    title: "Cupping Therapy",
    description:
      "It involves placing cups on the skin to create suction by heating the air inside the cup and then placing it on the skin. It can either be placed directly on the skin or can be placed to draw small amounts of blood after making small incisions in the skin to promote detoxification of blood and healing.",
    imgSrc: "/images/services/Cupping.webp"
  },
  {
    id: 3,
    title: "Acupuncture",
    description:
      "It is based on the concept of meridians, which are pathways through which energy flows. By inserting thin needles into specific points along the meridians, acupuncturists aim to restore the balance and flow of energy, thereby promoting health and well-being.",
    imgSrc: "/images/services/Accupunture.jpeg"
  },
  {
    id: 4,
    title: "Bone Setting/Alignment",
    description:
      "In bone setting, practitioners use their hands to realign bones, joints, and soft tissues to restore proper alignment and function. The goal is to relieve pain, improve mobility, and promote healing without the need for surgery or medication.",
    imgSrc: "/images/services/Bone Alignment.webp"
  },
  {
    id: 5,
    title: "More Services",
    description: "",
    imgSrc: "/images/services/yoga.jpg"
  }
]

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0])

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto bg-blue-100 mt-[50%] md:mt-[10%] lg:mt-0 shadow-lg rounded-3xl overflow-hidden">
      {/* Left side: Service List */}
      <div className="lg:w-1/3 h-full bg-blue-100 p-6">
        <h3 className="text-2xl font-semibold text-blue-700 mb-6">Our Services</h3>
        <ul className="space-y-4">
          {servicesData.map(service => (
            <>
              {service.id === 5 && (
                <div>
                  <Link href='/services-all'>
                    <button className={`cursor-pointer p-4 rounded-lg font-semibold ${selectedService.id === service.id
                      ? "bg-blue-800 text-white"
                      : "bg-white text-blue-700"
                      } w-[190px] hover:bg-blue-800 hover:text-white transition-colors`}>
                      <div className="flex items-center">
                        <span>{service.title}</span>
                        {service.id === 5 && (
                          <img src="/images/icons/rarrow.png" alt="arrow" className="w-6 h-6 ml-5" />
                        )}
                      </div>
                    </button>
                  </Link>
                </div>
              )}

              {service.id !== 5 && (
                <li
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer p-4 rounded-lg font-semibold ${selectedService.id === service.id
                    ? "bg-blue-800 text-white"
                    : "bg-white text-blue-700"
                    } hover:bg-blue-800 hover:text-white transition-colors`}
                >
                  {service.title}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>

      {/* Right side: Service Details */}
      {selectedService.id !== 5 && (
        <div className="lg:w-2/3 p-6 bg-blue-100">
          <div className="relative w-full h-64 mb-6">
            <Image
              src={selectedService.imgSrc}
              alt={selectedService.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <h3 className="text-3xl font-bold text-blue-700 mb-4">{selectedService.title}</h3>
          <p className="text-lg text-gray-700">{selectedService.description}</p>
          {selectedService.id === 4 && (
            <ul className="list-disc pl-5 mt-3">
              <li>Sprains and strains</li>
              <li>Dislocations</li>
              <li>Fractures</li>
              <li>Back and neck pain</li>
              <li>Joint stiffness</li>
              <li>Sports injuries</li>
              <li>Arthritis</li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Services
