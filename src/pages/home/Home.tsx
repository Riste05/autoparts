import { Header } from "./component/header/Header";
import { InfoBar } from "./component/InfoBar/InfoBar";
import { CategoryParts } from "./component/kategorii/CategoryParts";
import { InfoText } from "./component/InfoText/InfoText";
import { Brends } from "./component/brend/Brends";
import { Banner } from "./component/banner/Banner";
import { InfoPurchase } from "./component/infoPurchase/InfoPurchase";
import { Footer } from "./component/footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <InfoBar />
      <CategoryParts />
      <InfoText />
      <Brends />
      <Banner />
      <InfoPurchase />
      <Footer />
    </>
  );
};
