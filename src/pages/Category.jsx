import { useParams } from "react-router-dom";
import News from "./News";
import Hukum from "./Hukum";
import Ekonomi from "./Ekonomi";
import Politik from "./Politik";
import Keuangan from "./Keuangan";
import Internasional from "./Internasional";

const Category = () => {
  const { category } = useParams();
  switch(category){
    case 'news':
        return <News category={category} />
    case 'hukum':
        return <Hukum category={category} />
    case 'ekonomi':
        return <Ekonomi category={category} />
    case 'politik':
        return <Politik category={category} />
    case 'keuangan':
        return <Keuangan category={category} />
    case 'internasional':
        return <Internasional category={category} />
        default: return ""
  }
};

export default Category;
