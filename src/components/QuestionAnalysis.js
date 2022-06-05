import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function QuestionAnalysis({ correctans }) {
  const styles = {
    bordersx: {
      marginTop: 18,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      padding: 15,
    },
  };
  const value = correctans;
  const data = {
    labels: [
      `You scored ${value} question correct out of 15. However it still needs some improvements`,
    ],
    datasets: [
      {
        // label: "Attendance for Week 1",
        data: [value, 15 - value],
        borderColor: ["rgba(238, 238, 238, 0.72)"],
        backgroundColor: ["#438AF6 ", "rgba(255,255,255, 0.3)"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        // width : 180,
        // height : 180,
        radius: "50%",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Question Analysis",
        color: "black",
        font: {
          size: 34,
        },

        padding: {
          top: 0,
          bottom: 0,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };
  return (
    <div style={styles.bordersx}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
