import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PreviewArticle_Card from "../components/PreviewArticle_Card";
import { BiArrowBack } from "react-icons/bi";

export default function NewsDetails() {
  const { id } = useParams();
  const navigator = useNavigate()

  const [news, setNews] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/news/${id}`
        );
        const news = await response.data;

        setNews(news);
      } catch (error) {
        setError(error);
      }
    };

    fetchNewsDetails();
  }, []);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }


  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto">
        <button className="btn border-none" onClick={() => navigator("/")}><BiArrowBack size={50} /></button>
        <PreviewArticle_Card id={news.id} image={news.image} title={news.title} summary={news.summary} date={news.date} content={news.content} url={news.url}/>
      </div>
    </>
  );
}
