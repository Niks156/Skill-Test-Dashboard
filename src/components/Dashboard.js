import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SideNav from "./SideNav";
import SkillStats from "./SkillStats";

export default function Dashboard() {
  const dashsx = {
    height: "100vh",
  };
  return (
    <div style={dashsx}>
      <Navbar />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={1.9}>
            <SideNav />
          </Grid>
          <Grid item xs={6} md={10.1}>
            <SkillStats />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
