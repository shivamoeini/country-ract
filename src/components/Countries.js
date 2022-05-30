import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    };

    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country;
          return (
            <Link to={`/countries/${name.common}`} className="btn">
              <article key={uuidv4()}>
                <div>
                  <img src={flags.png} alt={name.common} />
                  <div className="details">
                    <h3>{name.common}</h3>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
