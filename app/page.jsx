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
