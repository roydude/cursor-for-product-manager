import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FigmaProfilePage from "./pages/FigmaProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FigmaProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
