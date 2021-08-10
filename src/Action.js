import axios from "axios";

export const GET_CITY_LIST = "GET_CITY_LIST";
export const CHECK_IN = "CHECK_IN";
export const CHECK_OUT = "CHECK_OUT";
export const GET_HOTELS_LIST = "GET_HOTELS_LIST";
export const GET_LIST = "GET_LIST";
export const AUTO_COMPLETE_SELECT = "AUTO_COMPLETE_SELECT";

export const GetCity = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_CITY_LIST,
      payload: data,
    });
  };
};
export const AutoCompleteCity = (data) => {
  return (dispatch) => {
    dispatch({
      type: AUTO_COMPLETE_SELECT,
      payload: data,
    });
  };
};

export const CheckInDate = (data) => {
  return (dispatch) => {
    dispatch({
      type: CHECK_IN,
      payload: data,
    });
  };
};

export const CheckOutDate = (data) => {
  return (dispatch) => {
    dispatch({
      type: CHECK_OUT,
      payload: data,
    });
  };
};

export const GetList = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST,
      payload: data,
    });
    console.log("city details", data);
  };
};

export const GetHotels = (chekin, chekout, desti) => {
  return async (dispatch) => {
    console.log("hotelapi");
    const res = await axios({
      method: "GET",
      //   url: "https://hotels4.p.rapidapi.com/properties/list",
      url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",
      params: {
        // adults1: "1",
        // pageNumber: "1",
        // destinationId: desti,
        // pageSize: "25",
        // checkOut: chekout,
        // checkIn: chekin,
        // sortOrder: "PRICE",
        // locale: "en_US",
        // currency: "USD",
        currency: "USD",
        checkin_date: chekin,
        adults_number: "1",
        destination_id: desti,
        locale: "en_US",
        checkout_date: chekout,
        sort_order: "STAR_RATING_HIGHEST_FIRST",
        price_max: "500",
        star_rating_ids: "3,4,5",
        guest_rating_min: "4",
        amenity_ids: "527,2063",
        theme_ids: "14,27,25",
        accommodation_ids: "20,8,15,5,1",
        page_number: "1",
        price_min: "10",
        children_ages: "4,0,15",
      },
      headers: {
        // "x-rapidapi-key": "b0b11623a6mshe33f5e1fb8ff16cp19becejsnde4ee04549a2",
        // "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "b0b11623a6mshe33f5e1fb8ff16cp19becejsnde4ee04549a2",
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      },
    });
    console.log("hotelapi", res.data);
    dispatch({ type: GET_HOTELS_LIST, payload: res.data });
  };
};
