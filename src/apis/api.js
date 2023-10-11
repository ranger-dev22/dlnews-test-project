import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
