import Header from "./components/Header";
import styles from "./App.module.css";
import HomeSection from "./components/HomeSection";
import DiseasesSection from "./components/DiseasesSection";
import ConsultSection from "./components/ConsultSection";
import AppSection from "./components/AppSection";
import Main from "./components/Main";
import AboutUsSection from "./components/AboutUsSection";
import Acknowledge from "./components/Acknowledge";
import { useRef } from "react";
function App() {
  const discover = useRef(null);
  const app = useRef(null);
  const aboutUs = useRef(null);

  return (
    <div className={styles.container}>
      <Header appRef={app} aboutUsRef={aboutUs} discoverRef={discover} />
      <Main>
        <>
          <HomeSection />
          <DiseasesSection discoverRef={discover} />
          <ConsultSection />
          <AppSection appRef={app} />
          <AboutUsSection aboutUsRef={aboutUs} />
          <Acknowledge />
        </>
      </Main>
    </div>
  );
}

export default App;
