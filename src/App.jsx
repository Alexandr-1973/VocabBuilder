
import "./App.css";
import GenAuthFormPage from "./pages/GenAuthForm/GenAuthFormPage";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const routes = ['/', '/register', '/login']
  // const [authToggle, setAuthToggle] = useState(true);

  return (
    <>
      <Header />
      <Routes>

      <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<GenAuthFormPage />} />
        <Route path="/login" element={<GenAuthFormPage />} />
         
         {/* {routes.map((path) => (
          <Route key={path} path={path} element={<GenAuthForm />} />
        ))} */}
      {/* <Route path={["/", "/register", "/login"]} element={<GenAuthForm />} /> */}
        {/* <Route path="/register" element={<GenAuthForm />} />
        <Route path="/login" element={<GenAuthForm />} /> */}

      
      </Routes>
    </>
  );
}

export default App;
