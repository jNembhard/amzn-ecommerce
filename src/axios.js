import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amznjason.cloudfunctions.net/api",
  // "http://localhost:5001/amznjason/us-central1/api",
});

export default instance;
