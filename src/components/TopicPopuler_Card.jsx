const TopicPopuler_Card = ({ title, kategori }) => {
  return (
    <>
      <div className="bg-transparent flex flex-col mb-4">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</div>
        <div className="bg-transparent flex mt-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl w-32 flex-col md:w-48"
          />

          <div className="w-full text-start flex-col mt-0 ml-2 mr-2 p-2 bg-white rounded">
            <h2 className="font-bold text-lg md:text-2xl">
              Banjir Jakarta Meluas, Rendam 48 RT Dan 1 Ruas Jalan
            </h2>
            <div className="mt-2 rounded">
              <p className="text-red-600 text-sm">
                News.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicPopuler_Card;
