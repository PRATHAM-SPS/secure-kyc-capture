import { BrowserRouter, Routes, Route } from "react-router-dom";
import CameraPage from "./pages/CameraPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CameraPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;