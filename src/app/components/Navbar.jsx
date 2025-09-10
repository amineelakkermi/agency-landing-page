'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const darkMode = theme === "dark";

  const menuItems = [
    { id: 'hero', text: 'Hero' },
    { id: 'about', text: 'About' },
    { id: 'features', text: 'Features' },
    { id: 'pricing', text: 'Pricing' },
    { id: 'contact', text: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed background w-full flex justify-center items-center h-[90px] z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""} `}>
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between py-4">
          <div className="text-primary kufam shrink-0 text-[25px] font-bold">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-primary">
              LAUNCHLY
            </a>
          </div>

          <nav className="flex gap-10 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary cursor-pointer text-lg font-medium duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.text}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTheme(darkMode ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden py-3">
          <div className="flex items-center justify-between w-full">
            <a 
              href="#home" 
              className="text-primary kufam shrink-0 text-[25px] font-bold"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              LAUNCHLY
            </a>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setTheme(darkMode ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={darkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 rounded-full text-primary cursor-pointer  transition-colors"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-primary" />
                ) : (
                  <FiMenu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 z-50">
              <div 
                className="absolute inset-0 bg-white/80 dark:bg-[#041e3c]/80 backdrop-blur-sm" 
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              ></div>
              <div className="absolute right-0 top-0 h-full w-full max-w-md background border-l border-gray-200 dark:border-gray-800 p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-12">
                  <a 
                    href="#home" 
                    className="text-2xl kufam font-bold text-primary"
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); setIsOpen(false); }}
                  >
                    LAUNCHLY
                  </a>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full cursor-pointer transition-colors text-primary dark:text-white"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-[70vh]">
                  <div className="w-full space-y-3">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full cursor-pointer text-center text-primary  py-4 px-6 rounded-xl transition-all duration-300 hover:translate-x-2"
                      >
                        {item.text}
                      </button>
                    ))}
                    <button 
                      onClick={() => setTheme(darkMode ? "light" : "dark")}
                      className="w-full flex items-center justify-center gap-3 text-primary  py-4 px-6 rounded-xl transition-all duration-300 hover:translate-x-2"
                    >
                      {darkMode ? (
                        <>
                          <FiSun size={20} className="text-yellow-400" />
                          <span className="font-medium">Mode clair</span>
                        </>
                      ) : (
                        <>
                          <FiMoon size={20} className="text-indigo-500" />
                          <span className="font-medium">Mode sombre</span>
                        </>
                      )}
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
