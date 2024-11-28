import cardPriceStyle from "./cardPrice.module.css";

type PriceProps = {
  data: {
    id: string;
    img: string;
    tip: string;
    cena: string;
  }[];
};

export const CardPrice = ({ data }: PriceProps) => {
  return (
    <section>
      <div className={cardPriceStyle.container}>
        <h1 className={cardPriceStyle["header-text"]}>Моторно Масло</h1>
        <div className={cardPriceStyle.category}>
          {data.map((item) => (
            <div className={cardPriceStyle.item} key={item.id}>
              <div className={cardPriceStyle.image}>
                <img src={item.img} alt="image" />
              </div>
              <p className={cardPriceStyle.text}>{item.tip}</p>
              <span className={cardPriceStyle.price}>{item.cena} МКД</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
