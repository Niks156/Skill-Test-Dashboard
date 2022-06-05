import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "52vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "20px 30px",
  border: "none",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  flexi: {
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    flexGrow: "1",
    marginTop: 15,
    marginLeft: 15,
  },
  btn: {
    cursor: "pointer",
    background: "#142683",
    color: "white",
    padding: "9px 20px",
    borderRadius: "5px",
    margin: "20px 20px",
  },
};

export default function BasicModal(props) {
  const { rank, percent, correctans, setrank, setpercent, setcorrectans } =
    props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={style.btn} onClick={handleOpen}>
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ flexGrow: 1 }}
              id="modal-modal-title"
              variant="h4"
              component="h2"
            >
              Update Scores
            </Typography>
            <Typography id="modal-modal-description">
              <img
                alt="complex"
                width={50}
                height={60}
                src={require("../img/html.png")}
              />
            </Typography>
          </Box>
          <hr style={{height:0.1}}/>
          <Box style={style.flexi}>
            <img
              alt="img1"
              width={33}
              height={39}
              src={require("../img/1.png")}
            />
            <div style={style.text}>
              Update your <b>rank</b>
            </div>

            <TextField
              id="outlined-number"
              type="number"
              defaultValue={rank}
              onChange={(e) => setrank(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box style={style.flexi}>
            <img
              alt="img2"
              width={33}
              height={39}
              src={require("../img/2.png")}
            />
            <div style={style.text}>
              Update your <b>percentile</b>
            </div>

            <TextField
              id="outlined-number"
              type="number"
              defaultValue={percent}
              onChange={(e) => setpercent(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box style={style.flexi}>
            <img
              alt="img3"
              width={33}
              height={39}
              src={require("../img/3.png")}
            />
            <div style={style.text}>
              Update your <b>current score (out of 15)</b>
            </div>

            <TextField
              id="outlined-number"
              type="number"
              defaultValue={correctans}
              onChange={(e) => setcorrectans(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <hr style={{height:0.1}}/>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button onClick={handleClose} style={style.btn} variant="contained">
              {"->"} save
            </Button>
            <Button
              onClick={handleClose}
              style={{
                cursor: "pointer",
                padding: "9px 13px",
                borderRadius: "5px",
                margin: "20px 10px",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
