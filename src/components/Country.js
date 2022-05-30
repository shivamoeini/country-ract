import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../country.css";

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
        Back
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
            currency,
            languages,
            borders,
            maps,
            subregion,
          } = country[0];

          const lang = Object.keys(languages)[0];

          const key = Object.keys(name.nativeName)[0];

          return (
            <article key={uuidv4()}>

              <div className="country-details">
              <div className="flag">
                <img src={flags.png} alt={name.common} />
              </div>
                <div>
                  <h2>{name.common}</h2>
                  <h5>
                    Native Name: <span>{name.nativeName[key].common}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                  <h5>
                    Languages: <span>{lang}</span>
                  </h5>
                </div>
              </div>

              <div>
                <h3>Border Countries: {borders}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;