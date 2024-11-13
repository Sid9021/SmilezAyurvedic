import Services from './client'

export async function generateMetadata() {
  return {
    title: "Our Services | Smilez Ayurvedic Wellness Center",
    description: "Explore our holistic wellness services at Smilez Ayurveda, including weight reduction, marma therapy, and more, designed to promote healing and rejuvenation.",
  }
}

export default function ServicesPAGE() { 
  return(
    <div>
      <Services/>
    </div>
  )
}
