import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://house-finder-org.up.railway.app/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;