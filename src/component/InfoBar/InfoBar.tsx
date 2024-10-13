import barStyle from "./infoBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faOilCan,
  faAddressBook,
  faTruckFast,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export const InfoBar = () => {
  return (
    <article className={barStyle.article}>
      <div className={barStyle.container}>
        <div className={barStyle.info}>
          <FontAwesomeIcon icon={faCarSide} className={barStyle.icon} />
          <p>Avto Delovi</p>
        </div>
        <div className={barStyle.info}>
          <FontAwesomeIcon icon={faOilCan} className={barStyle.icon} />
          <p>Masla</p>
        </div>
        <div className={barStyle.info}>
          <FontAwesomeIcon icon={faAddressBook} className={barStyle.icon} />
          <p>Kontakt</p>
        </div>
        <div className={barStyle.info}>
          <FontAwesomeIcon icon={faTruckFast} className={barStyle.icon} />
          <p>Dostava</p>
        </div>
        <div className={barStyle.info}>
          <FontAwesomeIcon icon={faComments} className={barStyle.icon} />
          <p>Prasanja</p>
        </div>
      </div>
    </article>
  );
};
