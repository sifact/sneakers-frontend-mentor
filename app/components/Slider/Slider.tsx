"use client";

import { data } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";

const Slider = () => {
    const [products] = useState(data);
    const [value, setValue] = useState(0);

    const { mainImage } = products[value];

    return (
        <>
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto">
                <Image
                    className="mx-auto md:rounded-2xl "
                    src={mainImage}
                    alt=""
                    fill={true}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <ul className=" hidden sm:flex justify-between w-[400px] mt-8 items-center mx-auto">
                {products.map((item, index) => (
                    <li
                        className={`${
                            index === value &&
                            `border-2 border-orange-primary border-rounded opacity-60`
                        } cursor-pointer overflow-hidden border-2 border-white rounded-2xl`}
                        key={item.id}
                        onClick={() => setValue(index)}
                    >
                        <Image
                            src={item.thumbnail}
                            alt=""
                            width={80}
                            height={80}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Slider;
