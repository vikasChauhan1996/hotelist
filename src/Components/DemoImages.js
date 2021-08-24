import React,{useState,useEffect} from 'react';
import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import {HotelsImages} from './Actions';
import { useDispatch, useSelector } from "react-redux";

const DemoImages = () => {
    const classes = useStyles();
    
 
    const dispatch = useDispatch();

  
    return (
        <>
            
        </>
    )
};

const useStyles = makeStyles((theme) =>
  createStyles({

  })
);

export default DemoImages;
