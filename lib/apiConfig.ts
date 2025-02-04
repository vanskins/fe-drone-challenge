import axios from "axios";

// Create Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Optional: Add Authorization headers here)
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`📡 Sending request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor (Handles errors globally)
axiosInstance.interceptors.response.use(
  (response) => response, // Return successful response
  (error) => {
    if (error.response) {
      console.error(
        `🚨 API Error [${error.response.status}]:`,
        error.response.data
      );
    } else if (error.request) {
      console.error("⏳ No response received from API");
    } else {
      console.error("⚠️ Request setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
