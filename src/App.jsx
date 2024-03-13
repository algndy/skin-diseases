import Header from "./components/Header";
import styles from "./App.module.css";
import HomeSection from "./components/HomeSection";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomeSection />
    </div>
  );
}

export default App;
