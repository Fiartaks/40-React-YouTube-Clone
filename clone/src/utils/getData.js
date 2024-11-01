import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "3e237f7b28msh60fdbf57de54c2fp1da8ccjsn81341a7c856b",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
