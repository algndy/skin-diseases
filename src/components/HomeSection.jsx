import styles from "./HomeSection.module.css";
function HomeSection({ homeRef }) {
  return (
    <section className={styles.homeSection} ref={homeRef}>
      <div>
        <h1>
          Caring for you &<br />
          your family
        </h1>
        <p>
          Our target help you determine
          <br />
          the stage of your skin disease
        </p>
        <button>TRY NOW</button>
      </div>
      <div>
        <img src="homeImg.png" alt="homeImg" />
      </div>
    </section>
  );
}

export default HomeSection;
