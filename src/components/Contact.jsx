import React from "react";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/developer_chandrika_",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chandrika-vishwakarma",
  },
  {
    name: "GitHub",
    url: "https://github.com/ChandrikaVishwakarma369",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-20 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg mb-6">
            Whether you have a project, a job opportunity, or just want to
            connect — I’d love to hear from you. Feel free to reach out through
            the form or via my social platforms.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 mt-4">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 text-lg font-medium hover:text-cyan-400 transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-2px bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#0b0b0b] rounded-2xl p-8 sm:p-10 shadow-xl w-full max-w-md mx-auto">
          <form className="flex flex-col gap-6">

            <div>
              <label className="text-gray-400 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
