import { Header } from "./component/header/Header";
import { InfoBar } from "./component/InfoBar/InfoBar";
import { CategoryParts } from "./component/kategorii/CategoryParts";
import { InfoText } from "./component/InfoText/InfoText";
import { Brends } from "./component/brend/Brends";

export const App = () => {
  return (
    <>
      <Header />
      <InfoBar />
      <CategoryParts />
      <InfoText />
      <Brends />
    </>
  );
};
