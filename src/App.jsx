import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import GenerateContent from "./pages/GenerateContent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/generate" element={<GenerateContent />} />
      </Routes>
    </Router>
  );
}

export default App;
