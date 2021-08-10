import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  createStyles,
  Paper,
  MenuItem,
  Select,
  CircularProgress,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment, { format } from "moment";
import { SingleBedOutlined } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetCity, CheckInDate, CheckOutDate, GetList } from "./Action";
import { useHistory, Switch, Route } from "react-router-dom";

const backImg =
  "https://images.unsplash.com/photo-1605609075879-88e12425d47a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const Searchingbar = (props) => {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const [state,setState] = useState('')
  const [checkInOut, setCheckInOut] = useState("");
  const [room, setRoom] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [snackbarStatus, setSnackbarStatus] = useState(false);
  const [authenticationStatus, setAuthenticationStatus] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD"));
  };
  const handleDateChange2 = (date) => {
    setCheckOutDate(moment(date).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    console.log({ selectedDate });
  }, [selectedDate]);

  const getList = async (props) => {
    if (place.length > 3) {
      const res = await axios({
        method: "GET",
        // url: "https://hotels4.p.rapidapi.com/locations/search",
        url: "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",
        params: {
          currency: "USD",
          query: place,
          locale: "en_US",
        },
        headers: {
          "x-rapidapi-key":
            "b0b11623a6mshe33f5e1fb8ff16cp19becejsnde4ee04549a2",
          "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        },
      });
      console.log("searchDestination", res.data);
      console.log("resdata", res.data);
      setResult(res.data.suggestions);

      let cityArr = res.data.suggestions
        .find((item) => item.group === "CITY_GROUP")
        ?.entities.filter((item) => item.type === "CITY");
      setCities(cityArr);
      console.log("cityArr", cityArr);
    }
  };

  useEffect(() => {
    console.log("place", place);
    if (place !== "") {
      getList();
    } else {
      //   setSnackbarStatus(true);
      setAuthenticationStatus("please choose your destination");
    }
  }, [place]);

  const handleAdd = () => {
    if (place !== "") {
      dispatch(GetCity(cities));
      dispatch(CheckInDate(selectedDate));
      dispatch(CheckOutDate(checkOutDate));

      history.push("/hotels");
    } else {
      setSnackbarStatus(true);
    }
  };

  return (
    <>
      <Box className={classes.body}>
        {/* <Typography>THIS IS IIMAGE</Typography> */}
        <Box className={classes.head}>
          <Typography variant="h2" className={classes.text}>
            let's explore your{" "}
          </Typography>
          <Typography variant="h2" className={classes.text}>
            awesome city{" "}
          </Typography>
        </Box>

        <Paper className={classes.search}>
          <Box className={classes.text_box}>
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              getOptionLabel={(myplace) => myplace.name}
              style={{ width: 300, backgroundColor: "white" }}
              className={classes.auto}
              onChange={(e, value) => {
                console.log(
                  "autocomplete",

                  value

                );
                setState(value)
                
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
             
                  label="Combo box"
                  variant="outlined"
                  onChange={(e) => {
                    console.log(
                      "cities",
                      cities.find(
                        (item) =>
                          item.name.toUpperCase() ===
                          e.target.value.toUpperCase()
                      ),

                      e.target.value
                    );
                    setPlace(e.target.value);
                  }}
                />
              )}
            />
          </Box>

          <Box className={classes.dateBox}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                className={classes.dateset}
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="check-in"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                className={classes.dateset}
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="check-out"
                value={checkOutDate}
                onChange={handleDateChange2}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Box>
          <Box>
            <TextField
              className={classes.search_text1}
              type="text"
              label="adult"
              value={adult}
              onChange={(e) => setRoom(e.target.value)}
            />
            <TextField
              className={classes.search_text1}
              type="text"
              label="child"
              value={child}
              onChange={(e) => setRoom(e.target.value)}
            />
            <TextField
              className={classes.search_text1}
              type="text"
              label="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </Box>
          <Button
            className={classes.btn}
            onClick={() => {
              handleAdd();
            }}
          >
            search
          </Button>
        </Paper>
      </Box>
      <Box className={classes.main_box}></Box>
      <Snackbar
        message={authenticationStatus}
        open={snackbarStatus}
        autoHideDuration={5000}
        onClose={() => setSnackbarStatus(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      backgroundImage: `url(${backImg})`,
      width: "100vw",
      height: "100vh",
      backgroundPosition: "center-cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      opacity: "0.8",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    head: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      top: "125px",
    },
    text: {
      color: "white",
      textTransform: "capitalize",
    },

    search: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "transparent",
      //   border: "1px solid white",
      left: "420px",
      position: "relative",
      width: "550px",
      //   height: "500px",
    },
    search_text: {
      backgroundColor: "white",
    },
    search_text1: {
      width: "350px",
      backgroundColor: "white",
      color: "aqua",
    },

    btn: {
      backgroundColor: "rgb(69, 140, 228)",
      color: "white",
      width: "92px",
      position: "relative",
      left: "214px",
      top: "44px",
    },
    text_box: {
      position: "relative",
      bottom: "46px",
      left: "101px",
    },

    auto: {
      position: "absolute",
    },
    dateset: {
      backgroundColor: "white",
      textAlign: "center",
    },
    dateBox: {
      // position:"relative",
      // bottom:"16px"
    },
  })
);

export default Searchingbar;
