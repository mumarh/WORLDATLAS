export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => setSearch(event.target.value);
  const handleSelectChange = (event) => setFilter(event.target.value);

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sorted);
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 my-6">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        className="border border-yellow-400 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="flex space-x-2">
        <button
          onClick={() => sortCountries("asc")}
          className="border border-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries("des")}
          className="border border-yellow-400 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          Desc
        </button>
      </div>

      <select
        value={filter}
        onChange={handleSelectChange}
        className="border border-yellow-400 rounded-md px-4 py-2 bg-gray-900 text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};
