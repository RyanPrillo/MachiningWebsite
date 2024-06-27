import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import {lora, robotoSlab} from "@/app/fonts";
import DOMPurify from 'isomorphic-dompurify';
import ServiceGallery from "@/components/ServiceGallery";

export const metadata = {
    title: "Example Work | Stellar Metal Machining",
    description: "Discover our range of metal machining services, including manual machining, precision machining, fabrication, and prototyping.",
    openGraph: {
        title: "Example Work | Stellar Metal Machining",
        description: "Explore examples of custom machining projects by Stellar Metal Machining.",
        images: [
            {
                url: 'https://cdn.stellarmetalworks.com/StellarMetalLogoSquare.svg',
                width: 400,
                height: 400,
                alt: 'Stellar Metal Machining Logo'
            },
            {
                url:  "https://cdn.stellarmetalworks.com/machineshop/cylinder.jpg",
                width: 400,
                height: 400,
                alt: "Cylinder turned down in our lathe"
            },
            {
                url:  "https://cdn.stellarmetalworks.com/machineshop/work-example-1.jpg",
                width: 400,
                height: 400,
                alt: "This is an example of a handle made on our lathe and drill"
            },
            {
                url:  "https://cdn.stellarmetalworks.com/machineshop/rod-drill.jpg",
                width: 400,
                height: 400,
                alt: "A rod that was turned down in lathe, then drilled"
            },
            {
                url:  "https://cdn.stellarmetalworks.com/machineshop/turningDown.jpg",
                width: 400,
                height: 400,
                alt: "Turning down A piece of metal to be press fit"
            },
        ]
    },
}

export default async function ExampleWork() {

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "mainEntity": {
            "@type": "CreativeWork",
            "name": "Examples of Our Work",
            "description": "Explore examples of custom machining projects by Stellar Metal Machining.",
            "url": "https://www.stellarmetalworks.com/example-work/",
            "logo": "https://www.stellarmetalworks.com/StellarMetalLogoSquare.svg",
            "hasPart": [
                {
                    "@type": "ImageObject",
                    "name": "Cylinder turned down in our lathe",
                    "contentUrl": "https://www.stellarmetalworks.com/public/machineshop/cylinder.jpg",
                    "caption": "Cylinder turned down in our lathe"
                },
                {
                    "@type": "ImageObject",
                    "name": "Custom Handle",
                    "contentUrl": "https://www.stellarmetalworks.com/public/machineshop/work-example-1.jpg",
                    "caption": "This is an example of a handle made on our lathe and drill. It was turned down on our lathe, with any necessary holes drilled with our pillar drill."
                },
                {
                    "@type": "ImageObject",
                    "name": "Rod that was turned down in lathe, then drilled",
                    "contentUrl": "https://www.stellarmetalworks.com/public/machineshop/rod-drill.jpg",
                    "caption": "A rod that was turned down in lathe, then drilled."
                },
                {
                    "@type": "ImageObject",
                    "name": "Rod that needed to be a pressed fit, which was turned down in our lathe",
                    "contentUrl": "https://www.stellarmetalworks.com/public/machineshop/turningDown.jpg",
                    "caption": "Here is a rod that needed to be a pressed fit, which was turned down in our lathe."
                }
            ]
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "email": "stellarmetal.sales@gmail.com",
            "url": "https://www.stellarmetalworks.com/request-quote"
        },
    }

    return (

        <article className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(JSON.stringify(jsonLdData))}}
            />

            <header className="border-b-8 border-gray-500">
                <NavigationBar/>

                <figure className="flex justify-center pt-4 pb-4">
                    <Image className="m-8 border-4 justify-center"
                           src="/StellarMetalLogoExtended.svg"
                           placeholder="blur"
                           blurDataURL="data:image/jpeg;base64,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"
                           loading="eager"
                           quality={70}
                           width={500}
                           height={100}
                           alt="Stellar Metal Machining Logo"
                    />
                </figure>

                <h2 className={`${robotoSlab.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-extrabold text-center underline p-6 pb-10 h-1/3 decoration-blue-400`}>
                    <p className={`${lora.className} font-extrabold text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-32 pt-10`}>&quot;Precision
                        in Every Detail&quot;</p>
                    Here are Some Projects We Have Worked On:
                </h2>
            </header>

            <section className="flex flex-col justify-center text-center p-8 bg-zinc-200 m-4">
                <ServiceGallery/>
            </section>
        </article>
    )
}