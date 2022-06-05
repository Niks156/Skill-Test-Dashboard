import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function QuickStats(props) {
  const { rank, percent, correctans } = props;

  const styles = {
    bordersx: {
      marginTop: 15,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      padding: "13px 5px 3px 45px",
    },
    parentflex: {
      display: "flex",
      justifyContent: "space-between",
    },
    flex: {
      display: "flex",
    },
    ul: {
      listStyle: "none",
      borderRight: "1px solid grey",
      paddingRight: 65,
      marginTop: -3,
    },
    img: {
      width: 50,
      height: 50,
    },
    txtmuted: {
      fontSize: 12.3,
      color: "grey",
    },
  };
  return (
    <div style={styles.bordersx}>
      <Typography style={{ marginLeft: -11 }} variant="h6" color="initial">
        Quick Statistics
      </Typography>
      <Grid xs={12} sx={{ marginTop: 3.4, marginBottom: 0.8 }} sm container>
        <Grid sx={styles.parentflex} item xs container spacing={2}>
          <div style={styles.flex}>
            <img
              alt="rank"
              style={styles.img}
              src={require("../img/rank.png")}
            />
            <ul style={styles.ul}>
              <li style={{ fontSize: 24 }}>
                <b>{rank}</b>
              </li>
              <li style={styles.txtmuted}>RANK</li>
            </ul>
          </div>
          <div style={styles.flex}>
            <img
              alt="perc"
              style={styles.img}
              src={require("../img/perc.png")}
            />
            <ul style={styles.ul}>
              <li style={{ fontSize: 24 }}>
                <b>{percent}%</b>
              </li>
              <li style={styles.txtmuted}>PERCENTILE</li>
            </ul>
          </div>
          <div style={styles.flex}>
            <img
              alt="correct"
              style={styles.img}
              src={require("../img/correct.png")}
            />
            <ul style={{ listStyle: "none", marginTop: -3 }}>
              <li style={{ fontSize: 24 }}>
                <b>{correctans}/15</b>
              </li>
              <li style={styles.txtmuted}>CORRECT ANSWERS</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
