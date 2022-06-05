import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function SyllabusAnalysis() {
  const styles = {
    bordersx: {
      marginTop: 10,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      padding: 18,
    },
    flex: {
      display: "flex",
      marginTop: 10,
    },
    fx: {
      flexGrow: "1",
    },
  };

  return (
    <div style={styles.bordersx}>
      <div style={{ margin: "17px 0", fontSize: 25 }}>
        <b>Syllabus wise Analysis</b>
      </div>
      <div>HTML Tools, Forms, History</div>
      <div style={styles.flex}>
        <ProgressBar style={styles.fx} now={60} />
        <span style={{ color: "#0d6efd", marginLeft: 20 }}>60%</span>
      </div>
      <div>Tags & References in HTML</div>
      <div style={styles.flex}>
        <ProgressBar variant="warning" style={styles.fx} now={50} />
        <span style={{ color: "#ffc107", marginLeft: 20 }}>60%</span>
      </div>
      <div>Tables & CSS Basics</div>

      <div style={styles.flex}>
        <ProgressBar variant="danger" style={styles.fx} now={80} />
        <span style={{ color: "#dc3545", marginLeft: 20 }}>60%</span>
      </div>
      <div>Tables & CSS Basics</div>

      <div style={styles.flex}>
        <ProgressBar variant="success" style={styles.fx} now={90} />
        <span style={{ color: "#198754", marginLeft: 20 }}>60%</span>
      </div>
    </div>
  );
}
