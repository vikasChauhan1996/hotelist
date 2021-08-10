import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GetHotels, CheckInDate, CheckOutDate, GetCity } from "./Action";
import { checkUtils } from "@material-ui/pickers/_shared/hooks/useUtils";

const HotelsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const chekInDay = useSelector((state) => state.EnteryDate.in);
  const checkOutDay = useSelector((state) => state.ExitDate.out);
  const cityDestiId = useSelector((state) => state.getAllList.getList);
  const hotelshead = useSelector((state) => state.HotelsName.list.header);
  const hotels = useSelector(
    (state) => state.HotelsName.list.searchResults?.results
  );
  useEffect(() => {
    console.log("checkin", checkOutDay, chekInDay, cityDestiId);
    if (chekInDay && checkOutDay && cityDestiId) {
      dispatch(GetHotels(chekInDay, checkOutDay, cityDestiId));
    }
  }, [chekInDay, checkOutDay, cityDestiId]);

  return (
    <>
      <Box>properties found</Box>

      <Box>
        {hotels?.map((result) => {
          return (
            <>
            {hotelshead}
              <Paper className={classes.hotelsList}> {result.name} </Paper>
            </>
          );
        })}
      </Box>
    </>
  );
};
const useStyles = makeStyles((theme) =>
  createStyles({
    hotelsList: {
      width: "500px",
      position: "relative",
      top: "150px",
      backgroundColor: "aliceblue",
      position: "relative",
      top: "150px",
      height: "300px",
      left: "264px",
    },
  })
);

export default HotelsList;
