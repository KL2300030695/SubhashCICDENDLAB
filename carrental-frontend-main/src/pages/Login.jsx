import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/auth/login", form);
      localStorage.setItem("token", res.data);
      localStorage.setItem("username", form.username);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="auth-container car-theme">
      <div className="auth-box">
        <h2>Car Rental Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required
                 onChange={(e) => setForm({ ...form, username: e.target.value })} />
          <input type="password" placeholder="Password" required
                 onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">Login</button>
        </form>
        <p>New user? <Link to="/signup">Register</Link></p>
      </div>
    </div>
  );
}
