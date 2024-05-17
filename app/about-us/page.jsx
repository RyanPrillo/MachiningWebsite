'use client'
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";

export default function AboutUs() {
    return (
        <article className="bg-white">
            <NavigationBar/>
            <figure className="flex justify-center pt-4 pb-4">
                <Image className="p-4 m-8 border-4 justify-center"
                       src="/StellarMetalLogoExtended.svg"
                       width={500}
                       height={100}
                       alt="Stellar Metal Machining Logo"
                />
            </figure>
            <div className="flex flex-col text-center justify-center items-center m-10">
                <h1 className="font-bold bg-blue-950 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">About
                    Stellar Metal Machining</h1>
            </div>

            <section className="flex flex-col border-t-4 border-t-gray-400 justify-center items-center">
                <header className="flex text-center justify-center m-20 font-bold text-black w-4/5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-blue-400 decoration-4 tracking-wide">
                <h1>Our Story</h1>
                </header>

                <h1 className="font-bold text-black bg-grayish-blue p-6 w-4/5 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
                    Stellar Metal Machining is located in Northern New Jersey, where craftsmanship meets dedication.
                    Overseeing every detail, Thomas P. brings nearly a decade of mechanical expertise to the world of
                    precision machining.
                </h1>

                <p className="flex flex-col items-center text-black p-6 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h2 className="font-bold bg-grayish-blue text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-2 tracking-wider w-2/3">A Mechanic&rsquo;s Precision, A Machinist&rsquo;s Artistry</h2>
                    From the intricate workings of engine components, to the precise demands of custom metal
                    projects, Thomas P.&rsquo;s journey began in the bustling shops of auto repair. He honed his attention to
                    detail and focus on doing the job right, no matter the task. His passion for perfection didn&rsquo;t
                    stop at mechanics, though. Over the years, his passion developed into machining and the precise
                    nature of it. Every free moment he had, was spent in his workshop, honing his abilities as a
                    machinist.
                </p>

                <p className="flex flex-col items-center text-black p-6 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h3 className="font-bold bg-grayish-blue text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-2 tracking-wider w-2/3">Crafted with Care</h3>
                    Stellar Metal isn&rsquo;t just a business; it is the culmination of countless hours of disciplined
                    craftsmanship and a relentless pursuit for perfection. Here, we specialize one-off projects, and
                    custom-made pieces that many larger machine shops won&rsquo;t take on due to a small volume. Whether
                    it is a unique part for your car project, or a custom-made part for your startup company&rsquo;s
                    prototype, we exhibit great care and precision for every project we take on.
                </p>

                <p className="flex flex-col items-center text-black p-6 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h4 className="font-bold bg-grayish-blue text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-2 tracking-wider w-2/3">Driven by Detail</h4>
                    <blockquote className="text-blue-400 tracking-wide bg-off-white2 p-5 border-l-4 border-solid border-gray-500 w-1/2 m-5 italic">
                        <p>&#x0022; We Believe even the smallest details can make the biggest difference &#x0022;</p>
                    </blockquote>
                    Our commitment to detail is unmatched. We believe even the smallest details can make the biggest
                    that every project isn&rsquo;t just completed, but perfected.
                </p>

                <p className="flex flex-col items-center text-black p-6 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h5 className="font-bold bg-grayish-blue text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-2 tracking-wider w-2/3">Join Us</h5>
                    We invite you to bring your unique challenges to us. No project is too small, no detail too minor.
                    At Stellar Metal Machining, we work with you to get you exactly what you want. Let us turn your
                    ideas into reality!
                </p>

                <p className="font-bold text-black bg-blue-400 p-6 w-4/5 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center m-10">
                    <Link href="/contact" className="text-yellow-200 underline">Contact us today</Link> to discuss your project!
                </p>
            </section>

            <section className="border-t-4 border-t-gray-400">
                <header className="flex text-center justify-center p-10">
                    <h2 className="font-bold text-black bg-zinc-200 p-6 w-full text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline">Our
                        Machines</h2>
                </header>

                <section className="flex justify-center p-10">
                    <figure>
                        <figcaption
                            className="flex text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline decoration-blue-400 text-black justify-center">1946
                            American Pacemaker
                        </figcaption>
                        <Image className="m-4 overflow-hidden rounded"
                               src="/machineshop/lathe-wide-angle.jpg"
                               alt="Our 1946 American Pacemaker"
                               width={400}
                               height={400}
                        />
                    </figure>
                    <figure>
                        <figcaption
                            className="flex text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline decoration-blue-400 text-black justify-center">1979
                            Bridgeport Series 1
                        </figcaption>
                        <Image className="m-4 overflow-hidden rounded"
                               src="/machineshop/pillar-drill.jpg"
                               alt="Our 1979 Bridgeport Series 1 Machine"
                               width={400}
                               height={400}
                        />
                    </figure>

                </section>
            </section>
        </article>
    )
}