export const Contact = () => {


const handleFormSubmit = (e) => {

  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  console.log(formData); 
  e.target.reset(); 
  
};

  return (
    <section className="flex justify-center my-10 px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-[10px] border-[3px] border-yellow-400 shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">Contact Us</h2>
        <p className="text-blue-200 mb-6 text-center">We are always here to help you.</p>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            required
            className="border border-yellow-400 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:ring-yellow-300 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-yellow-400 px-4 py-2 rounded-md  text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:ring-yellow-300 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="border border-yellow-400 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:ring-yellow-300 transition"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-md  hover:bg-yellow-500 hover:scale-105 transition transform duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
