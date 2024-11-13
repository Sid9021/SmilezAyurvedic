// app/page.js or app/page.jsx

import Banner from "./components/Banner/index"
import Aboutus from "./components/Aboutus/index"
import Dedicated from "./components/Dedicated/index"
import Digital from "./components/Digital/index"
import Beliefs from "./components/Beliefs/index"
import Wework from "./components/Wework/index"
import Ourteam from "./components/Ourteam/index"
import Manage from "./components/Manage/index"
import FAQ from "./components/FAQ/index"
import Testimonials from "./components/Testimonials/index"
import Articles from "./components/Articles/index"
import Joinus from "./components/Joinus/index"
import Insta from "./components/Insta/index"
import Services from "./components/Services/page"
import Featured from "./components/Featured"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"

export async function generateMetadata() {
  return {
    title: 'Smilez Wellness Ayurvedic Center',
    description: 'Smilez Ayurveda, set in the peaceful greenery of Thottakattukara, Aluva, is a wellness sanctuary offering Ayurvedic treatments, educational workshops, and comfortable stays for holistic healing and renewal.',
  }
}

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner />
      <Aboutus />
      <Services/>
      {/* <Dedicated /> */}
      {/* <Digital /> */}
      {/* <Beliefs /> */}
      {/* <Wework />
      <Ourteam /> */}
      {/* <Featured /> */}
      {/* <Manage /> */}
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Articles /> */}
      {/* <Joinus /> */}
      {/* <Insta /> */}
      <Footer/>
    </main>
  )
}
