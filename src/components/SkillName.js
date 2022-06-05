import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import UpdateModal from "./UpdateModal";

export default function SkillName(props) {
  const { rank, percent, correctans, setrank, setpercent, setcorrectans } =
    props;
  const styles = {
    bordersx: {
      marginTop: 18,
      border: "1px solid #DCDCDC",
      borderRadius: 10,
      marginLeft: 3.3,
      paddingBottom: 10,
      width: 808,
    },
  };
  return (
    <div>
      <Grid container style={styles.bordersx} spacing={2}>
        <Grid item>
          <img
            alt="complex"
            width={66}
            height={74}
            src={require("../img/html.png")}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container spacing={2}>
            <Grid item xs={12} sx={{ marginTop: 1.4 }}>
              <Typography gutterBottom variant="h5" component="h3">
                Hypertext Markup Language
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#949494" }}>
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <UpdateModal
              setrank={setrank}
              setpercent={setpercent}
              setcorrectans={setcorrectans}
              rank={rank}
              percent={percent}
              correctans={correctans}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
