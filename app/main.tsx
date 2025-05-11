"use client";

import { motion } from "framer-motion";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export default function Main({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 antialiased max-w-xl mx-4 lg:mx-auto"
    >
      <Navbar />
      {children}
      <Footer />
    </motion.main>
  );
}
