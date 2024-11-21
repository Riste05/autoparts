import { CustomComponent } from "./custom/CustomComponent";

import data from "../../../../data/masloBrendData";

export const MasloCategory = () => {
  return (
    <>
      <CustomComponent data={data.maslo} title="Моторно Масло" masloPath />
      <CustomComponent data={data.aditivi} title="Адитиви" />
    </>
  );
};
