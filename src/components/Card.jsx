const Card = ({ id, title, image, summary,category }) => {
  return (
    <div
      id={id}
      className="card w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-lg rounded-2xl bg-white transition-all duration-300"
    >
      <figure>
        <img
          src={image}
          alt={title}
          className="h-32 sm:h-40 md:h-48 lg:h-56 w-full object-cover rounded-xl"
        />
      </figure>
      <div className="text-left bg-transparent p-2">
        <h2 className="card-title font-medium text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-red-600 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {category}
        </p>
       
      </div>
    </div>
  );
};

export default Card;
