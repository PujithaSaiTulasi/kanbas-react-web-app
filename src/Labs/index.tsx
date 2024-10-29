import { Route, Routes, Navigate, useNavigate } from "react-router";

import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import Lab4 from "./Lab4";

export default function Labs() {
  return (
    <div className="p-3">
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
  );
}
