"use client";

import Image from "next/image";
import Container from "./components/Container";
import Slider from "./components/Slider/Slider";
import { BiMinus, BiPlus, BiCart } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    const handleMinus = () => {
        setCount(count - 1);

        if (count <= 0) setCount(0);
    };

    if (count < 0) {
        return null;
    }

    return (
        <Container>
            <div className="md:my-16 flex flex-col md:flex-row gap-12 justify-center items-center">
                <div className="md:w-1/2">
                    <div>
                        <Slider />
                    </div>
                </div>

                <div className="md:w-1/2 ">
                    <div className="md:w-[80%] flex flex-col gap-4">
                        <span className="text-orange-primary font-semibold tracking-wider text-sm">
                            SNEAKER COMPANY
                        </span>
                        <h1 className="text-5xl font-bold">
                            Fall Limited Edition Sneakers
                        </h1>
                        <p className="text-blue-darkGrayishBlue">
                            These low-profile sneakers are your perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, they will withstand everything the weather can
                            offer.
                        </p>
                        <div>
                            <div className="mb-4">
                                <span className="text-2xl font-bold">
                                    $125.00
                                </span>
                                <span className="py-1 px-2 ml-4 bg-orange-secondary  rounded text-orange-primary text-sm font-bold">
                                    50%
                                </span>
                            </div>
                            <span className="line-through text-blue-grayishBlue">
                                $250.00
                            </span>
                        </div>

                        <div className="flex flex-col md:flex md:flex-row gap-8 ">
                            <div className="flex gap-8 bg-blue-lightGrayishBlue justify-between items-center p-2 rounded w-full text-2xl font-bold">
                                <BiMinus
                                    className="text-orange-primary cursor-pointer"
                                    onClick={handleMinus}
                                />
                                <span className="text-xl">{count}</span>
                                <BiPlus
                                    className="text-orange-primary cursor-pointer"
                                    onClick={() => setCount(count + 1)}
                                />
                            </div>
                            <button className="flex justify-center items-center gap-4 bg-orange-primary rounded w-full  lg:w-[100%] p-2">
                                <BiCart className="text-white text-2xl" />
                                <span className="text-white">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
