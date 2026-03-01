# Secure KYC Capture -- Example App

<p align="left">
<img src="https://raw.githubusercontent.com/PRATHAM-SPS/secure-kyc-capture/main/src/assets/logo.svg" alt="Secure KYC Capture Logo" height="100"/>
</p>

This repository contains a full working **React + TypeScript** example
demonstrating how to integrate **secure-kyc-capture** into a real-world
web project.

The library provides intelligent document auto-detection, AI sharpening,
and real-time quality feedback --- all processed locally in the browser.

------------------------------------------------------------------------



## 📦 Main Library (NPM)

📦 NPM Package:\
https://www.npmjs.com/package/secure-kyc-capture

------------------------------------------------------------------------

## ✨ Key Features

-    Intelligent Auto-Capture\
-    AI Post-Capture Sharpening\
-    Real-Time Quality Feedback (Sharpness, Glare, Size)\
-    Fully Local Processing (TensorFlow.js -- COCO SSD)\
-    Mobile Optimized (1080p ideal)\
-    Zero Backend Required

------------------------------------------------------------------------

## 📦 Installation

Clone this example project:

``` bash
git clone https://github.com/PRATHAM-SPS/secure-kyc-capture.git
cd secure-kyc-capture
npm install
```

Install the main library (if using separately in another project):

``` bash
npm install secure-kyc-capture
```

Run the app:

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🧠 How It Works

1.  User opens camera page
2.  Document is automatically detected
3.  Capture is triggered
4.  App navigates to preview screen
5.  User can retake or approve

------------------------------------------------------------------------

## 🛠️ Usage Example

### CameraPage.tsx

``` tsx
import { CameraView } from "secure-kyc-capture";
import "secure-kyc-capture/dist/style.css";
import { useNavigate } from "react-router-dom";

export default function CameraPage() {
  const navigate = useNavigate();

  const handleCapture = (data) => {
    navigate("/preview", { state: data });
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CameraView onCapture={handleCapture} />
    </div>
  );
}
```

### PreviewPage.tsx

``` tsx
import { useLocation, useNavigate } from "react-router-dom";

export default function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) return <div>No image captured</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <img src={data.image} alt="Captured" width="300" />
      <p>Type: {data.docType}</p>
      <p>Confidence: {(data.confidence * 100).toFixed(2)}%</p>

      <button onClick={() => navigate("/")}>
        Retake
      </button>
    </div>
  );
}
```

------------------------------------------------------------------------

## 📱 Mobile Usage

-   Works best at 1080p resolution\
-   Requires HTTPS in production\
-   Camera permission required

------------------------------------------------------------------------

## 🔐 Privacy

All AI processing runs entirely in the browser.

No images are sent to any server unless explicitly handled by your
application.

------------------------------------------------------------------------

## 🏗️ Tech Stack

-   React
-   TypeScript
-   Vite
-   secure-kyc-capture


---

## 👨‍💻 Author

Built and maintained by **Pratham Ingawale**  
GitHub: https://github.com/PRATHAM-SPS

---


## 🪪 License

MIT
