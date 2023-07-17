import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIxNDBhNTc5MGIxMjIzYzcwYmY5MjQiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjg5NDE3NjgxLCJleHAiOjE2ODk2NzY4ODF9.As_7rfumck2pMklouC74uO9zfqk4Z43Wr-KV2uDOLQI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: "Bearer:" + TOKEN,
  },
});
