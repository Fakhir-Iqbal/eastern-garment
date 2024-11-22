'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineNavigateNext, MdSearch } from "react-icons/md"; // Updated imports

const NavItem = ({ href, label, isMobile }) => (
    <a
        href={href}
        className={`text-gray-600 hover:text-black font-bold ${isMobile ? '' : 'text-sm'}`}
    >
        <div className={`flex justify-between mt-5 md:mt-0 ${isMobile ? 'w-full' : ''}`}>
            {label}
            {isMobile && <MdOutlineNavigateNext className='h-7 w-7 text-gray-600' />}
        </div>
    </a>
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

    // Toggle menu and close search when menu opens
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isSearchOpen) setIsSearchOpen(false); // Close search when menu is toggled
    };

    // Toggle search and close menu when search icon is clicked
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isOpen) setIsOpen(false); // Close menu when search is toggled
    };

    return (
        <nav className="p-7">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo.png" // Replace with your logo's path
                        alt="Eastern Garments Logo"
                        className="h-10 md:h-12" // Adjust the size as needed
                    />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>

                {/* Menu items for desktop and tablet */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavItem href="#" label="Home" />
                    <NavItem href="#" label="About" />
                    <NavItem href="#" label="Expertise" />
                    <NavItem href="#" label="Sustainability" />
                    <NavItem href="#" label="Quality" />
                    <NavItem href="#" label="Contact us" />
                </div>

                {/* Search Icon for Desktop */}
                <div className="hidden md:flex items-center">
                    <button onClick={toggleSearch} className="text-gray-600 hover:text-black">
                        <MdSearch className="h-6 w-6" />
                    </button>
                    {/* Add search bar or functionality here if needed */}
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            >
                <div className="flex justify-end p-6">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
                <div className="space-y-4 pt-8 px-6">
                    <NavItem href="#" label="Home" isMobile />
                    <hr />
                    <NavItem href="#" label="About" isMobile />
                    <hr />
                    <NavItem href="#" label="Expertise" isMobile />
                    <hr />
                    <NavItem href="#" label="Sustainability" isMobile />
                    <hr />
                    <NavItem href="#" label="Quality" isMobile />
                    <hr />
                    <NavItem href="#" label="Contact us" isMobile />
                </div>
            </div>

            {/* Mobile Search Icon */}
            <div className={`md:hidden fixed top-4 right-4 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <button onClick={toggleSearch} className="text-gray-600 hover:text-black">
                    <MdSearch className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
}
