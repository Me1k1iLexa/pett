import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import "../../App.css";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Successfully registered!");
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title1">Регистрация</h1>
      <input
        className="mainInput"
        type="email"
        placeholder="Ваш Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="mainInput"
        type="username"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="mainInput"
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className={styles.buttonWrapper}>
        <button className="mainButton" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/login">Уже зарегистрированы?</Link>
      </div>
    </form>
  );
};
export default RegisterForm;
