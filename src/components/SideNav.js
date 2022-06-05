import React from "react";
import "../css/sidenav.css";

export default function SideNav() {
  const styles = {
    navsx: {
      borderRight: "1px solid #DCDCDC",
      height: "88vh",
      color: "#566474",
      paddingTop: 15,
    },
  };

  return (
    <div style={styles.navsx}>
      <div className="list">
        <div className="my-3 py-2 hover">
          <img
            src={require("../img/dashboard.png")}
            className="me-3"
            alt="icon"
          />
          Dashboard
        </div>
        <div className="my-3 py-2 active">
          <img src={require("../img/skill.png")} className="me-3" alt="icon" />
          Skill Test
        </div>
        <div className="my-3 py-2 hover">
          <img
            src={require("../img/internship.png")}
            className="me-3"
            alt="icon"
          />
          Internship
        </div>
      </div>
    </div>
  );
}
