'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineNavigateNext } from "react-icons/md";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Experties", label: "Expertise" },
    { href: "/Sustainability", label: "Sustainability" },
    { href: "/Quality", label: "Quality" },
    { href: "Plan&Activities", label: "Plan & Activities" },
    { href: "DigitalStudio", label: "Digital Studio" },
    { href: "Accrediation", label: "Accrediation" },
    { href: "/Contact", label: "Contact us" },
];

const NavItem = ({ href, label, isMobile, closeMenu }) => (
    <Link
        href={href}
        className={`text-gray-600 hover:text-black font-medium ${isMobile ? '' : 'text-sm'}`}
        onClick={closeMenu}
    >
        <div className={`flex justify-between mt-5 lg:mt-0 ${isMobile ? 'w-full' : ''}`}>
            {label}
            {isMobile && <MdOutlineNavigateNext className='h-7 w-7 text-gray-600' />}
        </div>
    </Link>
);

const MobileMenuButton = ({ isOpen, toggleMenu }) => (
    <button onClick={toggleMenu} className="text-white">
        {isOpen ? (
            <div className='flex gap-3 items-center'>
                <FaTimes className="h-5 w-5 text-black " />
            </div>
        ) : (
            <div className='flex gap-3 items-center'>
                <FaBars className="h-5 w-5 text-black " />
            </div>
        )}
    </button>
);

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isSearchOpen) setIsSearchOpen(false);
    };

    const closeMenu = () => {
        setIsOpen(false); 
    };

    return (
        <nav className="p-5 border-b-2 border-gray-200">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Eastern Garments Logo"
                        className="h-10 lg:h-12"
                    />
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>

                {/* Menu items for desktop and tablet */}
                <div className="hidden lg:flex space-x-5 items-center">
                    {navItems.map((item, index) => (
                        <NavItem key={index} href={item.href} label={item.label} isMobile={false} />
                    ))}
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            >
                <div className="flex justify-end p-6">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
                <div className="space-y-4 px-6 overflow-y-scroll max-h-screen">
                    {navItems.map((item, index) => (
                        <div key={index}>
                            <NavItem href={item.href} label={item.label} isMobile={true} closeMenu={closeMenu} />
                            <hr className='mt-5' />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
