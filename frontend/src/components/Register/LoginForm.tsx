import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err: any) {
      setError(err.response?.data?.error || "Invalid email or password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title2">Login</h2>
      <input
        className="mainInput"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mainInput"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="mainButton" type="submit">
        Войти
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};
export default LoginForm;
