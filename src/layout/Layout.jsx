import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { motion } from "motion/react";

function Layout() {
  return (
    <div className="bg-main-bg">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <FooterSection />
    </div>
  );
}

export default Layout
