"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { ShopLogo } from "@/components/common/ShopLogo.jsx";
import { SearchIcon } from "@/components/common/SearchIcon.jsx";
import Image from "next/image.js";
import useLoggedUserStore from '@/store/loggedUserStore';
import ThemeSwitcher from "../common/ThemeSwitcher";
import { useRouter } from 'next/navigation';

const MainNavbar = ({ title }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user, isLoggedIn, logout } = useLoggedUserStore();
    const router = useRouter();

    const handleLogout = async () => {
        setIsMenuOpen(false);
        await logout(); // Call the logout method from the store
        router.push('/login');
    };

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
            onClick: handleLogout,
        },
    ];

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" className="px-0 border-b" classNames={{
            wrapper: "justify-start",
            content: "data-[justify=start]:!flex-grow-0 sm:flex-grow "
        }}>
            {/* Logo and title */}
            <NavbarContent className="gap-2 flex-grow-0">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand as={Link} href="/" className="flex items-center">
                    {/* TODO: Change logo */}
                    <ShopLogo />
                    <p className="font-bold text-inherit hidden sm:flex">{title}</p>
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
                    placeholder="Search products"
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
            </NavbarContent>

            {/* Theme switcher */}
            <NavbarContent as="div" className="items-center gap-2 md:mr-2" justify="end">
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
                    {isLoggedIn && user && (
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold"> {user.email}</p>
                        </DropdownItem>

                    )}
                    {!isLoggedIn && (
                        <DropdownItem as={Link} key="login" href="/login">Login / Register</DropdownItem>
                    )}
                    <DropdownItem as={Link} key="settings" href="/profile">Profile Settings</DropdownItem>
                    <DropdownItem as={Link} key="orders" href="/orders">Orders</DropdownItem>
                    <DropdownItem as={Link} key="cart" href="/cart">Cart</DropdownItem>
                    <DropdownItem as={Link} key="about" href="/about">About</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={handleLogout}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Mobile menu items */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            className="w-full"
                            href={item?.href}
                            onClick={item?.onClick}
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
