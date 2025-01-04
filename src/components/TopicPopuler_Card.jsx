const TopicPopuler_Card = ({ title, category,image }) => {
  return (
    <>
      <div className="bg-transparent flex flex-col mb-4">
        <div className="text-lg md:text-2xl lg:text-3xl font-bold">{title}</div>
        <div className="bg-transparent flex mt-2">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-32 flex-col md:w-48"
          />

          <div className="w-full text-start flex-col mt-0 ml-2 mr-2 p-2 bg-white rounded">
            <h2 className="font-bold text-lg md:text-2xl">
              {title}
            </h2>
            <div className="mt-2 rounded">
              <p className="ml-3 text-xl font-bold text-[#F60E2A] mt-3">
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicPopuler_Card;
