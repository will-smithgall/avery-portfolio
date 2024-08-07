"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaChevronDown } from "react-icons/fa";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";

const projectLinks = [
    { title: "Marketing", url: "/marketing" },
    { title: "Social Media", url: "/social-media" },
    { title: "Technical Writing", url: "/technical-writing" },
    { title: "Ad Campaigns", url: "/ad-campaigns" },
    { title: "Graphic Design", url: "/graphic-design" },
];

const socialLinks = [
    { title: "Resume & CV", url: "/resume" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/avery-chapman-8b3722250/" },
];

const mobileLinks = [
    { title: "Marketing", url: "/marketing" },
    { title: "Social Media", url: "/social-media" },
    { title: "Technical Writing", url: "/technical-writing" },
    { title: "Ad Campains", url: "/ad-campaigns" },
    { title: "Graphic Design", url: "/graphic-design" },
    { title: "Resume & CV", url: "/resume" },
];

const mobileSocial = [
    { icon: <FaLinkedin size={35} />, url: "https://www.linkedin.com/in/avery-chapman-8b3722250/", title: "LinkedIn" },
];

const bgColor = "bg-white";
const modalColor = "bg-darkteal";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const { width, height } = useScreenSize();
    const router = useRouter();

    //set up resizing
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // check for mobile
    useEffect(() => {
        if (width !== undefined) {
            setIsMobile(window.innerWidth < 769);
            setIsLoaded(true);
        }
    }, [width]);

    // mobile modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    // route to page
    const handleClick = (url) => {
        router.push(url);
    };

    return (
        <>
            {isLoaded ? (
                !isMobile ? (
                    // Laptop Navbar Code Here
                    <nav className={`h-fit ${bgColor} py-3 px-4`}>
                        <div className="flex justify-between mx-auto items-center py-3 px-10 text-darkteal">
                            <div className="font-bold text-3xl cursor-pointer" onClick={() => handleClick("/")}>
                                Avery Chapman
                            </div>

                            <ul className="flex gap-8 items-center cursor-pointer text-md">
                                <div
                                    className="relative"
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <div className="flex items-center gap-2">
                                        <FaChevronDown />
                                        My projects
                                    </div>

                                    {showDropdown && (
                                        <ul className="absolute left-0 top-full pt-2 bg-white shadow-lg rounded-lg w-48 z-10">
                                            {projectLinks.map((link, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleClick(link.url)}
                                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg"
                                                >
                                                    {link.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {socialLinks.map((item, index) =>
                                    item.title === "LinkedIn" ? (
                                        <li key={index}>
                                            <a target="_blank" href={item.url} rel="noopener noreferrer">
                                                {item.title}
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={index} onClick={() => handleClick(item.url)}>
                                            {item.title}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </nav>
                ) : (
                    // Mobile Navbar Code Here
                    <nav className={`h-fit ${bgColor} py-3 px-4`}>
                        <div className="mx-auto flex justify-between items-center py-3 text-darkteal">
                            <div className="font-bold text-2xl cursor-pointer" onClick={() => handleClick("/")}>
                                Avery Chapman
                            </div>
                            <div className="flex justify-end items-center gap-6 cursor-pointer">
                                {mobileSocial.map((item, index) =>
                                    item.title === "LinkedIn" ? (
                                        <div key={index} className="text-sm">
                                            <a target="_blank" href={item.url} rel="noopener noreferrer">
                                                {item.icon}
                                            </a>
                                        </div>
                                    ) : (
                                        <div key={index} onClick={() => handleClick(item.url)} className="text-sm">
                                            {item.icon}
                                        </div>
                                    )
                                )}
                                <FaBars size={30} onClick={handleBarsIconClick} className="cursor-pointer" />
                            </div>
                        </div>
                        {showModal && (
                            <div className="fixed inset-0 flex justify-center items-center text-white">
                                <div className={`absolute inset-0 ${modalColor}`} />
                                <FaTimes
                                    className="absolute top-6 right-4 cursor-pointer"
                                    onClick={toggleModal}
                                    style={{ fontSize: "16px" }}
                                />
                                <div className="relative w-full">
                                    <div className="flex flex-col gap-8 items-center justify-center h-full">
                                        {mobileLinks.map((link, index) => (
                                            <span
                                                key={index}
                                                onClick={() => handleClick(link.url)}
                                                className="font-light text-2xl cursor-pointer"
                                            >
                                                {link.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                )
            ) : (
                <></>
            )}
        </>
    );
}
