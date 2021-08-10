import React from "react";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Container,
  Avatar,
  IconButton,
  Tooltip,
  Paper
} from "@material-ui/core";
import { NotificationsNone, ContactMail } from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appbar} color='transparent' >
        <Toolbar className={classes.toolbr}>
          <Box>
            <Typography variant="h5" className={classes.logo}>
              bookmy <span className={classes.spn}>hotel</span>{" "}
            </Typography>
          </Box>
          <Box className={classes.btn}>
            <Tooltip className={classes.ttip} title="contact us">
              <IconButton className={classes.icnbtn}>
                <ContactMail />
              </IconButton>
            </Tooltip>
            <Tooltip className={classes.ttip} title="Notifivations">
              <IconButton className={classes.icnbtn}>
                <NotificationsNone />
              </IconButton>
            </Tooltip>
          </Box>

          <Box className={classes.idbox}>
            <Avatar />
            <Typography className={classes.name}>name</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box className={classes.covidbox}>
        <Typography variant="h4" className={classes.covid}>
          Protect yourself and others from COVID-19
        </Typography>
      </Box> */}
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      // backgroundColor: "#003580",
      // height: "106px",
      display: "flex",
      justifyContent: "space-between",
    },
    spn: {
      color: "rgb(8, 150, 255)",
      textTransform: "capitalize",
    },
    logo: {
      textTransform: "capitalize",
    },
    toolbr: {
      display: "flex",
      justifyContent: "space-between",
    },
    btn: {
      position: "relative",
      left: "250px",
    },
    icnbtn: {
      color: "#dadcde",
    },
    ttip: {
      // backgroundColor:'black',
      // color:"white",
      // textTransform:"capitalize"
    },
    idbox: {
      display: "flex",
      position: "relative",
      right: "62px",
      top: "7px",
    },
    name: {
      position: "relative",
      left: "13px",
      top: "8px",
    },
    covid: {
      color: '#332e2c',
      backgroundColor: '#eae8e1'
    },
    covidbox: {
      position: "absolute",
      top: "107px",
      width:"100vw",
      height:'40px'
    },
  })
);

export default Navbar;
