'use client';

import Logo from '@/assets/PT. TEKNO JAYA - SOAL UUK KELAS XI.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/kontak', label: 'Kontak' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={Logo}
                alt="Logo" 
                width={600} 
                height={500} 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">
                
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;