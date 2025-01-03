import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import PreviewArticle_Card from "../components/PreviewArticle_Card";
import fetchData from "../api/News";

const Hot = () => {
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
        <div className="text-[#F60E2A] text-xl xl:text-2xl font-black mt-2 ml-2">
          PALING HOT MINGGU INI
        </div>
        {/* Display news cards */}
        <div className="ml-1 grid grid-cols-2 gap-4 pb-4 md:ml-3 lg:pb-0 lg:grid-cols-4 mt-4">
          {data.map((item, index) => (
            <Card
              key={item.id || index} // Fallback to index as key if 'id' is not available
              id={item.id}
              title={item.title}
              image={item.image}
              // summary={item.summary} // Uncomment if summary is available
            />
          ))}
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
    </div>
  );
};

export default Hot;
