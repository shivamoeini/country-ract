import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryData();
  }, []);

  return (
    <>
      <Link to={"/"} className="btn btn-light">
        <i className="fas fa-arrow-left"></i>
        Back Home
      </Link>
      <section className="country">
        {country.map((item) => {
          const {
            name,
            population,
            region,
            capital,
            flags,
            nativeName,
            subregion,
            currencies,
            languages,
            borders,
          } = country;

          const key=Object.keys(name.nativeName)[0];
          return (
            <article key={uuidv4()}>
              <div className="flag">
                <img src={flags.png} alt={name.common} />
              </div>

              <div className="country-details">
                <h2>{name.nativeName[key].common}</h2>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
