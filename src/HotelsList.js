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
import { GetHotels, CheckInDate, CheckOutDate, GetCity,AutoCompleteCity } from "./Action";
import { checkUtils } from "@material-ui/pickers/_shared/hooks/useUtils";

const HotelsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const chekInDay = useSelector((state) => state.EnteryDate.in);
  const checkOutDay = useSelector((state) => state.ExitDate.out);
  // const cityDestiId = useSelector((state) => state.getAllList.getList);
  const cityDestiId = useSelector((state) => state.autoSelectClicked.selectedCity?.destinationId);
  const hotelshead = useSelector((state) => state.HotelsName.list.header);
  const hotels = useSelector(
    (state) => state.HotelsName.list.searchResults?.results
  );
  // useEffect(()=>{
  //   dispatch(AutoCompleteCity(cityDestiId))
  // })
  useEffect(() => {
    
    if (chekInDay && checkOutDay && cityDestiId) {
      dispatch(GetHotels(chekInDay, checkOutDay, cityDestiId));
    }
  }, [chekInDay, checkOutDay, cityDestiId]);

  return (
    <>
      <Box>properties found</Box>

      <Box>
      {hotelshead}
        {hotels?.map((result) => {
          return (
            <>
            
              <Paper className={classes.hotelsList}>
                <img src={result.optimizedThumbUrls.srpDesktop} alt={result.name} />
                <h4 className={classes.hotelName} >
                {result.name} 
                
                  </h4> 
                  <h3>
                    {result.address.streetAddress}
                  </h3>
                 </Paper>
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
      // backgroundColor: "aliceblue",
      backgroundColor: '#e8ecec',
      position: "relative",
      top: "150px",
      height: "300px",
      left: "264px",
      cursor:'pointer',
      marginTop:"30px"
    },
    // hotelsList:{
    //   color:'red'
    // },
  })
);

export default HotelsList;
