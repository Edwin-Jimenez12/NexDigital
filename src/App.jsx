import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Plans />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
