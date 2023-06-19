"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import Container from "../Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const setOpen = () => {
        setTimeout(() => {
            setIsOpen(!isOpen);
        });
    };

    return (
        <>
            <div
                className={`${
                    isOpen ? "block md:hidden" : "hidden"
                } fixed z-50 bg-neutral-800/70  inset-0 `}
            >
                <div
                    style={{ transition: "all 0.3s ease-in-out" }}
                    className={`
                    translate duration-300 w-4/6 pt-20 pl-8 gap-4 h-full bg-white flex flex-col text-xl font-semibold relative sm:text-blue-grayishBlue
        

        `}
                >
                    <Image
                        onClick={setOpen}
                        className=" absolute top-4 left-4"
                        src="/icon-close.svg"
                        alt="Image"
                        width="12"
                        height="12"
                    />
                    <Link href="/collections">Collections</Link>
                    <Link href="/men">Men</Link>
                    <Link href="/women">Women</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <Container>
                <div className="relative flex items-center justify-between py-8">
                    <div className="flex items-center">
                        <div className="flex gap-3 items-center">
                            <Image
                                onClick={setOpen}
                                className="md:hidden"
                                src="/icon-menu.svg"
                                alt="Image"
                                width="15"
                                height="15"
                            />

                            <Link
                                className="text-3xl font-bold pb-1.5"
                                href="/"
                            >
                                sneakers
                            </Link>
                        </div>

                        <div className={`ml-20 md:flex gap-5 hidden`}>
                            <Link href="/collections">Collections</Link>
                            <Link href="/men">Men</Link>
                            <Link href="/women">Women</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="flex gap-12 items-center ">
                        <div>
                            <Image
                                src="/icon-cart.svg"
                                width="18"
                                height="18"
                                alt=""
                            />
                        </div>

                        <Image
                            src="/images/image-avatar.png"
                            width="40"
                            height="40"
                            alt=""
                        />
                    </div>
                </div>
                <hr className="border hidden md:block border-blue-grayishBlue" />
            </Container>
        </>
    );
};

export default Navbar;
