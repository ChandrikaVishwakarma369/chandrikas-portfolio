import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const socials = [
  { name: "Instagram", url: "https://instagram.com/developer_chandrika_" },
  { name: "LinkedIn", url: "https://linkedin.com/in/chandrika-vishwakarma" },
  { name: "GitHub", url: "https://github.com/ChandrikaVishwakarma369" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    // Map keys according to EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_8f5qpeu",   // Replace with your EmailJS Service ID
        "template_nlkz83e",  // Replace with your EmailJS Template ID
        templateParams,
        "4jXOHCW8UUAGnA-qx"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="min-h-screen bg-[#050505] flex items-start md:items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-24 md:py-16">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-start md:justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Let’s Connect
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Whether you have a project, a job opportunity, or just want to connect —
            I’d love to hear from you. Feel free to reach out via email, phone, or my social platforms.
          </p>
          <div className="text-gray-300 space-y-2 mb-6 text-sm sm:text-base break-words">
            <p>
              <span className="text-cyan-400 font-medium">Email:</span>{" "}
              <a href="mailto:chandrikavishwakarma89@gmail.com" className="hover:text-cyan-400 transition break-all">
                chandrikavishwakarma89@gmail.com
              </a>
            </p>
            <p>
              <span className="text-cyan-400 font-medium">Phone:</span>{" "}
              <a href="tel:+917828513259" className="hover:text-cyan-400 transition">
                +91 7828513259
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-4">
            {socials.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="relative text-gray-400 text-sm sm:text-base font-medium hover:text-cyan-400 transition">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#0b0b0b] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div>
              <label className="text-gray-400 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full mt-2 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 resize-none transition"
              ></textarea>
            </div>

            <button type="submit" className="mt-3 sm:mt-4 bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-500 transition">
              Send Message
            </button>

            {status && <p className="text-center mt-2 text-sm text-gray-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
