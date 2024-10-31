import categoryStyle from "./CategoryParts.module.css";
import categoryData from "../../../../data/categoryData";

export const CategoryParts = () => {
  return (
    <section className={categoryStyle.section}>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>Категории на авто делови</h1>

        <div className={categoryStyle.category}>
          {categoryData.map((item) => (
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
