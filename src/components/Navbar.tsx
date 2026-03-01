"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import codesquadLogo from "../assets/codesquadlogo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={codesquadLogo} alt="CodeSquad" className="h-36 w-auto" />
          </Link>

          {/* Desktop nav - centered */}
          <div className="hidden md:flex items-center gap-7 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className={`text-[13px] font-medium transition-colors duration-200 ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/workflows" 
              className={`text-[13px] font-medium transition-colors duration-200 ${
                pathname === "/workflows" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Workflows
            </Link>
          </div>

          {/* CTA Button - desktop */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => window.open("https://calendly.com/code_squad/30min", "_blank")}
              className="group relative px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-[13px] font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Create your customized agent
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className={`block text-sm font-medium py-1 ${
                  pathname === "/" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/workflows" 
                className={`block text-sm font-medium py-1 ${
                  pathname === "/workflows" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Workflows
              </Link>
              <button
                type="button"
                onClick={() => window.open("https://calendly.com/code_squad/30min", "_blank")}
                className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span className="flex items-center justify-center gap-1.5">
                  Create your customized agent
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
