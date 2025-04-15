import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterForm from "./components/Register/RegisterForm.tsx";
import AdminPage from "./components/Admin/AdminPage.tsx";

function App() {


  return (
    <Routes>

       <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
  )
}

export default App
