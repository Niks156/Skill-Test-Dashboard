import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import target from "../img/target.png"

export default function QuestionAnalysis({ correctans }) {
  const styles = {
    bordersx: {
      marginTop: 18,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      padding: 20,
      background:`url(${target}) no-repeat center`,
    },
  };
  const value = correctans;
  const data = {
    labels: [`You scored ${value} question correct out of 15.`],
    datasets: [
      {
        data: [value, 15 - value],
        borderColor: ["rgba(238, 238, 238, 0.72)"],
        backgroundColor: ["#438AF6 ", "rgba(255,255,255, 0.3)"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        radius: "75%",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };


  const options = {
    cutout: 88,
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
