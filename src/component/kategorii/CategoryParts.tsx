import categoryStyle from "./CategoryParts.module.css";

import amortizeri from "./image/amortizeri.jpg";
import filtri from "./image/filtri.jpg";
import kais from "./image/kais.jpg";
import maslo from "./image/maslo.jpg";
import menuvac from "./image/menuvac.jpg";
import sopiranje from "./image/sopiranje.jpg";

export const CategoryParts = () => {
  return (
    <section>
      <div className={categoryStyle.container}>
        <h1 className={categoryStyle.text}>Kategorii na avto delovi</h1>
        <div className={categoryStyle.category}>
          <div className={categoryStyle.item}>
            <img src={sopiranje} alt="image" />
            <p>Sistem za sopiranje</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={filtri} alt="image" />
            <p>Filtri</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={kais} alt="image" />
            <p>Kais</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={menuvac} alt="image" />
            <p>Menuvac</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={amortizeri} alt="image" />
            <p>Amortizeri</p>
          </div>
          <div className={categoryStyle.item}>
            <img src={maslo} alt="image" />
            <p>Maslo</p>
          </div>
        </div>
      </div>
    </section>
  );
};
