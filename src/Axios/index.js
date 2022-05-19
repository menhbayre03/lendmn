import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-10a72-default-rtdb.firebaseio.com/"
});

export default instance;