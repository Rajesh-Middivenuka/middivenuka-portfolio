import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
const Contact = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        import.meta.env.VITE_e.target,
        api_key
      )
      .then((result) => {
        alert("message sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops something went wrong. please try again"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150 m-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={fromData.name}
                placeholder="name..."
                className="w-full bg-white/5 border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...fromData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={fromData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...fromData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                value={fromData.message}
                onChange={(e) =>
                  setFormData({ ...fromData, message: e.target.value })
                }
                className="w-full bg-white/5 border-white/10 px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition-transform duration-300 relative overflow-hidden transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
