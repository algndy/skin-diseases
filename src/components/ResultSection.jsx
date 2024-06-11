import styles from "./ResultSection.module.css";
const DISEASES = [
  {
    name: "Melanocytic nevus",
    info: [
      "Sun Protection: Use sunscreen, wear protective clothing, and avoid tanning beds.",
      "Know Risk Factors: Understand your melanoma risk factors.",
      "Monitor Changes: Watch for mole changes like itching or rapid growth.",
      "Healthy Lifestyle: Maintain a healthy diet and lifestyle.",
      "Educate Yourself: Stay informed about skin health.",
      "Consult Dermatologist: Schedule regular skin checks.",
    ],
  },
  {
    name: "Actinic keratosis",
    info: [
      "Sun Protection: Use sunscreen, wear protective clothing, and avoid tanning.",
      "Regular Skin Checks: Monitor skin for new growths or changes in existing spots.",
      "Dermatologist Visits: Schedule regular skin checks with a dermatologist.",
      "Moisturize: Keep skin hydrated and moisturized.",
      "Quit Smoking: If applicable, quit smoking to reduce skin damage.",
      "Protective Clothing: Wear long sleeves, pants, and hats outdoors.",
      "Educate Yourself: Learn about AK and its risk factors.",
      "Healthy Lifestyle: Maintain a balanced diet, exercise, and manage stress.",
      "Stay Hydrated: Drink plenty of water for overall skin health.",
    ],
  },
  {
    name: "Dermatofibroma",
    info: [
      "Monitor Skin Changes: Regularly check for changes in dermatofibromas.",
      "Avoid Irritation: Refrain from scratching or picking at dermatofibromas.",
      "Protective Clothing: Wear protective clothing and sunscreen.",
      "Consult a Dermatologist: Seek medical advice for painful or growing dermatofibromas.",
      "Educate Yourself: Learn about dermatofibromas and treatment options.",
      "Moisturize: Keep skin moisturized to reduce dryness.",
    ],
  },
  {
    name: "Vascular lesion",
    info: [
      "Monitor Changes: Regularly check for changes in vascular lesions.",
      "Protect from Sun: Shield lesions from direct sunlight with clothing and sunscreen.",
      "Consult Dermatologist: Seek advice for new or changing lesions, especially if they bleed or itch.",
      "Avoid Trauma: Take precautions to prevent injury to areas with lesions.",
      "Educate Yourself: Learn about vascular lesions and treatment options.",
      "Moisturize: Keep skin moisturized to reduce dryness.",
      "Monitor for Symptoms: Be aware of symptoms near lesions and report them.",
      "Maintain Healthy Lifestyle: Follow a balanced diet, exercise, and manage stress.",
    ],
  },
];

function ResultSection({
  image,
  diseasesName,
  setUploadSuccess,
  setDiseasesName,
  setImage,
  appRef,
}) {
  function resetAnswer() {
    setUploadSuccess(false);
    setImage(null);
    setDiseasesName(null);
  }
  function handleScrollTo(elemRef) {
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  function handleOnClick() {
    resetAnswer();
    handleScrollTo(appRef);
  }
  return (
    <section className={styles.resultSection}>
      <div className={styles.first}>
        {image && (
          <img
            src={image}
            alt="Uploaded"
            onLoad={() => console.log("Image loaded")}
          />
        )}
      </div>

      {diseasesName && (
        <div className={styles.second}>
          <h1>{diseasesName}</h1>
          <div>
            <h2>Some Advices</h2>
            <ol>
              {DISEASES.filter(
                (item) => item.name === diseasesName
              )[0]?.info.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>
          <button onClick={handleOnClick}>Try Again</button>
        </div>
      )}
    </section>
  );
}

export default ResultSection;
