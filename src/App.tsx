import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "@components";
import { Dashboard, Error404 } from "@pages";

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
