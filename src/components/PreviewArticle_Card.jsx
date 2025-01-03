import React from "react";

const PreviewArticle_Card = ({
  id,
  image,
  title,
  summary,
  date,
  content,
  url,
}) => {
  return (
    <>
      <div
        id={id}
        className="card sm:w-60 md:w-full lg:w-full xl:w-full bg-white px-2 md:mt-4 transition-all duration-300"
      >
        <div className="text-left bg-transparent mt-1">
          <h2 className="card-title font-extrabold text-lg md:text-2xl lg:text-xl xl:text-4xl">
            {title}
          </h2>
          <p className="card-summary text-base mt-2 md:text-xl lg:text-lg xl:text-2xl">
            {summary}
          </p>
          <p className="card-date text-xs mt-2 mb-2 md:text-lg lg:text-lg xl:text-xl">
            {date}
          </p>
        </div>
        <figure className="flex justify-center w-full h-full md:h-96 xl:h-full">
          <img
            src={image}
            alt={title}
            className="rounded-3xl w-full h-full object-contain md:object-cover"
          />
        </figure>
        <div className="text-left bg-transparent p-1">
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="card-summary text-base sm:text-sm md:text-xl lg:text-lg xl:text-2xl text-justify mb-4"
            >
              {paragraph}
            </p>
          ))}
          <p className=" text-base md:text-xl xl:text-2xl">
            Source:{" "}
            <a
              href={url}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumber Berita
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PreviewArticle_Card;
