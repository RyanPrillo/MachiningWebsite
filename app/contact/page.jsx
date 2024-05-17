'use client'
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";

export default function AboutUs() {
    return (
        <article className="bg-white">
            <NavigationBar />
            <figure className="flex justify-center pt-4 pb-4">
                <Image className="p-4 m-8 border-4 justify-center"
                       src="/StellarMetalLogoExtended.svg"
                       width={500}
                       height={100}
                       alt="Stellar Metal Machining Logo"
                />
            </figure>
            <div className="flex text-center justify-center p-10">
                <h1 className="font-bold bg-blue-950 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Contact Us!</h1>
            </div>
        </article>
    )
}