import headerImage from "./image/oil-img.jpg";
import liquimoly from "./image/liquimoly.png";
import castrol from "./image/castrol.png";
import total from "./image/total.png";
import shell from "./image/shell.png";

import { CustomPageHeader } from "../../../../customPageComponent/customPageHeader/CustomPageHeader";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      img1={liquimoly}
      img2={castrol}
      img3={total}
      img4={shell}
      partsName="Моторно Масло"
      text=" Моторно масло се користи за подмачкување на мотори со внатрешно
              согорување.Тие обично се состојат од базни масла засилено со разни
              адитиви, особено адитиви против абење, подобрувачи на индексот на
              вискозност.Главната функција на моторното масло е да го намали
              абењето на подвижните делови и да го чисти моторот од тиња и
              лакови."
    />
  );
};
