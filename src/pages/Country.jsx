import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const filteredCountries = countries
    .filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    .filter(c => filter === "all" ? true : c.region === filter);

  return (
    <section className="container mx-auto p-6">
      <SearchFilter 
        search={search} setSearch={setSearch} 
        filter={filter} setFilter={setFilter} 
        countries={countries} setCountries={setCountries}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCountries.map((c, i) => <CountryCard country={c} key={i} />)}
      </ul>
    </section>
  );
};
