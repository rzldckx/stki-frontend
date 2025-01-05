import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, category }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/news/${id}`)}
      className="card w-full rounded-2xl bg-white transition-all duration-300 cursor-pointer"
    >
      <figure className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="text-left bg-transparent p-1">
        <h2 className="card-title font-medium text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-red-600 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {category}
        </p>
      </div>
    </button>
  );
};

export default Card;
