import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";
import {lora} from "@/app/fonts";
import DOMPurify from 'isomorphic-dompurify';

export const metadata = {
    title: 'Services | Stellar Metal Machining',
    openGraph: {
        title: 'Services | Stellar Metal Machining',
        description: "Discover our range of metal machining services, including manual machining, precision machining, fabrication, and prototyping.",
        images: [
            {
                url: 'https://www.stellarmetalworks.com/public/StellarMetalLogoSquare.svg',
                width: 400,
                height: 400,
                alt: 'Stellar Metal Machining Logo'
            },
        ]
    },
}

export default async function Services() {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Stellar Metal Machining Services",
        "description": "Discover our range of metal machining services, including manual machining, welding, precision machining, fabrication, and prototyping.",
        "url": "https://www.stellarmetalworks.com/services/",
        "logo": "https://www.stellarmetalworks.com/StellarMetalLogoSquare.svg",
        "serviceType": ["Manual Machining", "Precision Machining", "Fabrication", "Prototyping", "Welding", "Custom Parts"],
        "areaServed": {
            "@type": "Place",
            "name": "United States"
        },
        "contactPoint": {
        "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "stellarmetal.sales@gmail.com",
            "url": "https://www.stellarmetalworks.com/request-quote"
    },
    };

    return (
        <article className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(JSON.stringify(jsonLdData))}}
            />

                {/*<NextSeo*/}
                {/*    title="Available Services | Stellar Metal Machining"*/}
                {/*    description="Discover our range of custom machining services at Stellar Metal Machining. We offer precision metal fabrication, welding, part repair and more. Contact us today for your custom projects!"*/}
                {/*    canonical="https://www.stellarmetalworks.com/services"*/}
                {/*    openGraph={{*/}
                {/*        title: 'Available Services | Stellar Metal Machining',*/}
                {/*        description: "Discover our range of custom machining services at Stellar Metal Machining. We offer precision metal fabrication, welding, part repair and more. Contact us today for your custom projects!",*/}
                {/*        url: 'https://www.stellarmetalworks.com/services/',*/}
                {/*        type: "website"*/}
                {/*    }}*/}
                {/*    additionalMetaTags={[*/}
                {/*        {*/}
                {/*            name: "keywords",*/}
                {/*            content: "custom machining, precision machining, metal fabrication, welding, custom metal parts, prototyping, metalwork services"*/}
                {/*        },*/}
                {/*        {*/}
                {/*            name: "application-name",*/}
                {/*            content: "Stellar Metal Machining",*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*    images={[*/}
                {/*    "public/StellarMetalLogoExtended.svg"*/}
                {/*    ]}*/}
                {/*    additionalLinkTags={[*/}
                {/*        {*/}
                {/*            rel: 'icon',*/}
                {/*            href: 'app/favicon.ico',*/}
                {/*        },*/}
                {/*    ]}*/}
                {/*    jsonLd={jsonLdData}*/}
                {/*/>*/}

                <NavigationBar/>
                <figure className="flex justify-center pt-4 pb-4">
                    <Image className="m-8 border-4 justify-center"
                           src="/StellarMetalLogoExtended.svg"
                           placeholder="blur"
                           blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAG/Ap4DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A+NAaABQAaiNRuMRuCNRuMRuILGozGoDUWJFgNRYkWArTLQigAqooKqAKACgAAAAAAAAAgAIiogIqAiKgqIqAiKiCVFqAzUWpUVKzWqzQSs1qs1BmpVqUVmstVmoIAoAAAAKiqCoqixYkVRqKkUQVFBVRVBUUAAAAHlAZUAUAGkajcYjUEbjUZjUQajUZjUBqLEiwGosSLAVpmKI0IoKqKCgAoAKAAAAAAAACAAAiKiAioCIqCoioCIqIJUWoDNSrUqKlZrVZBKzWqzUGalWs1FSs1qs0EAUAAAAFQUVUVRVSKo1FSKIKigqooCoKKAAADygMKANAAsRqNRiNxUbjUZjUQajUZjUBqLGY1AaixmNQFiooKqKIqooKIoKACiKAAAAAAAioACAIqICAKiKgIioCIqVBKi1kEqLURUrK1KCVmrUqDNZrVZqKzUq1KCAKAAAAAAKqK0KqKoqooiqigoAKACgKAAPIqDCqAsABqIsbjEaio6RqMRuINRqMxqAsajMagLGozGoCqkUFVFEVUUBUUBUUBUUAAAAAABAARUARUQQEFEVASoqIIlVKDKVUoJUqois1KtSgzUq1moJWa1Wais1FqAgCgAAAAACqitCxYixRVRRFVFBQAUAFAAAB5AGFFRVgANRFjUZajQ3GozGoiNxYzGoDUajMWA1FiRYDSsxqAqooiqgCqigKigAAoigAAAgAACAggAIioKIAIgIIzWmaCJVSgjNaZqKlSrWaCVmtVmoM1KtZqKiKyAAoAAAAAAoiqK1GVUaVFVFVAFVFBRFAVFAAB5AGFAAUBuA1GWo0jcbjEaiI3GozGoDUWMxqA1FjMagKqRQVUUFVFEUAFABQAAAUQAAABAARARUFEVARFQERUQRFqAiVayglSqlFSs1alQSs1alBms1qs1FRlaigAAAAAAAAqKsFioqixUVUVUUFVFAVFAABRFB5AGFAAFRWoCxFjSNxuMRuCNRqMxqA1GozFgNRYkWA1FZjQKqKCqigoiiKIoCooAAAAAIAAgIqAIAqAgCKgIioglRagJWVqIqJVrNBKlWs1BKzWqzUGazWqzRUqLUUAAAAAAAAFQBpYzFjQ0qKCqiqigAoAKAAADygMKAAKgsFWINRG43HOOkVGo1GY1EGo1GY1AWNRmNQFipFUVUUFVFBVQBVQEUAAAABAAABAAQUBAEVARFRASiUERUoJUVEVKytSglZq1KgzUq1moqVmrUoJUBQAAAAAAAAABVRVFixIqjSsqCqiiKIqgqAKADygMKAAAAoitQajcc43GmXSNRiNRBuLGY1AaixmNQGorMUGlRQVWVBVRQFRQFQBRFEAAAQUAAQAEAEBAEVEERagIlVmgM1UqKlSqzQSs1qs1BKzVrNRUrNarNBAFAAAAAAAAAABUVRpWVBpUVRVQEUAFAUAAeYBhQAAABUVYLG45xuNI6RqMRqCNxqMRqA1FiRYDUVmNAqooKqANCKCiKCiKAAAAAAAgAAgAIAgIIioCIqAlRaiKiVWaCVKqVBmpVrNQSs1qs1FZqValUQBQAAAAAAAAAAVFBVRYoqoqiqgI0IoCoAoig8wDKgAAAAAK1GWo2jcbjEagjcajEagNRqMxYDUVIoKqKCqigoigoAKIoAAAAAAAIAACAgCKiAggCCUBBEVKi1ASs1alQSs1alQZrNarNRUrK1GgAAAAAAAAAAAAABYqKDQkVRVRQURVRRAFAB5wGVAAAAAAVYysaiOkbjnG4qNxqMRqA1GozFgNRUigrTKgqooKqAKqAKAAqAKIAogAAAgAICCAgCACItQERUqKjKpQSs1qs1BKzVqVFZqVazUEqLUaAAAAAAAAAAAAAAFEUGlZUGhFUUAFAEAFHABlQAAAAABYirBqNxiNxUbjUYjUEajUZiwGoqRVGlZUFVFBVQBVQBQAUQBRAFEAAAEBAQAEEARUBEVEVEq1ARKrNQSpVrNQSs1qs1FZqVazVEAUAAAAAAAAAAAAAAFRQVWVBpWVBVQUUAFEAcQEAAAAAAAAGo3HONxpG41GY1BGo1GYsBqKkUGlZVRVRQVWVBVQBQAUQBRAFEAAEBAAQAEEARUFRFRBKioCVFrNQSpVrNQSs1qs1FSs1alUQBQAAAAAAAAAAAAAAABVRUFVlVFVAFVBRRFBxAQAAAAAAAAWNRhuKjcajEbijUajEagjUVmNAqooKqKCqyqiqgCiKCiAKIAoggAgKgAIACCAIqIqIqUERUoJUolQSpVrNRUrNarNQSsrUaAAAAAAAAAAAAAAAAAABUUFVBBVQUVUAUQBzAAAAAAAAAAajKxR0jUYjUVG4sZjUBqLGY0IqooKqANCKCiKoogCgAoggAAAgKgAIACCCiKiCIqAiVUqCVKVKCVKtZrKpWatSqJUVFAAAAAAAAAAAAAAAAAAAAFVBBVQBQAUQUYAAAAAAAAAAWIA3G45xuKjcWMxYo3FZiwGlZURpWVBVQBoQBVQBRAFAAEAUQABAAQAEFEBBEVARFrKBUpUqCVmrUqKlZq1KogCgAAAAAAAAAAAAAAAAAAAAqKCiCCgAogDICgAAAAAAAAADUajEaio3GoxGoo1GozFgNKyoNCKIqsqCqgCiKCiAKIAogAAAIACAogAIIgIAJUolQGatSoJWaqVFSoVGgAAAAAAAAAAAAAAAAAAAAAAABRFAVBBRAEAUAAAAAAAAAAVYy1FGo1GYsEbisxYo1FSKCqgDQiiKIA0IAogCgAAgKIAAgKggqoIgAgCCIDNVASpVrNZVKi1FERUUAAAAAAAAAAAAAAAAAAAAAAAAAAUQBQAQAAAAAAAAAAABYgDcajEaio1GmI1FGorMUGlZUFVlQVUAURVRRAFEEFEBVQABAAQAEEBBAEVEEqLWUCpSpUVEqoogCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxqMxYqNxYzFijUVFBVQBoQBoQUaEAUQBRAFEEFEAVBAVBAVBEAEAQRAqCIJUWoKiKigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsRVg1FjMaio0rKg0IoKrKqKrKgoigogCiAKIAAiCiAAgAgICCAIIgIIgICqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGoyrSNKyqjSsqCqgDQgIqsqCiAKIAogKogAIIKggAgAgiCs1UqCAiKICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiK1BVZVUaVlRGhAGhAGhAFEAUQBRAFEBVQQFQRBUEAEEBBEAEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRVgKg0iqgDQiiKIqiiAKIoCoAqAgCAKIACAogICCIAIigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoKKAoKgqKqCiqgIoAKIAogCiAKgIAgKAgKgiACIoAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoDQAKKIqoKgCiKIKgCiAKIAqAKAiAACAICKiKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKA0ACgAqKAAACgCAAAAAAIAKIqIACKICAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="
                           loading="eager"
                           quality={70}
                           width={500}
                           height={100}
                           alt="Stellar Metal Machining Logo"
                    />
                </figure>
                <div className="flex flex-col text-center justify-center p-10 items-center">
                    <p className={`${lora.className} font-extrabold text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-32 pt-10`}>&quot;Precision
                        in Every Detail&quot;</p>
                    <div
                        className="font-bold bg-blue-950 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">What
                        We Can Provide For You
                    </div>
                </div>

                <section>
                    <header className="flex justify-center">
                        <h1 className="font-bold text-black p-3 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">Our
                            Services</h1>
                    </header>
                    <article
                        className="bg-zinc-200 font-bold text-black p-3 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full">
                        Don&rsquo;t see what you need? <Link href="/contact" className="font-extrabold text-yellow-200"
                                                             aria-label="Go to our contact page"> Contact us</Link> and
                        we will try our best to get you exactly what you want!
                    </article>
                </section>

            </article>
            )
            }