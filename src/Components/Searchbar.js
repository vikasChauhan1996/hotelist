import React, { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  createStyles,
  Paper,
} from "@material-ui/core";
import { SingleBedOutlined } from "@material-ui/icons";

const Searchbar = () => {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const [checkInOut, setCheckInOut] = useState("");
  const [room, setRoom] = useState("");
  return (
    <>
      <Box className={classes.main_box}>
        <Box className={classes.content}>
          <Box className={classes.head_box}>
            <Typography className={classes.head} variant="h5">
              where to next ?
            </Typography>
          </Box>
          <Box className={classes.search}>
            <Box className={classes.text_box}>
              <SingleBedOutlined />
              <TextField
                multiline
                rowsMax={4}
                className={classes.search_text1}
                type='text'
                label='where are you going ?'
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                className={classes.search_text}
                type='text'
                label='check-in  - check-out  '
                value={checkInOut}
                onChange={(e) => setCheckInOut(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                className={classes.search_text1}
                type='text'
                label='room set'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </Box>

            <Button className={classes.btn}>search</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    main_box: {
      top: "148px",
      position: "relative",
      width: "100vw",
      height: "300px",
      background: "#f5f5f5",
    },
    content: {
      position: "absolute",
      top: "66px",
    },
    search: {
      position: "relative",
      left: "165px",
      top: "42px",
      height: "auto",
      display: "flex",
    },
    search_text: {
      border: "4px solid #ffeb3b",
      width: "290px",
      // height: "auto",
    },
    search_text1: {
      width: "350px",
      border: "4px solid #ffeb3b",
      // height: "54px",
    },
    head: {
      position: "relative",
      right: "292px",
      textTransform: "capitalize",
    },
    btn: {
      backgroundColor: "rgb(69, 140, 228)",
      color: "white",
      border: "4px solid #ffeb3b",
    },
  })
);

export default Searchbar;
