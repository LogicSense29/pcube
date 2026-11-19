import React, { useState } from "react";
import { motion } from "motion/react";
import MainButton from "../components/MainButton";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@pcube.studio",
      link: "mailto:hello@pcube.studio"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Vancouver, Canada",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/thepcubestudio" },
    { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/thepcubestudio" },
    { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/company/thepcubestudio" }
  ];

  return (
    <div className="bg-main-bg pt-24 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black py-24 px-6 md:px-20 lg:px-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            Let's build <span className="text-gradient">Something Great</span> together.
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Let's discuss how PCUBE can bring your vision to life.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                Contact Info
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Whether you're starting a new brand or redefining an existing one, our team is here to help you achieve aesthetic excellence and purposeful impact.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.title}</h4>
                    <p className="text-lg font-bold text-slate-800">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-[60px] blur-3xl opacity-50 -z-10" />
            <div className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl border border-slate-50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800 uppercase tracking-widest ml-1">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-800 uppercase tracking-widest ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-black uppercase tracking-[3px] py-6 rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map or CTA Section */}
      <div className="bg-black py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            The studio where <span className="text-gradient">creativity</span> <br className="hidden md:block" /> meets structural integrity.
        </h2>
        <p className="text-slate-400 text-lg mb-12">Vancouver · Globally Remote</p>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
