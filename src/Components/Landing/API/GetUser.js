import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export const UserData = (data) => {
    console.log("Getuser hi")
    let userData = ''
    axios
      .get(`${API}/users`, {
        headers: {
          Authorization: `Bearer ${data.token}`, // Add the JWT token to the request headers
        },
      })
      .then((res) => {
        console.log(res.data)
        userData = res.data
      })
      .catch((error) => {
        console.error("catch", error);
      });
    //   return userData
  };

