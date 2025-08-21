import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Explore the World, One Country at a Time.
          </h1>
          <p className="mb-6">Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
          <NavLink to="/country">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <img src="/world.png" alt="world" className="w-full max-h-96 object-cover rounded"/>
      </div>
    </section>
  );
};
