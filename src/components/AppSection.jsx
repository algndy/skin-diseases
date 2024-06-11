import styles from "./AppSection.module.css";
import successStyles from "./SuccessSection.module.css";
import { useState } from "react";
//import { useRef} from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Loading from "./Loading";
import ResultSection from "./ResultSection";

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

function AppSection({ appRef }) {
  // const fileInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [diseasesName, setDiseasesName] = useState(null);
  console.log(image);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setImage(URL.createObjectURL(file));

    axios
      .post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data["prediction"]);
        setLoading(false);
        setUploadSuccess(true);
        setDiseasesName(response.data["prediction"]);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  // const onButtonClick = () => {
  //   fileInputRef.current.click();
  // };

  const onFileChange = (event) => {
    if (event.target.files.length > 0) {
      setLoading(true);
      onDrop([event.target.files[0]]);
    }
  };

  return (
    <section ref={appRef} className={styles.appSection}>
      <h1>Check Your Self & Your Patients Easly</h1>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : uploadSuccess ? (
        <ResultSection
          image={image}
          diseasesName={diseasesName}
          setUploadSuccess={setUploadSuccess}
          setImage={setImage}
          setDiseasesName={setDiseasesName}
          appRef={appRef}
        />
      ) : (
        <div className={styles.uploadContainer} {...getRootProps()}>
          <h1>
            Upload an image
            <br />
            for disease detection
          </h1>
          <button type="button" /*onClick={onButtonClick}*/>
            Upload Image
          </button>
          <input
            {...getInputProps()}
            /*ref={fileInputRef}*/
            style={{ display: "none" }}
            onChange={onFileChange}
          />
          <p>or drop a file</p>
        </div>
      )}
    </section>
  );
}

export default AppSection;
