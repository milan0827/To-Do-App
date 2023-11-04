import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import { Welcome } from "./Pages/Welcome/Welcome";
import Dashboard from "./Pages/Dashboard/DashBoard";
import Tasks from "./Pages/Tasks/Tasks";
import People from "./Pages/People/People";
import Reports from "./Pages/Reports/Reports";
import Billing from "./Pages/Billing/Billiing";
import Integration from "./Pages/Integration/Integration";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/people" element={<People />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/integration" element={<Integration />} />
      </Routes>
    </div>
  );
}

export default App;
