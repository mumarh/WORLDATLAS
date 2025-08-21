import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="bg-gray-800 text-yellow-300 rounded-md shadow-md hover:shadow-xl transition p-4 flex flex-col">
      <img src={flags.svg} alt={flags.alt} className="w-full h-40 object-cover rounded-md mb-4"/>
      <p className="font-bold text-lg mb-2">{name.common.length > 10 ? name.common.slice(0,10)+"..." : name.common}</p>
      <p><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
      <p><span className="font-semibold">Region:</span> {region}</p>
      <p><span className="font-semibold">Capital:</span> {capital[0]}</p>
      <NavLink to={`/country/${name.common}`}>
        <button className="mt-4 px-4 py-2 rounded-md bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition">
          Read More
        </button>
      </NavLink>
    </li>
  );
};
