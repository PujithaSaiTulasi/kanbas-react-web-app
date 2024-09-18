import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
      <Route path="/" element={<Navigate to="LandingPage"/>}/>
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
      <Route path="/LandingPage/*" element={<LandingPage />} />
      </Routes>
      </div>
    </HashRouter>
  );
}
export default App;