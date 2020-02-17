import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000"
});

export const postCreate = (title, body, rawBody, images) => {
  const formData = new FormData();
  if (images) {
    for (let index in images) {
      formData.append(`images${index}`, images[index]);
    }
  }
  console.log(body);
  return axiosInstance.post("/post/", {
    title,
    body,
    rawBody
  });
};

export const getPostList = () => {
  return axiosInstance.get("/post/");
};
