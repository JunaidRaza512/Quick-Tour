import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const ENDPOINT_NEARBY_SEARCH = "/nearbysearch/json";
const API_KEY = "AIzaSyB5K3BNqHDiDzBpTQO5sQ1LpNmFVNjt_wI";

// const nearByPlace = (lat, lng, type) =>
//   axios.get(
//     BASE_URL +
//       "/nearbysearch/json?" +
//       "&location=" +
//       lat +
//       "," +
//       lng +
//       "&radius=1500&type=" +
//       type +
//       "&key=" +
//       API_KEY
//   );
// const nearByPlace = (lat, lng, type) => {
//   const url = `${BASE_URL}${ENDPOINT_NEARBY_SEARCH}?location=${lat},${lng}&radius=1500&type=${type}&key=${API_KEY}`;
//   return axios.get(url);
// };
const nearByPlace = async (lat, lng, type) => {
  try {
    if (!lat || !lng || !type) {
      throw new Error("Latitude, Longitude, and Type are required parameters");
    }

    const url = `${BASE_URL}${ENDPOINT_NEARBY_SEARCH}?&location=${lat},${lng}&radius=1500&type=${type}&key=${API_KEY}`;
    const response = await axios.get(url);
    //console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching nearby places:", error);
    throw error;
  }
};

const searchByText = (searchText) =>
  axios.get(
    BASE_URL + "/textsearch/json?query=" + searchText + "&key=" + API_KEY
  );

export default {
  nearByPlace,
  searchByText,
};
