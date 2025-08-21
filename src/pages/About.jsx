import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Here are the Interesting Facts we’re proud of
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {countryFacts.map((country) => (
          <div key={country.id} className="bg-blue-100 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{country.countryName}</h3>
            <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            <p><span className="font-semibold">Population:</span> {country.population}</p>
            <p><span className="font-semibold">Interesting Fact:</span> {country.interestingFact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
