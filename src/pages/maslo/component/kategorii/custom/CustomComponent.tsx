import { Link } from "react-router-dom";

import categoryStyle from "../../../../home/component/kategorii/CategoryParts.module.css";

type CustomComponentProps = {
  data: {
    id: string;
    name: string;
    img: string;
  }[];
  title: string;
};

export const CustomComponent = ({ data, title }: CustomComponentProps) => {
  return (
    <section className={categoryStyle.section}>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>{title}</h1>

        <div className={categoryStyle.category}>
          {data.map((item) => (
            <>
              <Link to={`/maslo/${item.name}`}>
                <div className={categoryStyle.item} key={item.id}>
                  <img src={item.img} alt="image" />
                  <p>{item.name}</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
