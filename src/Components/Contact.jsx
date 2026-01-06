import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 start loader

    emailjs
      .sendForm(
        "service_5s4jgki",
        "template_h60jtvo",
        formRef.current,
        "iPZTS2tFKo5glwePo"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current.reset();
          setLoading(false); // 🔹 stop loader
        },
        (error) => {
          toast.error("Failed to send message ❌");
          console.log(error.text);
          setLoading(false); // 🔹 stop loader
        }
      );
  };

  return (
    <section id="contact" className="bg-[#111827] py-28">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Have a project or opportunity? Send me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="text-gray-300">
            <p className="mb-6">
              I’m open to freelance work, collaborations, and full-time roles.
            </p>

            <div className="flex items-center gap-4">
              <MdEmail className="text-2xl text-cyan-400" />
              <a
                href="mailto:Saleemsherzad0@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                Saleemsherzad0@gmail.com
              </a>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              disabled={loading}
              className="w-full p-3 rounded-xl bg-[#0B0F19] text-white border border-white/10 focus:border-cyan-400 outline-none disabled:opacity-60"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              disabled={loading}
              className="w-full p-3 rounded-xl bg-[#0B0F19] text-white border border-white/10 focus:border-cyan-400 outline-none disabled:opacity-60"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              disabled={loading}
              className="w-full p-3 rounded-xl bg-[#0B0F19] text-white border border-white/10 focus:border-cyan-400 outline-none resize-none disabled:opacity-60"
            ></textarea>

            {/* 🔹 SEND BUTTON WITH LOADER */}
            <motion.button
              type="submit"
              aria-label="Send message"
              disabled={loading}
              whileTap={{ scale: 0.96 }}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-3 transition
                ${
                  loading
                    ? "bg-cyan-400/60 cursor-not-allowed text-black"
                    : "bg-cyan-400 hover:bg-cyan-300 text-black"
                }`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
