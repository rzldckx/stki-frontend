import axios from "axios";
import { API_URL } from "../config";

const fetchData = async ({ category, page }) => {
  try {
    const baseUrl = `${API_URL}/news`;

    const url = category
      ? `${baseUrl}?category=${category}&page=${page}`
      : `${baseUrl}?page=${page}`;

    const response = await axios.get(url);
    console.log("API Response:", response.data);
    return { data: response.data.news, total_pages: response.data.total_pages, error: null };
  } catch (err) {
    console.error("Error fetching data:", err);
    return { data: null, error: err.message || "An error occurred" };
  }
};

export default fetchData;