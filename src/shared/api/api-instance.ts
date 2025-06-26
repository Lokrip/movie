import axios from "axios";

const ACCESS_KEY = process.env.API_ACCESS_KEY;

export const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${ACCESS_KEY}`,
    Accept: "application/json",
  },
});
