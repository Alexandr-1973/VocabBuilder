import "./App.css";
import GenAuthFormPage from "./pages/GenAuthFormPage/GenAuthFormPage";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import DictionaryRecommendPage from "./pages/DictionaryRecommendPage/DictionaryRecommendPage";

import TrainingPage from "./pages/TrainingPage/TrainingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {["/", "/register", "/login"].map((path, indx) => (
          <Route
            key={indx}
            path={path}
            element={
              path === "/" ? <Navigate to="/register" /> : <GenAuthFormPage />
            }
          />
        ))}

        {["/dictionary", "/recommend"].map((path, indx) => (
          <Route key={indx} path={path} element={<DictionaryRecommendPage />} />
        ))}

        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;
