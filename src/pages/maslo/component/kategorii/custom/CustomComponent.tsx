import { Fragment } from "react";

import { Link } from "react-router-dom";

import categoryStyle from "../../../../home/component/kategorii/CategoryParts.module.css";

type CustomComponentProps = {
  data: {
    id: string;
    name: string;
    img: string;
  }[];
  title: string;
  masloPath?: boolean;
};

export const CustomComponent = ({
  data,
  title,
  masloPath,
}: CustomComponentProps) => {
  return (
    <section className={categoryStyle.section}>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>{title}</h1>

        <div className={categoryStyle.category}>
          {data.map((item) => (
            <Fragment key={item.id}>
              <Link
                to={
                  masloPath
                    ? `/maslo/${item.name}`
                    : `/maslo/aditiv/${item.name}`
                }
              >
                <div className={categoryStyle.item}>
                  <img src={item.img} alt="image" />
                  <p>{item.name}</p>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
