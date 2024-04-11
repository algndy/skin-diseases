import Header from "./components/Header";
import styles from "./App.module.css";
import HomeSection from "./components/HomeSection";
import DiseasesSection from "./components/DiseasesSection";
import ConsultSection from "./components/ConsultSection";
import AppSection from "./components/AppSection";
import Main from "./components/Main";
import AboutUsSection from "./components/AboutUsSection";
import Acknowledge from "./components/Acknowledge";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <>
          <HomeSection />
          <DiseasesSection />
          <ConsultSection />
          <AppSection />
          <AboutUsSection />
          <Acknowledge />
        </>
      </Main>
    </div>
  );
}

export default App;
