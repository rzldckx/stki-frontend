import axios from "axios";

const fetchData = async ({ category, page }) => {
  try {
    const baseUrl = `${import.meta.env.VITE_API_URL}/news`;

    const url = category
      ? `${baseUrl}?category=${category}&page=${page}`
      : `${baseUrl}?page=${page}`;

    const response = await axios.get(url);
    console.log("API Response:", response.data); // Log untuk debugging
    return { data: response.data.news, error: null }; // Mengembalikan data dan null error
  } catch (err) {
    console.error("Error fetching data:", err);
    return { data: null, error: err.message || "An error occurred" }; // Mengembalikan null data dan error
  }
};

export default fetchData;
