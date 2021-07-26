
import axios from "axios";

  const getAds = async () => {
    const response = await axios.get("http://localhost:3001/getAds");
    console.log(response);
    return response;
  };

  export default getAds;