import Container from "./components/container/container"
import Navbar from "./components/navbar/navbar"


const Sectoin1 = () => {
  return (
    <div className="bg-[url('/background.png')] bg-no-repeat bg-cover px-10 md:px-20 w-full">
      <Navbar/>
      <Container/>
    </div>
  )
}

export default Sectoin1
