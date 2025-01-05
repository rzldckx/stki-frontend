import axios from "axios";
import { API_URL } from "../config";

const fetchData = async ({ category, page }) => {
    try {
        const url = category
            ? `${API_URL}/news?category=${category}&page=${page}`
            : `${API_URL}/news?page=${page}`;

        const response = await axios.get(url);
        return { data: response.data.news, total_pages: response.data.total_pages, error: null };
    } catch (err) {
        return { data: null, error: err.message || "An error occurred" };
    }
};

export default fetchData;