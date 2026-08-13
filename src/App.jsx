import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Plans />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
