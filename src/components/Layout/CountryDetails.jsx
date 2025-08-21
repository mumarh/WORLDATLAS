import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if(res.status === 200) setCountry(res.data[0]);
    });
  }, []);

  if(isPending || !country) return <Loader />;

  return (
    <section className="container mx-auto p-6">
      <div className="md:flex gap-8">
        <img src={country.flags.svg} alt={country.flags.alt} className="w-full md:w-1/2 rounded shadow"/>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{country.name.official}</h2>
          <p><span className="font-semibold">Native Names:</span> {Object.values(country.name.nativeName).map(n => n.common).join(", ")}</p>
          <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
          <p><span className="font-semibold">Capital:</span> {country.capital}</p>
          <p><span className="font-semibold">Top Level Domain:</span> {country.tld[0]}</p>
          <p><span className="font-semibold">Currencies:</span> {Object.values(country.currencies).map(c => c.name).join(", ")}</p>
          <p><span className="font-semibold">Languages:</span> {Object.values(country.languages).join(", ")}</p>
          <NavLink to="/country">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
