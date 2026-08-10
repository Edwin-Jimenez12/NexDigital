import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Plans from "./pages/Plans";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Plans />} />
    </Routes>
  );
}

export default App;
