import Image from "next/image";
import Link from "next/link";
import { lora, robotoSlab } from "@/app/fonts";
import DOMPurify from 'isomorphic-dompurify';
import NavigationBar from "@/components/NavigationBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RequestQuoteButton from "@/components/RequestQuoteButton";

export const metadata = {
    title: 'About Us | Stellar Metal Machining',
    description: "Learn more about Stellar Metal Machining, who we are, our mission, and the custom machining services we offer.",
    openGraph: {
        title: 'About Us | Stellar Metal Machining',
        description: "Learn more about Stellar Metal Machining, who we are, our mission, and the custom machining services we offer.",
        images: [
            {
                url: 'https://www.stellarmetalworks.com/public/StellarMetalLogoSquare.svg',
                width: 400,
                height: 400,
                alt: 'Stellar Metal Machining Logo'
            },
            {
                url: "https://www.stellarmetalworks.com/public/machineshop/lathe-wide-angle.jpg",
                width: 400,
                height: 400,
                alt: 'Our 1946 American Pacemaker Lathe'
            },
            {
                url: "https://www.stellarmetalworks.com/public/machineshop/pillar-drill.jpg",
                width: 400,
                height: 400,
                alt: "Our 1979 Bridgeport Series 1 Drill"
            }
        ]
    },
}

export default async function AboutUs() {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "About Stellar Metal Machining",
            "description": "Learn more about Stellar Metal Machining, our team, our mission, and the custom machining services we offer.",
            "url": "https://www.stellarmetalworks.com/about-us/",
            "logo": "https://www.stellarmetalworks.com/StellarMetalLogoSquare.svg",
            "founder": {
                "@type": "Person",
                "name": "Thomas P"
            },
            "foundingDate": "2024-03-05",
            "location": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mount Olive",
                    "addressRegion": "NJ",
                    "postalCode": "07828",
                    "addressCountry": "US"
                }
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "stellarmetal.sales@gmail.com",
                "url": "https://www.stellarmetalworks.com/request-quote"
            }
        }
    };

    return (
        <article className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(jsonLdData)) }}
            />

            <NavigationBar />
            <figure className="flex justify-center pt-4 pb-4">
                <Image className="m-8 border-4 justify-center"
                       src="/StellarMetalLogoExtended.svg"
                       placeholder="blur"
                       blurDataURL="data:image/jpeg;base64,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"
                       loading="eager"
                       width={500}
                       height={100}
                       alt="Stellar Metal Machining Logo"
                />
            </figure>
            <div className="flex flex-col text-center justify-center items-center m-10">
                <p className={`${lora.className} font-extrabold text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-20`}>&quot;Precision in Every Detail&quot;</p>
            </div>

            <section className="flex flex-col border-t-4 border-t-gray-400 justify-center items-center bg-zinc-200">
                <header
                    className="flex text-center justify-center m-20 font-bold text-black w-4/5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-blue-400 decoration-4 tracking-wide">
                    <h1>Our Story</h1>
                </header>

                <h1 className="font-bold text-black p-10 w-4/5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
                    Stellar Metal Machining is a small, family-run machine shop nestled in Northern New Jersey. I'm
                    Thomas P., and I bring nearly a decade of mechanical experience to the world of precision machining.
                </h1>

                <figure>
                    <Image className="m-8 border-4 justify-center rounded-2xl overflow-hidden"
                           src="/TomP.jpg"
                           loading="eager"
                           width={500}
                           height={200}
                           alt="Tom P, Machine Shop Owner"
                    />
                    <figcaption></figcaption>
                </figure>

                <section
                    className="flex flex-col items-center text-black p-8 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center border-t-gray-400 border-4">
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-6 tracking-wider w-2/3">From
                        Mechanic to Machinist</h2>
                    My journey began as a diesel mechanic, where I developed a keen attention to detail and a commitment
                    to doing every job right. My passion for perfection didn't stop with mechanics. Over the years, I
                    fell in love with the precise nature of machining, spending countless hours in my workshop, honing
                    my craft.
                </section>

                <section
                    className="flex flex-col items-center text-black p-8 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-6 tracking-wider w-2/3">What We Do</h3>
                    <article className="flex">
                        <Image className="m-8 border-4 justify-center rounded-2xl overflow-hidden basis-1/4"
                               src="/machineshop/metalNutAfter.jpg"
                               loading="eager"
                               width={1204}
                               height={1599}
                               alt="Tom P, Machine Shop Owner"
                        />
                        <p className="basis-2/3 content-center">
                            I believe every job should be finished to the best of my ability, with absolutely no shortcuts.
                            Here, we specialize one-off projects, and custom-made pieces that many larger machine shops won't
                            take on due to a small volume. Whether it is a unique part for your car project, a repair or
                            replacement for a specific part, or a custom-made part for your startup company's prototype, we
                            exhibit great care and precision for every project we take on.
                        </p>
                    </article>
                </section>

                <section
                    className="flex flex-col items-center text-black p-8 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mb-5">
                    <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-6 tracking-wider w-2/3">Driven
                        by Detail</h4>
                    <blockquote className="text-blue-400 tracking-wide bg-off-white2 p-5 border-l-4 border-blue-400">
                        Our commitment to quality extends beyond the machining itself. We take the time to understand
                        your needs, ensuring that every project is completed to your specifications. When you work with
                        Stellar Metal Machining, you can expect us to ensure every one of your orders is high quality.

                        <footer className="text-right pt-2">
                            <cite className="text-lg">- Thomas P.</cite>
                        </footer>
                    </blockquote>
                </section>

                <section
                    className="flex flex-col items-center text-black p-8 w-4/5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    <h5 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl underline text-center m-10 p-6 tracking-wider w-2/3">Get
                        In Touch!</h5>
                    <p className="mb-4">We'd love to hear from you! Whether you have a specific project in mind or just
                        want to learn more about our services, feel free to reach out to us. Our team is always ready to
                        assist you with your machining needs.</p>
                    <div className="flex flex-row justify-center items-center space-x-4">
                        <a href="mailto:stellarmetal.sales@gmail.com" className="flex items-center text-blue-500 hover:text-blue-800 underline"><FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{color: "#6b7be8"}}/> Email: stellarmetal.sales@gmail.com</a>
                    </div>
                    <RequestQuoteButton/>
                </section>
            </section>

            <footer className="bg-blue-900 text-white text-center p-4">
                <p>&copy; 2024 Stellar Metal Machining. All rights reserved.</p>
            </footer>
        </article>
    );
}
