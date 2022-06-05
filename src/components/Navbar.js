import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../img/avatar.png";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        background: "#FFFFFF",
        color: "black",
        padding: "5px 0",
        borderBottom: 1,
        borderColor: "#DCDCDC",
        boxShadow: 0,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              flexGrow: 1,
              marginLeft: "9px",
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            <img
              alt="cuvette"
              style={{ width: 125, height: 30 }}
              src={require("../img/mainlogo.png")}
            />
          </Typography>
          <Box
            sx={{
              border: 0.1,
              borderColor: "#DCDCDC",
              borderRadius: "13px",
              flexGrow: 0,
              marginRight: "15px",
              display: "flex",
              padding: "5px",
            }}
          >
            <Box>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="h6"
              sx={{
                flexGrow: 0,
                marginRight: "10px",
                marginLeft: "10px",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontSize: "13px",
              }}
            >
              Siddharth Jain
              {/* displays the avatar at right */}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
