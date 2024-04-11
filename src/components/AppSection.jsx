import styles from "./AppSection.module.css";
function AppSection({ appRef }) {
  return (
    <section ref={appRef} className={styles.appSection}>
      <h1>Check Your Self & Your Patients Easly</h1>
      <div>
        <h1>
          Upload an image
          <br />
          for disease detection
        </h1>
        <button>Upload Image</button>
        <p>or drop a file</p>
      </div>
    </section>
  );
}

export default AppSection;
