import { useState } from "react";

import categoryStyle from "./CategoryParts.module.css";

import amortizeri from "./image/amortizeri.jpg";
import filtri from "./image/filtri.jpg";
import kais from "./image/kais.jpg";
import maslo from "./image/maslo.jpg";
import menuvac from "./image/menuvac.jpg";
import sopiranje from "./image/sopiranje.jpg";

export const CategoryParts = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={categoryStyle.section}>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>Категории на авто делови</h1>

        <div className={categoryStyle.category}>
          <div className={categoryStyle.item}>
            <img src={sopiranje} alt="image" />
            <p>Кочионен систем</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={filtri} alt="image" />
            <p>Филтри</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={kais} alt="image" />
            <p>Каиш</p>
          </div>
        </div>
        {open && (
          <div className={categoryStyle.category}>
            <div className={categoryStyle.item}>
              <img src={menuvac} alt="image" />
              <p>Менувач</p>
            </div>
            <div className={categoryStyle.item}>
              <img src={amortizeri} alt="image" />
              <p>Амортизери</p>
            </div>
            <div className={categoryStyle.item}>
              <img src={maslo} alt="image" />
              <p>Масло</p>
            </div>
          </div>
        )}
      </div>
      <div className={categoryStyle.btn}>
        <button onClick={() => setOpen(!open)}>
          {open ? "Прикажи помалку" : "Прикажи повеќе"}
        </button>
        {open && <button>Сите</button>}
      </div>
    </section>
  );
};
