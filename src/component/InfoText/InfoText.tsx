import textStyle from "./InfoText.module.css";

export const InfoText = () => {
  return (
    <section>
      <article className={textStyle.container}>
        <h1 className={textStyle.text}>Informacii</h1>
        <div>
          <h3>
            Online prodovnica sto nudi sirok spektar na prozivodi za site vidovi
            na vozila.
          </h3>

          <h3>Uslovi za koristenje</h3>
          <div>
            <h4>Ceni</h4>
            <p>Cenite vo katalogot se so vklucen ddv</p>
          </div>

          <div>
            <h4>Naracka</h4>
            <p>
              Moze da se napravi preku chat-box, da ne iskontaktirate na nasiot
              telefonski broj ili da ni pisete na mail.
            </p>
          </div>

          <div>
            <h4>Isporaka</h4>
            <p>
              Naracanite prozivodi se dostavuvaat vo rok od 2-3 dena preku kargo
              ekspres.Sekoja naracka nad 3000 den e besplatna.Za naracka pod
              3000 den cenata na pratkata iznesuva 150 den
            </p>
          </div>

          <div>
            <h4>Plakanje</h4>
            <p>Proizvodot se plaka pri podiganje na pratkata(otkup)</p>
          </div>

          <div>
            <h4>Vrakanje</h4>
            <p>
              Секој наш продукт може да биде вратен или заменет во рок од 14
              дена. Делот не треба да биде монтиран и да биде со зачувана
              опаковка.При не практикување на овие услови како изгубена опаковка
              или монтиран продукт, Online има право да не го прима вратениот
              prozivod.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
