import React from "react";
import Navbar from "../components/Navbar.jsx"



export default function StudentDashboard() {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  if (!user) return <div>No user</div>;

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
        <Navbar />
<h1>dfcgvhbjn</h1>
     
    </div>
  );
}
