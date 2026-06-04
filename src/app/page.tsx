"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Clock,
  Truck,
  Cake,
  Leaf,
  ArrowRight,
  Menu
} from "lucide-react";

// Animation variants for Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function JedenCakesDemo() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3728] font-sans selection:bg-[#D97706] selection:text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#3F312B] shadow-2xl border-b border-[#D97706]/20">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          
          {/* Logo Injection */}
          <a href="#" className="shrink-0 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Jeden The cake expert" 
              className="h-12 md:h-14 w-auto object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Upgraded Links with Sliding Underline Hover Effect */}
          <div className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-[#FDFBF7]">
            {['Cakes', 'About', 'Branches', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-2">
                <span className="group-hover:text-[#D97706] transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97706] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Premium Navbar CTA (Desktop Only) */}
          <div className="hidden md:block">
            <button className="bg-[#D97706] text-white px-7 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-[#FDFBF7] hover:text-[#4A3728] transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_20px_rgba(217,119,6,0.6)]">
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Menu (Mobile Only) */}
          <div className="md:hidden flex items-center">
            <button className="text-[#FDFBF7] hover:text-[#D97706] transition-colors focus:outline-none p-1">
              <Menu size={30} />
            </button>
          </div>
          
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#2A1F17]">
        {/* Placeholder for actual hero background image */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-[#FDFBF7] mb-6 drop-shadow-lg"
          >
            Crafting Sweet Moments{" "}
            <span className="text-[#D97706]">Since Generations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#FDFBF7] mb-10 font-light"
          >
            Freshly baked cakes for every celebration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#D97706] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b05f03] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              Explore Cakes <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-[#FDFBF7] text-[#FDFBF7] px-8 py-4 rounded-full font-medium hover:bg-[#FDFBF7] hover:text-[#4A3728] transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAKES */}
      <section id="cakes" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Our Signature Creations
          </h2>
          <div className="h-1 w-24 bg-[#D97706] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            { name: "Chocolate Truffle Cake", price: "₹850", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop" },
            { name: "Red Velvet Cake", price: "₹950", img: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=500&auto=format&fit=crop" },
            { name: "Black Forest Cake", price: "₹750", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop" },
            { name: "Butterscotch Delight", price: "₹800", img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=500&auto=format&fit=crop" },
            { name: "Fresh Fruit Cake", price: "₹1100", img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&auto=format&fit=crop" },
            { name: "Pineapple Celebration", price: "₹700", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop" }
          ].map((cake, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-[0_20px_40px_rgba(217,119,6,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cake.img} 
                  alt={cake.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#D97706]/20 transition-all duration-500 z-10" />
              </div>
              <div className="p-6 text-center border-t-4 border-[#D97706] grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#3F312B] group-hover:text-[#D97706] transition-colors duration-300">{cake.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Perfectly baked, richly layered.</p>
                </div>
                <p className="text-[#D97706] font-semibold text-lg">Starts at {cake.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#f4ebd9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: Leaf,
                title: "Fresh Ingredients",
                desc: "Premium quality guaranteed",
              },
              {
                icon: Truck,
                title: "Same Day Delivery",
                desc: "Fresh to your doorstep",
              },
              {
                icon: Cake,
                title: "Custom Designs",
                desc: "Your dream cake, realized",
              },
              {
                icon: MapPin,
                title: "Multiple Locations",
                desc: "Always near you in Mumbai",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#4A3728] text-[#FDFBF7] p-4 rounded-full mb-4">
                  <feature.icon size={28} />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & TESTIMONIALS (Split Layout) */}
      <section
        id="about"
        className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-6">
            Our Legacy of Sweetness
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Jeden Cakes, baking isn't just a process; it's a tradition. For
            generations, we have been a part of your celebrations, big and
            small. We blend time-honored recipes with modern artistry to deliver
            cakes that not only look spectacular but taste divine.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Every cake is baked fresh daily, using only the finest ingredients
            to ensure that quality and trust remain the cornerstone of our
            brand.
          </p>
          <img
            src="https://images.unsplash.com/photo-1556217658-0099042b4d32?w=800&auto=format&fit=crop"
            alt="Bakery interior"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-serif font-bold mb-8 text-center lg:text-left">
            What Our Customers Say
          </h2>
          {[
            {
              name: "Priya Sharma",
              text: "The customized chocolate truffle cake for my daughter's birthday was phenomenal. Highly recommend!",
            },
            {
              name: "Rahul Desai",
              text: "Jeden never disappoints. The freshness of their fruit cake is unmatched in Mumbai.",
            },
            {
              name: "Anita Kapoor",
              text: "Beautiful designs and timely delivery. They are my go-to bakery for every family event.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
              </div>
              <div>
                <div className="flex text-[#D97706] mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-2">"{review.text}"</p>
                <p className="font-bold text-sm text-[#4A3728]">
                  - {review.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* BRANCHES */}
      <section id="branches" className="py-20 bg-[#4A3728] text-[#FDFBF7] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Visit Our Stores
            </h2>
            <p className="text-[#D97706] font-medium">
              Find a Jeden Bakery near you in Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Andheri West", "Bandra", "Borivali"].map((branch, i) => (
              <div
                key={i}
                className="border border-gray-600 rounded-2xl p-8 hover:bg-[#3d2d21] transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#D97706]">
                  {branch}
                </h3>
                <div className="space-y-3 text-sm font-light">
                  <p className="flex items-center gap-3">
                    <MapPin size={18} /> Shop 4, Main Link Road, {branch},
                    Mumbai
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={18} /> +91 98765 43210
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock size={18} /> 9:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-[#D97706] text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Let's Talk Cakes
            </h2>
            <p className="mb-8 font-light leading-relaxed text-white/90">
              Planning a wedding, corporate event, or a special birthday? Drop
              us a message, and our team will get back to you shortly.
            </p>
            <div className="space-y-4 font-medium">
              <p className="flex items-center gap-4">
                <Mail /> info@jedencakes.com
              </p>
              <p className="flex items-center gap-4">
                <Phone /> 1800-JEDEN-BAKES
              </p>
            </div>
          </div>
          <div className="md:w-7/12 p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] bg-gray-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] bg-gray-50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] bg-gray-50"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button className="w-full bg-[#4A3728] text-white font-bold py-4 rounded-xl hover:bg-[#34261c] transition-colors shadow-md">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3F312B] text-[#FDFBF7] pt-20 pb-10 px-6 border-t-[6px] border-[#D97706] relative overflow-hidden">
        {/* Subtle background glow to remove the "boring" flat look */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706] opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Col 1: Logo & Brand Story */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="Jeden The cake expert"
              className="h-20 w-auto object-contain -ml-4"
            />
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Crafting sweet moments for generations. Baked fresh daily with
              premium ingredients to make your celebrations unforgettable across
              Mumbai.
            </p>
          </div>

          {/* Col 2: Elegant Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-[#D97706] mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-gray-300 font-medium uppercase tracking-wider">
              <li>
                <a
                  href="#cakes"
                  className="hover:text-[#D97706] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-[#D97706] transition-all duration-300"></span>{" "}
                  Signature Cakes
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#D97706] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-[#D97706] transition-all duration-300"></span>{" "}
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#branches"
                  className="hover:text-[#D97706] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-[#D97706] transition-all duration-300"></span>{" "}
                  Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 & 4: Newsletter Widget (Creates visual interest) */}
          <div className="lg:col-span-2 bg-[#2A1F17] p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <h4 className="text-xl font-serif font-bold text-white mb-2">
              Join the Sweet Club
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe for exclusive offers, new flavor alerts, and bakery
              news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1A130D] text-white px-5 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-all placeholder-gray-600"
              />
              <button className="bg-[#D97706] text-white px-8 py-3 rounded-xl font-bold tracking-wide hover:bg-[#b05f03] transition-colors whitespace-nowrap shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-gray-500 relative z-10">
          <p>
            &copy; {new Date().getFullYear()} Jeden Cakes. All rights reserved.
          </p>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-[#D97706] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#D97706] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#D97706] transition-colors">
              Twitter
            </a>
          </div>

          <p className="text-gray-600">
            Demo crafted by{" "}
            <span className="text-gray-400 font-medium">AY Builds</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
