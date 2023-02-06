import { Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Resume from "./pages/Resume";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personal" element={<Personal />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
