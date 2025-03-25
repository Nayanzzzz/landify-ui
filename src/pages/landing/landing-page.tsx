import Sectoin1 from "./section-1/sectoin1"
import Section2 from "./section-2/section-2"
import Section3 from "./section-3/section-3"
import Section4 from "./section-4/section-4"
import Section5 from "./section-5/section-5"

const LandingPage = () => {
  return (
    <div className="w-screen h-screen " >
      <Sectoin1/>
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}

export default LandingPage
