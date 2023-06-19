import Image from "next/image";
import Container from "./components/Container";

export default function Home() {
    return (
        <Container>
            <div className="my-16 flex gap-12">
                <div className="w-1/2">
                    <Image
                        className="rounded mx-auto"
                        src="/images/image-product-1.jpg"
                        alt=""
                        width="400"
                        height="400"
                    />
                </div>
                <div className="w-1/2">
                    <span className="text-">SNEAKER COMPANY</span>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole, they
                        will withstand everything the weather can offer.
                    </p>
                    <div>
                        <div>
                            <span>$125.00</span>
                            <span>50%</span>
                        </div>
                        <span>$250.00</span>
                    </div>

                    <div>
                        <div className="flex bg-gray">
                            <Image
                                src="icon-minus.svg"
                                alt=""
                                width="10"
                                height="10"
                            />
                            <span>0</span>
                            <Image
                                src="icon-plus.svg"
                                alt=""
                                width="10"
                                height="10"
                            />
                        </div>
                        <button>
                            <Image
                                src="icon-cart.svg"
                                alt=""
                                width="10"
                                height="10"
                            />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
