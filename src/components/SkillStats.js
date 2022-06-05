import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SkillName from "./SkillName";
import Typography from "@mui/material/Typography";
import QuickStats from "./QuickStats";
import ComparisonChart from "./ComparisonChart";
import QuestionAnalysis from "./QuestionAnalysis";
import SyllabusAnalysis from "./SyllabusAnalysis";

export default function SkillStats() {
  const [rank, setrank] = useState(12000);
  const [percent, setpercent] = useState(37);
  const [correctans, setcorrectans] = useState(7);
  const styles = {
    margin: "28px",
  };
  return (
    <div style={styles}>
      <Typography variant="body1" color="grey">
        Skill Test
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
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
        <Grid item xs={6} md={4} sx={{ marginLeft: 0.001 }}>
          <SyllabusAnalysis />
          <QuestionAnalysis correctans={correctans} />
        </Grid>
      </Grid>
    </div>
  );
}
