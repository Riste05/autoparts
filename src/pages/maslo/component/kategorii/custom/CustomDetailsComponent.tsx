import { useParams } from "react-router-dom";

import { CustomPageHeader } from "../../../../../customPageComponent/customPageHeader/CustomPageHeader";

import data from "../../../../../data/masloBrendData";

export const CustomDetailsComponent = () => {
  const params = useParams();

  return (
    <>
      {data.maslo
        .filter((item) => item.name === params.masloID)
        .map((ele) => (
          <CustomPageHeader
            key={ele.name}
            headerImage={ele.headerImg}
            partsName={ele.name}
            oneImage
            img1={ele.bottle}
          />
        ))}
      {data.aditivi
        .filter((item) => item.name === params.masloID)
        .map((ele) => (
          <CustomPageHeader
            key={ele.name}
            headerImage={ele.headerImg}
            partsName={ele.name}
            oneImage
            img1={ele.bottle}
          />
        ))}
    </>
  );
};
