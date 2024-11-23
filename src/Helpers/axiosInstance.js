import axios from "axios";

const Base_URl = "http://localhost:5010/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = Base_URl ;
axiosInstance.defaults.withCredentials = true ;

export default axiosInstance;


// Read axios api and also timeout of axios
// Axios Timeout help to if the api endpoint does not respond with the 
// certain time the requested is aborted


