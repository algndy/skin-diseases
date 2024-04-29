import styles from "./AppSection.module.css";
import successStyles from "./SuccessSection.module.css";

import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Loading from "./Loading";
import "./Loading.module.css";

function AppSection({ appRef }) {
  const fileInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState(null);
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
        setInfo(response.data["prediction"]);
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

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

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
        <div {...getRootProps()}>
          <Loading />
        </div>
      ) : uploadSuccess ? (
        <div className={successStyles.successSection}>
          <div className={successStyles.grid}>
            <div>
              {image && (
                <img src={image} alt="Uploaded" onLoad={() => console.log('Image loaded')} />
              )}
            </div>
            <div>{info && <h1>{info}</h1>}</div>
          </div>
        </div>
      ) : (
        <div {...getRootProps()}>
          <h1>
            Upload an image
            <br />
            for disease detection
          </h1>
          <button type="button" onClick={onButtonClick}>
            Upload Image
          </button>
          <input
            {...getInputProps()}
            ref={fileInputRef}
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
