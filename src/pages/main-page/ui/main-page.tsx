import { About } from "src/widgets/about";
import { Contacts } from "src/widgets/contacts";
import { Intro } from "src/widgets/intro";
import { Partners } from "src/widgets/partners";
import { FeaturesList } from "src/widgets/features-list";

const MainPage = () => {
  return (
    <main>
      <Intro>
        <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2>
      </Intro>
      <FeaturesList />
      <About />
      <Partners/>
      <Contacts />
    </main>
  )
}

export default MainPage;
