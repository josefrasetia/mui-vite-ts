import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Application from "@app/routes/Application";
import { Error404, Login } from "@pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="app/*" element={<Application />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 type="page" />} />
      </Routes>
    </Router>
  );
};

export default App;
