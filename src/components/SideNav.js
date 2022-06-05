import React from "react";
import "../css/sidenav.css";

export default function SideNav() {
  const navsx = {
    borderRight: "1px solid #DCDCDC",
    height: "88vh",
    color: "#566474",
  };
  return (
    <div style={navsx}>
      <ul className="list">
        <li>
          <img src={require("../img/dashboard.png")} alt="icon" />
          Dashboard
        </li>
        <li>
          <img src={require("../img/skill.png")} alt="icon" />
          Skill Test
        </li>
        <li>
          <img src={require("../img/internship.png")} alt="icon" />
          Internship
        </li>
      </ul>
    </div>
  );
}
