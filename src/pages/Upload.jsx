import { useState } from "react";
import Tesseract from "tesseract.js";

const Upload = () => {
  //   const [selectedFile, setSelectedFile] = useState(null);
  //   const [preview, setPreview] = useState(null);

  //   // Handle file selection
  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file && file.type.substr(0, 5) === "image") {
  //       setSelectedFile(file);
  //       setPreview(URL.createObjectURL(file));
  //     } else {
  //       setSelectedFile(null);
  //       setPreview(null);
  //     }
  //   };

  // const [ocrText, setOcrText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (event) => {
  //   const file = event.target.files[0];
  //   setIsLoading(true);

  //   Tesseract.recognize(file, "eng").then(({ data: { text } }) => {
  //     setOcrText(text);
  //     setIsLoading(false);
  //   });
  // };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [ocrText, setOcrText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleOCR = () => {
    if (selectedImage) {
      setIsProcessing(true);
      Tesseract.recognize(selectedImage, "eng", { logger: (m) => console.log(m) }).then(({ data: { text } }) => {
        setOcrText(text);
        setIsProcessing(false);
      });
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} />
      {preview && (
        <div>
          <img src={preview} alt="Preview" width="200" />
        </div>
      )}
      <div>
        <input type="file" onChange={handleChange} accept="image/*, .pdf" />
        <button onChange={handleChange}>Apply Ocr</button>
        {isLoading && <p>Loading...</p>}
        <p>OCR Text: {ocrText}</p>
      </div> */}

      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: "500px" }} />
        </div>
      )}

      <button onClick={handleOCR} disabled={!selectedImage}>
        Process OCR
      </button>
      {isProcessing && <p>Processing...</p>}
      {ocrText && <p>OCR Result: {ocrText}</p>}
    </div>
  );
};

export default Upload;
