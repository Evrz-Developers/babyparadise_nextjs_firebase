"use client";

import React, { useState } from 'react';
import BlurFade from '../ui/blur-fade';

const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary text-primary-background">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <BlurFade delay={0.05} >
                            <div className="text-lg font-bold">{title}</div>
                        </BlurFade>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <BlurFade delay={0.05} key={item.path}>
                                    <a href={item.path} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-secondary-foreground">
                                        {item.label}
                                    </a>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <BlurFade delay={0.05}>
                            <button onClick={toggleMenu} className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-foreground focus:outline-none`}>
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </BlurFade>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {menuItems.map((item) => (
                        <BlurFade delay={0.05} key={item.path}>
                            <a href={item.path} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground">
                                {item.label}
                            </a>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
