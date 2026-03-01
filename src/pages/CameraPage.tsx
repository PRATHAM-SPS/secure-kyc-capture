import { CameraView } from "secure-kyc-capture";
import "secure-kyc-capture/dist/style.css";
import { useNavigate } from "react-router-dom";
import type { CaptureData } from "../types/capture";

export default function CameraPage() {
  const navigate = useNavigate();

  const handleCapture = (data: CaptureData) => {
    navigate("/preview", { state: data });
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CameraView onCapture={handleCapture} />
    </div>
  );
}