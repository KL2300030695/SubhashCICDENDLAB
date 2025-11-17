import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const uname = localStorage.getItem("username");
    if (!token) navigate("/");
    else setUsername(uname);
  }, []);

  return (
    <div className="dashboard-grid">
      <header className="header">🚘 Welcome to RentEase Dashboard</header>
      <aside className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Car Inventory</li>
          <li>Bookings</li>
          <li>Customers</li>
          <li>Payments</li>
          <li>Reports</li>
        </ul>
      </aside>
      <main className="content">
        <h2>Hello, {username}</h2>
        <p>Manage your rental cars and customers easily.</p>
        <div className="cards">
          <div className="card">🚗 Available Cars: 42</div>
          <div className="card">📅 Active Bookings: 18</div>
          <div className="card">🧑‍🤝‍🧑 Registered Users: 120</div>
          <div className="card">💰 Revenue: ₹5.8L</div>
        </div>
      </main>
    </div>
  );
}
