import LeftContainer from "./left/left-containder"
import RightContainer from "./right/right-container"


const Container = () => {
  return (
    <div className="pt-15 pb-10 md:flex-row flex flex-col md:gap-5 gap-12">
      <LeftContainer/>
      <RightContainer/>
    </div>
  )
}

export default Container
