import { About } from "src/widgets/about";
import { Intro } from "src/widgets/intro";
import { Partners } from "src/widgets/partners";
import { Services } from "src/widgets/services";

const MainPage = () => {
  return (
    <main>
      <Intro />
      <Services />
      <About />
      <Partners/>
    </main>
  )
}

export default MainPage;
