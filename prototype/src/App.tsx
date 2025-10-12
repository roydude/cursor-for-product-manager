import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileManagementPage from "@pages/ProfileManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileManagementPage />} />
      </Routes>
    </Router>
  );
}

export default App;
