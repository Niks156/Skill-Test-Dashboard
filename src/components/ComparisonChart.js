import React from "react";
import LineChart from "./LineChart";

export default function ComparisonChart() {
  const styles = {
    bordersx: {
      marginTop: 18,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      height: "100%",
      width: 808,
      padding:"10px 25px 10px 25px"
    },
  };
  

  return (
    <div>
      <div style={styles.bordersx}>
        <h3>Comparison chart</h3>
        <LineChart />
      </div>
    </div>
  );
}
