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
        <p>Golem spektar na prozivodi</p>
      </div>
      <div className={purchaseStyle.item}>
        <FontAwesomeIcon icon={faTruckFast} className={purchaseStyle.img} />
        <p>Brza Dostava 1-2 dena</p>
      </div>
      <div className={purchaseStyle.item}>
        <FontAwesomeIcon icon={faRotateLeft} className={purchaseStyle.img} />
        <p>Rok na vrakanje 14 dena</p>
      </div>
    </div>
  );
};
