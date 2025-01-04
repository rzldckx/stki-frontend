import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import PreviewArticle_Card from "../components/PreviewArticle_Card";
import fetchData from "../api/News";

const Ekonomi = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // State untuk pagination
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await fetchData({ category, page });
      if (error) {
        setError(error);
      } else {
        setData(data);
      }
    };

    getData();
  }, [category, page]);

  if (error) {
    return <div className="text-red-500">Error fetching data: {error}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto w-full px-4 lg:px-8">
      <div className="font-black text-[#F60E2A] text-xl lg:text-2xl mb-4">
          BERITA EKONOMI
        </div>
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Card
                key={item.id} // Pastikan ada key unik
                title={item.title}
                image={item.image}
                category={item.category}
              />
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
        {/* Preview article section */}
        <div className="text-[#F60E2A] text-xl xl:text-2xl font-black mt-2 ml-2">
          PREVIEW ARTIKEL
        </div>
        <div>
          <PreviewArticle_Card
            id="1"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Depo Plumpang Terbakar, Anggota DPR Minta Pertamina Pastikan Pasokan BBM Tak Terganggu"
            summary="Depo Plumpang menyuplai sekitar 20 persen kebutuhan BBM harian di Indonesia, atau sekitar 25 persen dari total kebutuhan SPBU Pertamina."
            tempo="Tempo.co"
            date="4 Maret 2023"
            content={[
              "TEMPO.CO, Jakarta - Anggota Komisi VII DPR RI Rofik Hananto menyayangkan terjadinya insiden kebakaran yang disebabkan oleh bocornya depo Plumpang, Jakarta Utara, pada Jumat, 3 Maret 2023.",
              "Turut berbela sungkawa terhadap masyarakat sipil yang terdampak, apalagi ini daerah padat penduduk. Pertamina harus tanggung jawab.",
              "Rofik mengatakan Pertamina serta pihak terkait harus memastikan keselamatan dan keamanan warga yang tinggal di sekitar lokasi.",
              "Pipa BBM yang terbakar itu merupakan bagian dari Terminal Bahan Bakar Minyak (TBBM) Plumpang. TBBM Plumpang dinilai sebagai salah satu terminal BBM terpenting di Indonesia, sehingga Rofik juga menegaskan Pertamina harus memastikan pasokan bahan bakar minyak tetap aman meski ada insiden tersebut.",
              "Plumpang menyuplai sekitar 20 persen kebutuhan BBM harian di Indonesia, atau sekitar 25 persen dari total kebutuhan SPBU Pertamina. Maka tindakan selanjutnya adalah bagaimana memastikan suplai BBM tidak terganggu.",
            ]}
            url="https://nasional.tempo.co/read/1698528/depo-plumpang-terbakar-anggota-dpr-minta-pertamina-pastikan-pasokan-bbm-tak-terganggu"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path>
            </svg>
          </button>
        </div>
    </div>
  );
};

export default Ekonomi;
