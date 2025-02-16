import { About } from "src/widgets/about";
import { Intro } from "src/widgets/intro";
import { Services } from "src/widgets/services";

const MainPage = () => {
  return (
    <main>
      <Intro />
      <Services />
      <About />
    </main>
  )
}

export default MainPage;
