import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://expense-tracker-project-vwoo.onrender.com/api",
    headers: {
        "Content-type" : "application/json"
    }
})

export default axiosInstance;
