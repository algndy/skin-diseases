import Header from "./components/Header";
import styles from "./App.module.css";
import HomeSection from "./components/HomeSection";
import DiseasesSection from "./components/DiseasesSection";
import ConsultSection from "./components/ConsultSection";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomeSection />
      <DiseasesSection />
      <ConsultSection />
    </div>
  );
}

export default App;
