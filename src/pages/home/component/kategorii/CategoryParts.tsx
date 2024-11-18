import { useState, useEffect } from "react";
import categoryStyle from "./CategoryParts.module.css";
import categoryData from "../../../../data/categoryData";

type CategoryPartsProps = {
  allCategory: boolean;
};

export const CategoryParts = ({ allCategory }: CategoryPartsProps) => {
  const [data, setData] = useState(categoryData);

  useEffect(() => {
    return !allCategory
      ? setData((element) => element.slice(0, 6))
      : setData(categoryData);
  }, [allCategory]);

  return (
    <section className={categoryStyle.section}>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>Категории на авто делови</h1>

        <div className={categoryStyle.category}>
          {data.map((item) => (
            <div className={categoryStyle.item} key={item.info}>
              <img src={item.img} alt="image" />
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
