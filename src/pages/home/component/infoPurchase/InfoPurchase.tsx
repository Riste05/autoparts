import purchaseStyle from "./infopurchase.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faTruckFast,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export const InfoPurchase = () => {
  return (
    <div className={purchaseStyle.container}>
      <div className={purchaseStyle.item}>
        <FontAwesomeIcon icon={faWarehouse} className={purchaseStyle.img} />
        <div className={purchaseStyle.content}>
          <h3>Голем спектар на производи</h3>
          <p>Сите видови на авто делови за сите типови на возила</p>
        </div>
      </div>
      <div className={purchaseStyle.item}>
        <FontAwesomeIcon icon={faTruckFast} className={purchaseStyle.img} />
        <div className={purchaseStyle.content}>
          <h3>Брза достава 1-2 работни дена</h3>
          <p>
            Во зависнот во кој дел од денот се прави нарачката доставата е за 1
            или 2 дена
          </p>
        </div>
      </div>
      <div className={purchaseStyle.item}>
        <FontAwesomeIcon icon={faRotateLeft} className={purchaseStyle.img} />
        <div className={purchaseStyle.content}>
          <h3>Рок на враќање 14 дена</h3>
          <p>
            Доколку производот се врати во првобитната состајба (да не е
            монтиран и во неоштетана опаковка) ќе ви бидат вратени парите
          </p>
        </div>
      </div>
    </div>
  );
};
