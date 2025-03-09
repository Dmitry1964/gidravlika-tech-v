import { About } from "src/widgets/about";
import { Contacts } from "src/widgets/contacts";
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
      <Contacts />
    </main>
  )
}

export default MainPage;
