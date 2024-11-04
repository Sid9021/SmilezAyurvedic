// services.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/index"
import Footer from "../components/Footer/index"
import Contactusform from '../components/Navbar/Contactus';

export default function ServicesAll() {

  const [isSticky, setIsSticky] = useState(true);


  const [sidebarTop, setSidebarTop] = useState(115); // Initial top value, same as the navbar height

  useEffect(() => {
    const container = document.querySelector('.container'); // Get the main container
    const sidebar = document.getElementById('default-sidebar');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerBottom = container.offsetTop + container.offsetHeight;
      const sidebarHeight = sidebar.offsetHeight;

      // Check if the sidebar should stop sticking when reaching the footer
      if (scrollTop + sidebarHeight + 75 >= containerBottom) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = `${containerBottom - sidebarHeight}px`;
      } else if (scrollTop > 100) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '75px';
      } else {
        sidebar.style.position = 'absolute';
        sidebar.style.top = '115px'; // Initial top value
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [activeLink, setActiveLink] = useState(null) // State to track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link) // Update the active link when a link is clicked
  }

  const links = [
    { name: "Tibetan Marma", href: "/services-all/#Tibetan Marma" },
    { name: "Relaxation", href: "/services-all/#Relaxation" },
    { name: "Knee Pain", href: "/services-all/#Knee Pain" },
    { name: "Bone Setting / Alignment", href: "/services-all/#Bone Setting / Alignment" },
    { name: "Acupuncture", href: "/services-all/#Acupuncture" },
    { name: "Weight Reduction", href: "/services-all/#Weight Reduction" },
    { name: "Detoxification", href: "/services-all/#Detoxification" },
    { name: "Varicose Ulcer", href: "/services-all/#Varicose Ulcer" },
    { name: "Sciatica Pain", href: "/services-all/#Sciatica Pain" },
    { name: "Cervical Spondylosis", href: "/services-all/#Cervical Spondylosis" },
    { name: "Skin Treatments", href: "/services-all/#Skin Treatments" },
    { name: "Cupping Therapy", href: "/services-all/#Cupping Therapy" },
    { name: "Pain Management", href: "/services-all/#Pain Management" },
    { name: "Post Partum Care", href: "/services-all/#Post Partum Care" },
  ]


  const handleAnchorClick = (event,link) => {
    setActiveLink(link);
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    scrollToWithOffset(targetId, 80); // Scroll to the target section
  };

  const scrollToWithOffset = (targetId, offset) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = targetPosition - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  

  useEffect(() => {
    const handleLoad = () => {
      const hash = window.location.hash; // Check if there's a hash in the URL
      if (hash) {
        const targetId = hash.substring(1);
        scrollToWithOffset(targetId, 150); // Adjust scroll offset to match sidebar
      }
    };
  
    // Scroll adjustment on page load
    window.addEventListener("load", handleLoad);
  
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore our variety of treatments and health packages." />
      </Head>
      <Navbar />
      <div className='relative'>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mt-8">Our Wellness Services</h1>

          {/* <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button> */}
          <aside
            id="default-sidebar"
            className={`fixed left-0 z-40 w-64 h-screen transition-transform ${isSticky ? 'block' : 'relative'} sm:translate-x-0 hidden lg:block`}
            aria-label="Sidebar"
            style={{ top: `${isSticky ? sidebarTop : 'auto'}` }}
          >
            <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-1 font-medium">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`#${link.name}`}
                      onClick={(event) => handleAnchorClick(event, link.name)} // Handle link click
                      className={`flex items-center p-2 rounded-lg dark:text-white group ${activeLink === link.name
                        ? "bg-blue-500 text-white" // Active background color
                        : "text-gray-900 hover:bg-gray-100 bg-gray-100 dark:hover:bg-gray-700" // Default state
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:ml-[15%] lg:w-[80%]: w-full p-4">
            {/* Each card for a service */}
            <ServiceCard
              id="Tibetan Marma"
              title="Tibetan Marma"
              description="Tibetan Marma therapy focuses on stimulating the body's vital energy points, known as 'Marma,' to promote healing and well-being."
              benefits={[
                'Balances the body’s energy flow',
                'Promotes healing and well-being',
                'Reduces stress and tension',
              ]}
              packageOffers={[
                'Foot Massage',
                'Head Massage',
                'Thai Massage',
                'Full Body Marma Massage',
              ]}
              imageUrl="/images/services/Tibentan.jpg"
            />

            <ServiceCard
              id="Relaxation"
              title="Relaxation"
              description="A treatment designed to reduce stress and tension in the body and mind, using a variety of massage techniques and essential oils."
              benefits={[
                'Relieves stress and anxiety',
                'Enhances sleep quality',
                'Improves circulation and flexibility',
              ]}
              packageOffers={[
                'Abhyangam',
                'Naraga Kizhi',
                'Njavara Kizhi',
                'Shirodhara',
                'Takradhara',
              ]}
              imageUrl="/images/services/Relaxation.jpg"
            />
            <ServiceCard
              id="Knee Pain"
              title="Knee Pain"
              description="Our knee pain treatment focuses on reducing inflammation and pain using natural methods. Ideal for chronic conditions or sports injuries."
              benefits={[
                'Helps with arthritis and joint inflammation',
                'Increases knee mobility',
                'Reduces swelling and stiffness',
              ]}
              packageOffers={[
                'Abhyangam',
                'Knee Lepanam and Bandage',
                'Mudira Kizhi',
                'Dhanyamla Dhara',
                'Janu Vasti',
              ]}
              imageUrl="/images/services/Knee pain.webp"
            />
            <ServiceCard
              id="Bone Setting / Alignment"
              title="Bone Setting / Alignment"
              description="A manual therapy that realigns bones, joints, and soft tissues without surgery. Effective for musculoskeletal issues."
              benefits={[
                'Realigns bones and joints',
                'Reduces pain and improves mobility',
                'Promotes natural healing',
              ]}
              packageOffers={[
                'Sprains and strains',
                'Dislocations',
                'Fractures',
                'Joint stiffness',
                'Arthritis',
              ]}
              imageUrl="/images/services/Bone Alignment.webp"
            />
            <ServiceCard
              id="Acupuncture"
              title="Acupuncture"
              description="An ancient Chinese treatment that stimulates specific points on the body using thin needles to improve the flow of energy (Qi) and promote healing."
              benefits={[
                'Reduces chronic pain',
                'Balances energy flow',
                'Boosts immune system',
              ]}
              packageOffers={[
                'Traditional Acupuncture',
                'Cosmetic Acupuncture',
                'Gosha Acupuncture',
                'Foot Acupuncture',
              ]}
              imageUrl="/images/services/Accupunture.jpeg"
            />
            <ServiceCard
              id="Weight Reduction"
              title="Weight Reduction"
              description="A personalized treatment plan focused on weight loss, detoxification, and improving metabolism."
              benefits={[
                'Increases metabolism',
                'Supports natural fat burning',
                'Promotes healthy lifestyle habits',
              ]}
              packageOffers={[
              ]}
              imageUrl="/images/services/Weight Reduction.jpeg"
            />

            <div className='hidden lg:block'>
              <ServiceCard
                id="Detoxification"
                title="Detoxification"
                description="A natural cleansing process that removes toxins from your body, enhancing energy levels and promoting overall health."
                benefits={[
                  'Flushes out toxins',
                  'Improves digestion',
                  'Boosts energy and clarity',
                ]}
                packageOffers={[
                  'Enema + Booster Juice',
                  'Liver Pack',
                  'Cupping Therapy',
                ]}
                imageUrl="/images/services/Detox.jpg"
              />
              <ServiceCard
                id="Varicose Ulcer"
                title="Varicose Ulcer"
                description="A treatment for varicose veins and associated ulcers using natural remedies and lifestyle changes."
                benefits={[
                  'Reduces swelling and discomfort',
                  'Promotes healing of ulcers',
                  'Prevents further varicose vein damage',
                ]}
                packageOffers={[
                  'Wound Cleaning',
                  'Triphala Wash',
                  'Lepam',
                  'Bandage',
                ]}
                imageUrl="/images/services/Varicose.jpg"
              />
              <ServiceCard
                id="Sciatica Pain"
                title="Sciatica Pain (Low Backbone)"
                description="Sciatica is a condition that causes pain along the sciatic nerve, which runs from the lower back down through the legs. Our treatments focus on reducing pain and inflammation."
                benefits={[
                  'Reduces lower back pain',
                  'Alleviates pain in legs and feet',
                  'Improves posture and mobility',
                ]}
                packageOffers={[
                  'Abhyangam',
                  'Elakizhi',
                  'Dhanyamla Dhara',
                  'Kati Vasthi',
                  'Lepanam',
                ]}
                imageUrl="/images/services/Back Pain.jpg"
              />

              <ServiceCard
                id="Cervical Spondylosis"
                title="Cervical Spondylosis"
                description="A degenerative condition that affects the cervical spine (neck region). Our treatments are designed to relieve pain, stiffness, and other symptoms caused by cervical spondylosis."
                benefits={[
                  'Reduces neck pain and stiffness',
                  'Improves flexibility and range of motion',
                  'Decreases inflammation and discomfort',
                ]}
                packageOffers={[
                  'Spine Lepanam',
                  'Pizhichil',
                  'Jreeva Vasti',
                  'Naragakizhi',
                  'Bone Setting',
                ]}
                imageUrl="/images/services/Cervical.jpg"
              />
              <ServiceCard
                id="Skin Treatments"
                title="Skin Treatments"
                description="Our skin treatments are personalized to meet your specific skin needs. From acne to anti-aging, our services ensure you leave with healthier and radiant skin."
                benefits={[
                  'Improves skin tone and texture',
                  'Reduces signs of aging and acne',
                  'Brightens and detoxifies the skin',
                ]}
                packageOffers={[
                  'Pimple and Acne Treatment',
                  'Anti-Aging Treatment',
                  'De Tan',
                  'Brightening',
                  'Facials for healthy skin',
                ]}
                imageUrl="/images/services/Skin Treatment.jpg"
              />
              <ServiceCard
                id="Cupping Therapy"
                title="Cupping Therapy"
                description="A traditional therapy using suction to promote blood circulation, detoxification, and pain relief."
                benefits={[
                  'Promotes detoxification',
                  'Increases blood flow',
                  'Relieves muscle tension',
                ]}
                packageOffers={[
                  'Dry Cupping',
                  'Wet Cupping',
                  'Facial Cupping',
                  'Oil Cupping',
                  'Fire Cupping',
                ]}
                imageUrl="/images/services/Cupping.webp"
              />
              <ServiceCard
                id="Pain Management"
                title="Pain Management"
                description="Our pain management therapy offers relief from chronic pain using natural and therapeutic methods."
                benefits={[
                  'Relieves chronic pain',
                  'Improves joint mobility',
                  'Enhances quality of life',
                ]}
                packageOffers={[
                  'Abhyangam + Steam Bath',
                  'Podi Kizhi',
                  'Elakizhi',
                  'Dhanyamla Dhara',
                  'Lepanam',
                ]}
                imageUrl="/images/services/Pain Management.png"
              />
              <ServiceCard
                id="Post Partum Care"
                title="Post Partum Care"
                description="A comprehensive package that creates a nurturing environment to support new mothers physically and emotionally."
                benefits={[
                  'Supports physical recovery',
                  'Boosts energy and mood',
                  'Helps with lactation and hormone balance',
                ]}
                packageOffers={[
                  'Customized nutrition plan',
                  'Herbal support',
                  'Relaxation therapies',
                ]}
                imageUrl="/images/services/Post Partum.jpg"
              />
            </div>

            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
      <Footer />


    </>
  );
}

function ServiceCard({ id, title, description, imageUrl, benefits, packageOffers }) {
  return (
    <div id={id} className="shadow-lg rounded-xl overflow-hidden w-[90vw] border-grey border-2 flex flex-col lg:flex-row bg-gradient-to-br from-[#8a8aec] to-white hover:shadow-2xl transition-shadow duration-300 mt-12">
      {/* Image Section */}
      <div className="lg:w-[30%] w-full h-60 lg:h-auto overflow-hidden relative">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-xl lg:rounded-t-none lg:rounded-l-xl" />
      </div>

      {/* Text Section */}
      <div className="lg:w-[65%] w-full p-6 lg:p-10 flex flex-col justify-center space-y-4">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>

        {/* Benefits & Packages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Benefits Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h4 className="font-bold text-xl text-[#222e8a] mb-3">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Package Offers Card */}
          <div className="bg-white rounded-lg shadow-md p-4 h-fit w-full">
            <h4 className="font-bold text-xl text-[#222e8a] mb-3">Package Offers</h4>
            <ul className="space-y-2 list-disc list-inside text-gray-600">
              {packageOffers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <Contactusform type="Service" />
        </div>
      </div>
    </div>
  );
}
