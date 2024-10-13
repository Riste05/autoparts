import textStyle from "./InfoText.module.css";

export const InfoText = () => {
  return (
    <section>
      <article className={textStyle.container}>
        <h1 className={textStyle.text}>Informacii</h1>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            sequi reprehenderit neque facilis aut modi consectetur amet quae
            quidem sed?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, harum
            quaerat vel debitis quam consequuntur.
          </p>
          <br />
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, ipsa?
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              dolor!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              esse?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              adipisci?
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
              molestias.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              cum?
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
