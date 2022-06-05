import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function SyllabusAnalysis() {
  const styles = {
    bordersx: {
      marginTop: 16,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      padding: "3px 24px 15px 24px",
    },
    flex: {
      display: "flex",
      marginTop: 10,
      borderRadius: 100,
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
      <div className="text-muted">HTML Tools, Forms, History</div>
      <div style={styles.flex}>
        <ProgressBar style={styles.fx} now={80} />
        <span style={{ color: "#0d6efd", marginLeft: 20 }}>80%</span>
      </div>
      <div className="text-muted">Tags & References in HTML</div>
      <div style={styles.flex}>
        <ProgressBar variant="warning" style={styles.fx} now={60} />
        <span style={{ color: "#ffc107", marginLeft: 20 }}>60%</span>
      </div>
      <div className="text-muted">Tables & CSS Basics</div>

      <div style={styles.flex}>
        <ProgressBar variant="danger" style={styles.fx} now={24} />
        <span style={{ color: "#dc3545", marginLeft: 20 }}>24%</span>
      </div>
      <div className="text-muted">Tables & CSS Basics</div>

      <div style={styles.flex}>
        <ProgressBar variant="success" style={styles.fx} now={96} />
        <span style={{ color: "#198754", marginLeft: 20 }}>96%</span>
      </div>
    </div>
  );
}
