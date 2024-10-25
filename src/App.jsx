import "./App.css";
import GenAuthFormPage from "./pages/GenAuthFormPage/GenAuthFormPage";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";

function App() {
  const routes = ["/", "/register", "/login"];

  return (
    <>
      <Header />
      <Routes>
        {routes.map((path, indx) => (
          <Route
            key={indx}
            path={path}
            element={
              path === "/" ? <Navigate to="/register" /> : <GenAuthFormPage />
            }
          />
        ))}

        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;
