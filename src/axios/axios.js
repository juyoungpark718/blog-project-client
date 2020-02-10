import axios from "axios";

export const postCreate = (title, body, rawBody) => {
  console.log("his");
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000"
  });
  return axiosInstance.post("/post/", {
    title,
    body,
    rawBody
  });
};
