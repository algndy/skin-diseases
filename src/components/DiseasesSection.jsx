import styles from "./DiseasesSection.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const DISEASES = [
  {
    name: "Melanocytic",
    info: "Melanocytic lesions are common and can be either benign or malignant. They arise from melanocytes, which are pigment-producing cells.",
  },
  {
    name: "Actinic keratosis",
    info: "Actinic keratosis, also known as solar keratosis, is a precancerous skin condition caused by prolonged exposure to ultraviolet (UV) radiation from the sun.",
  },
  {
    name: "Dermatofibroma",
    info: "Dermatofibroma is a benign skin lesion that usually appears as a firm nodule or bump on the skin. It is composed of fibrous tissue and often occurs on the legs.",
  },
  {
    name: "Vascular lesion",
    info: "Vascular lesions are abnormalities of blood vessels in the skin. They can appear as birthmarks, hemangiomas, or other vascular growths.",
  },
];

function DiseasesSection({ discoverRef }) {
  return (
    <section ref={discoverRef} className={styles.diseasesSection}>
      <h1>Discover Dermatology</h1>
      <div>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={true}
        >
          {DISEASES.map((disease, i) => (
            <div className={styles.card} key={i}>
              <div>
                <img src="diseases/melanocity.png" alt="homeImg.png" />
              </div>
              <div>
                <h2>{disease.name}</h2>
                <p>{disease.info}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}

export default DiseasesSection;
