import Contact from './client'

export async function generateMetadata() {
  return {
    title: "Contact Us | Smilez Ayurvedic Wellness Center",
    description: "Get in touch with Smilez Ayurveda for holistic wellness services and more information about our treatments.",
  }
}

export default function ContactPAGE() { 
  return(
    <div>
      <Contact/>
    </div>
  )
}
