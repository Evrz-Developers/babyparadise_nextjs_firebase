"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { ShopLogo } from "@/components/common/ShopLogo.jsx";
import { SearchIcon } from "@/components/common/SearchIcon.jsx";
import Image from "next/image.js";
import ThemeSwitcher from "../common/ThemeSwitcher";

const MainNavbar = ({ title }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: "Login",
            href: "/login",
        },
        {
            name: "Register",
            href: "/register",
        },
        {
            name: "Profile",
            href: "/profile",
        },
        {
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            name: "Logout",
            href: "/logout",
        },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" className="px-0 border-b" classNames={{
            wrapper: "justify-start",
            content: "data-[justify=start]:!flex-grow-0 sm:flex-grow "
        }}>
            {/* Logo and title */}
            <NavbarContent className="gap-2 flex-grow-0">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand as={Link} href="/" className="flex items-center">
                    {/* TODO: Change logo */}
                    <ShopLogo />
                    <p className="font-bold text-inherit">{title}</p>
                </NavbarBrand>
            </NavbarContent>

            {/* TODO: Move menu items to second row */}
            {/* <NavbarContent className="hidden sm:flex gap-2" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent> */}

            {/* Search */}
            <NavbarContent as="div" className="items-center gap-2" justify="center">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] md:max-w-[20rem] lg:max-w-[30rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
            </NavbarContent>
            <NavbarContent as="div" className="items-center gap-2 mr-2" justify="end">
                <ThemeSwitcher />
            </NavbarContent>
            {/* Profile */}
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Image
                        alt="Profile"
                        width={34}
                        height={34}
                        src="/images/dev.png"
                        className="rounded-full"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">robz@admin.com</p>
                    </DropdownItem>
                    <DropdownItem key="team_settings">Dashboard</DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">Shop</DropdownItem>
                    <DropdownItem key="configurations">Users</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Mobile menu items */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default MainNavbar;
