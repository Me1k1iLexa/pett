import { Routes, Route } from "react-router-dom";

import RegisterForm from "./components/Register/RegisterForm.tsx";
import AdminPage from "./components/Admin/AdminPage.tsx";
import LoginForm from "./components/Register/LoginForm.tsx";
import Profile from "./components/Profile/Profile.tsx";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
