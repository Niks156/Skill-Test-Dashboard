import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SkillName from "./SkillName";
import Typography from "@mui/material/Typography";
import QuickStats from "./QuickStats";
import ComparisonChart from "./ComparisonChart";
import QuestionAnalysis from "./QuestionAnalysis";
import SyllabusAnalysis from "./SyllabusAnalysis";

export default function SkillStats() {
  const [rank, setrank] = useState(0);
  const [percent, setpercent] = useState(0);
  const [correctans, setcorrectans] = useState(0);
  const styles = {
    margin: "28px",
  };
  return (
    <div style={styles}>
      <Typography variant="body1" color="grey">
        Skill Test
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6} md={7}>
          <SkillName
            setrank={setrank}
            setpercent={setpercent}
            setcorrectans={setcorrectans}
            rank={rank}
            percent={percent}
            correctans={correctans}
          />
          <QuickStats rank={rank} percent={percent} correctans={correctans} />
          <ComparisonChart />
        </Grid>
        <Grid item xs={6} md={5} sx={{ marginLeft: 0.001 }}>
          <SyllabusAnalysis />
          <QuestionAnalysis correctans={correctans}/>
        </Grid>
      </Grid>
    </div>
  );
}
