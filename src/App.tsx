import { Header } from "./component/header/Header";
import { InfoBar } from "./component/InfoBar/InfoBar";
import { CategoryParts } from "./component/kategorii/CategoryParts";
import { InfoText } from "./component/InfoText/InfoText";
import { Brends } from "./component/brend/Brends";
import { Banner } from "./component/banner/Banner";

export const App = () => {
  return (
    <>
      <Header />
      <InfoBar />
      <CategoryParts />
      <InfoText />
      <Brends />
      <Banner />
    </>
  );
};
