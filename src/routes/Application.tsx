import { Dashboard, Error404 } from "@pages";
import { DashboardLayout } from "@components";
import { Route, Routes } from "react-router-dom";

const Application = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Application;
