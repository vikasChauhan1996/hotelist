import {
  GET_CITY_LIST,
  CHECK_IN,
  CHECK_OUT,
  GET_HOTELS_LIST,
  GET_LIST,
  AUTO_COMPLETE_SELECT,
  HOTEL_IMAGES
} from "./Action";

const initialState = {
  city: [],
};
const initialCheckIn = {
  in: [],
};
const initialCheckOut = {
  out: [],
};
const initialHotels = {
  list: [],
};
const initialList = {
  getList: [],
};
const autoSelect = {
  selectedCity : '',
};
const hotelImg = {
  imageList:[]
}

export const Cities = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_LIST:
      console.log("reducer", action);
      return {
        ...state,
        city: action.payload,
      };

      break;

    default:
      return state;
  }
};

export const autoSelectClicked = (state=autoSelect,action)=>{
  switch (action.type) {
    case AUTO_COMPLETE_SELECT:
      return{
        ...state,
        selectedCity: action.payload
      }
      
      break;
  
    default:
      return state;
  }
}

export const EnteryDate = (state = initialCheckIn, action) => {
  switch (action.type) {
    case CHECK_IN:
      console.log("date".action);
      return {
        ...state,
        in: action.payload,
      };

      break;

    default:
      return state;
  }
};
export const ExitDate = (state = initialCheckOut, action) => {
  switch (action.type) {
    case CHECK_OUT:
      console.log("dateout".action);
      return {
        ...state,
        out: action.payload,
      };

      break;

    default:
      return state;
  }
};
export const HotelsName = (state = initialHotels, action) => {
  switch (action.type) {
    case GET_HOTELS_LIST:
      console.log("hotelslist",action);
      return {
        ...state,
        list: action.payload,
      };
      break;

    default:
      return state;
  }
};
export const getAllList = (state = initialList, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        getList: action.payload,
      };

      break;

    default:
      return state;
  }
};

export const AllHotelImages = (state = hotelImg, action)=>{


  switch (action.type) {
    case HOTEL_IMAGES:
      return{
        ...state,
        imageList: action.payload
      }
      break;
  
    default:
      return state;
  }
}
// export default Cities;
