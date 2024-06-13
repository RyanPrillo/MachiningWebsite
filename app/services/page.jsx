import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";
import {lora, robotoSlab} from "@/app/fonts";
import DOMPurify from 'isomorphic-dompurify';
import Accordion from "@/components/Accordion";
import {servicesIconList, servicesList} from "@/assets/AccordionInfo";

export const metadata = {
    title: 'Services | Stellar Metal Machining',
    description: "Discover our range of metal machining services, including manual machining, precision machining, fabrication, and prototyping.",
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
        "@type": "CollectionPage",
        "mainEntity": {
            "@type": "CreativeWork",
            "name": "Examples of Our Work",
            "description": "Explore examples of custom machining projects by Stellar Metal Machining.",
            "url": "https://www.stellarmetalworks.com/example-work/",
            "publisher": {
                "@type": "Organization",
                "name": "Stellar Metal Machining",
                "url": "https://www.stellarmetalworks.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.stellarmetalworks.com/StellarMetalLogoSquare.svg"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Sales",
                    "email": "stellarmetal.sales@gmail.com",
                    "url": "https://www.stellarmetalworks.com/request-quote"
                }
            },
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
        }
    };

    return (
        <article className="bg-white h-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(JSON.stringify(jsonLdData))}}
            />

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

            <header className="flex justify-center">
                <p className={`${lora.className} font-extrabold text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-32 pt-10`}>&quot;Precision
                    in Every Detail&quot;</p>

            </header>

            <article className="bg-blue-950 text-white font-bold p-5 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full border-t-4 border-t-gray-200">Don&rsquo;t see what you need? <Link href="/request-quote" className="font-extrabold text-yellow-200" aria-label="Go to our contact page"> Contact us</Link> and we will try our best to get you exactly what you want!</article>

            <section className="flex flex-col bg-off-white justify-center p-14 items-center">
                <p className="text-black text-center text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl p-5">&#42;This List is Not All Inclusive</p>
                <Accordion displayItems={servicesList} iconsList={servicesIconList}/>
            </section>

            <section className="border-t-4 border-t-gray-400 h-auto p-10 grid">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-extrabold text-center underline decoration-blue-400 pt-20 pb-20">Our
                    Services</h2>


                <h3 className="text-black text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold border-t-4 border-gray-400 pt-10">Custom
                    Parts</h3>
                <section className="flex pt-16">
                    <figure className=" pr-16 basis-1/3 flex flex-col items-center">
                        <Image className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl"
                               src="/machineshop/metalNutAfter.jpg"
                               alt="Lathe Metal Nut After"
                               placeholder="blur"
                               blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAROAz4DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBQQD/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+YDqwAAAAAAAAAAAIAAAAoioAAgAAIqCgACKiAAAioAACACoAggACKgIACAAgCiAAgAIioAioAioCAAgAIAqIACAAgAIAAioAAAioAAAAAAAAgAAAAAAAIAAAAAAAAO0A6MgAAAAAAAAAACAAAAKIqAAIAACKgAAoiogAAIqAAAgAqAIIAAioCAAgAIAogAIACIqAIqAIqAgAIACAKiAAgAIACAAIqAAAIqAAAAAAAAIAAAAAAACAAAAAAAADtAOjIAAAAAAAAAAAgAAIqCgAACAAAgAACiKiAACAAAgAAqAIIAAioCAAgAIACAKIACIqAIqAIqAgAIACAKiIqAAAgAIAAioAAAioAAAAAAAAgAAAAAAAIAAAAAAAAO0A6MgAAAAAAAAAACACCgAAAACAACAAACiKiAACAAIqAACoAggACKgIACAAgAIAogAIioAioAioCAAgAIAqIioAACAAgACKgAACKgAAAAAAACAAAAAAAAgAAAAAAAA7QDoyAAAAAAAAAAAiAAAAKAAAICKgAAoACAIAIAAAioAAKgCCAAIqAgAIACAAgCiAAiKgCKgCKgIACAAgIqCKgCKgAAIAAioAAAgAAAAAAIAAAIAqAKCIKAAAAAAAAADtAOjIAAIAogCiAAAACAAKAAAgKIqAgAACgAIAgIqAAAIqAAgoAggACACAAgAIACAKICAIqAIqAIqAgAIACIqKgioAioACAAAgAAAIAAAAAAIIKIAqAAAAAAqCCgAAAAAAA7IDoyAAAAAAAAAAAIAAoIAqAAAgAAACiKiAAAioAACAAIqCgCCAAgAIACAAgAIACIqKCKgCKgCKgIACIqAIqKgioAioAioAACAAAgAAAACAAAAAgAAAAAAAICoAoigAAAA7IDoyAAAAAgKIAogCoCAAKAAAAAIAAAAqAIAAIAAACAAIqCgCCAAgAIACAAgAIACIqKCKgCKgCACAAiKgCKioIqAIqAIqAAAgACKgAACAAAAAgAAAAAAAAAIAAAACoAogDsgOjIAAAAAAAAAgAAACgAACAAAAAgCgCAioAAAioAAAioKAiAACAAgAIACAAgAIioAiooIqAgAIACIqAIqKgioAioAioACAAAgAAIAAAAAAgAAAAAAAAAIAAAAAAAAOyIOjKiAKIAogCiAKIIKICqIAoICiCCggAAAAoAggAAACKgAAIAiiKgAAIACAAgAIACAAiKgCKigioCAAgIAioAioIIqKCAAioAioAioAAAgAAAAACCCiAKIAAAogCgIAAAAAAAAOwA6MgAAAAAAAACAAKAAAAAIAAAAAAogIAAAAIAAACAIoioAACAAgAIACAAgAIioAiooIqAgAIioAioAioAioqIAAgAIqAIqAAAgAAAAIAAgAAAAAAAAAAoggoAAAAAOuA6MgAAAAAACAqAKICqIAogCiKgAgKIAACgCAAAioAAAioAAioAACAAAgAIACAAgAIioAioAioogAIioAioAioAgCIAogAIAAgAIqAAAAgAAACAAAAIAAACgAACAACiAKIA7Ag6MqIAogCiAKIIKAKAAAAAIAAAAAAoAgAAAgAAAAIAgACoAAioAACAAgAIACAAiKgCKgCKgIAoiKgCKgCKgIAIgAIAogAIACAAAAgAAAACIAAAAAAACgAACAAAAAADriDoyogCiKAAAAgACgAKgAoggoAAAAAoAgCAAAAAAIAAgAgoAAioAACAAgAIACAAiKgCKgCKgIAoiKgCKgIACACIACIqKAIACAAAIAAAAIAAiAAAACoAoigAgqiCCiKIACgAOsIOjKiKAAAAgACgAKIAogCgIAAAAAAoAgAAAAAgAAACAioKAAgACKgAAIACAAgAIioAioAioCAAiKigioCAAgAiIqAIqAIqKCKgAAIAACAACACAAAAAAAAAAAAgAAAAAA6wDogAAAgACgAKIoAAACAqAKIAogKoioAAAAAgAAAAgACiAAACAAIqAAgAIAACAAiKgCKgCACIqAIqKCKgIACIqCCKgCACAKCAAioAAAgAACAIgogCiAKIAogCgAAAAIAAAAOqA6AAgAAAAogCgAAAKggogCgAACgCAAAAAAAAAAgAgoAAioAAAgAIqAIqAIqAIqAIqAIqAgAIioAioAgKIioAioIIqAgAIACAAgACKgACggIgAAAAAAAAAAAAACiCCiAKADqANgAAAAqAKIoAAAAKIIKAAACiAqiKgAAAAAAAAAICAKAAIqAAAgACKgCKgCKgCKgCKgCKgIACIqAIqAgCiIqCCKgIACAgCKgAIAACAAIAAAgAAAAAAAAAAAAAAAAAAADqANAAAACiAKIoAAKIIKIoAAKICqAgAAAAogCiAKIIAAoAAACAAAAgACAAioAioAioAioCAAgAIioCAAiKgCKiiACIioAioAioAioACAAgAAgAACAogAAAAAqAKIoAAAAAAAAOmA0AAAAKIAogCgIKIAoACoAoiigCCiAKAAAAAAAgAAACiKgAAAIAACAAIqAIqAIqAgAIACAgCKgIACIqAIAIAqIioAioCAAgACAAioAAIIAAAAAAAAAAAAAAAAAAAAAOmINCiAKAAqAKIAoCCiAKACiAqgAoggoAAACoAoioAAAAoIAAAAAIqAAAgAIAAiogICiAAgAIioAioCAAiKgIACIqCCKiiAAgAICAAAgACAIAAAgAAAAAAKIAogCiAKIAoAAAOkINCiAKIoAAKIIKACiAKAKoigKggoigKgCiKAAAAgAAACgAAAAACAAACAIIAAgAgAIACAKIioAioCIqAIqAgAIioCACICKCKgCKgCAAioAAIIAAAAAAAAAAAAAAAAAAAAAOiA0KIAogCiKgKgCgAogKqoAoigKggoAKIoAAKIoACAAKAAAAAAAgACAioAACAAgAIACAAiKgCKiiAAiKgCKgIioAioCAAiKggiooIAIACAAIAgAAIAAAAAAAAAogCiKAAIAAAA6AgrSgAKgCiKAqAKIoKIAqoAoCCiKAqAKACiAKAgKgCgCgAAAAACAgAAIqAAAgAIACAAgAIioAioCAKIioCAAiKgCACIqAIqCICKAIAioACCAACAAAAAACAogCgCAAAAAAAAAAOgIK0oACoAoigKgCiKCiAKqAKAgoigoigKgCgICoAoAoACiAKIAoggAAAAgAAIAACAAgAIACIqAIqAgAIioogAIioCAAiKgIAIiKgCACAKCAAgCAICoAAAAAAAgAAAAAAqAKIAogDoCCtKIAoigogCgAoigogCqggqoAoAKIoKIoCoIKAKKgCgAAAAAAIAAAIAAAioAACAAgAIioAioAgAiKgCKgIioAiooiKgCKgICCCKgICAAgAIoAggAACAogCiAgAAqAKIoAAAAAAAAPcIqtCoAogCqgCiKCiKAqKgKigKgCqgCqgCgIKIooqKAAAqAKAAAgAAAAIAAACAAioACAAAiKgCKgIACIqAIqAiKgCACIqAgCiIqCIACIqAIqAIACAqAIAAAAICAKIoAAAAAAAAAAAAPcIK0ogCqgCiKCiANCKgoigogCqigKigKioCoCqqAKACiKAAAqCCiKACAqAAAAACAAIqAIqAIqAIqAIqAgAIioCAAiKgICAIqAiKgCAqIioAgAgAIioAAIgCgIAACAAAAAAAAgqAKIAogCiAPaArYqAKIoKIAqoIqqgCqigoigoigoioKIoKIoKIoCooAAKAgAAAAAAAAAAAgAACKgCKgCKgCKgCACAgCKgICAIqAiKgICAIqAiKgggKICAIqAIACAIIAACgICKgAAAogIogCiAKAAAAAD2CCuiiKCiCCqgCqgCqgCqigoigoioKIoKqAKqAKqAKACiKgKgCgAAAAAAAAAIqAAAgACAAgAIAICAIqAIAIioAgAiKgIioAggCKgIioIIqKICAAgAIIAAgCoAgKICKIAogCiAKAAAAAIAA9ggOqiAKqAKrKgqsqCqyoKqANCKgqoAqooCooCooKIoCooCoIKAAqAKAAAAAAACAAAgAAIACAAgAIioAioCAgCKgIioAgAiKgIioCAgCKgiAAiKgCAoIAggACAgAoAgiggKIAoAgAAACiAKIA9YgOqgAoigoigoigqoAqoqCiKCqigoigoigoAKqCCgAoAKIoAACooAAAACAAAAgAIqAAAgAICAIqAIqAiKgCKgIioCIqAIAIioCIqAIAIioIIAICAIqKgioACCKgKgAAAIAAAAAAogCiAKAD1CA6qIA0IAqoA0IoKqCCqigqsqCqigoigqoAqoqAqKCiKAqKAACgAAAKgAAAAAioAAAioAioAioAioAioggAIioCAAiKgIiooiKgCACIqAiKgCAIiKgCACAggCKAAggCACgAIAAKgCiKAAAAAAD0iKOyiAKqAKqAKqKiKrKgqooKqANCKCqigoioKACqgCqgCgAoACoAoAAAAAAAIAAAAgAIqAIqICKgCKgIACIqAgIAioCIqAiKgIioAgAiKiiIqCCACIqAIAggKCAIAgiiAKIoACoAAAAKgCiAKIA9IgOyiKCiKgqsqCqigqsqDQiiKqKCqyoNCKgqoAqooKIoKIoKIoCooAACoAoigAAIAAAACCAAIqAIqAIqAIAIioAioCIqAIIAioCIqAiKgIioCAgCKgIioqCCAIqCCKgggKAAgAAAAqAKIoAAgAoAAAA+6oI7KIA0IoKrKgqooKrKg0rKgqoqIqooKqAKqKCiKCqgCqigKigAAoAAAAAAAACAAAACAAIACKgCKgIACIqAgIAioCIqAiKgCCAIqAiKgIioCAgCAIiKgICKgCCAICiAiiAKAoAAAAogCgAAAACPsIDu0IAqoCNKyoKqKCqigqoqCqgDQiiKqKCqgCqigoigoAKACgAKigAAAIAAAAAACKgAAIACAAgIAioAioCIqAIqAiKgIioCIqAiKgCCAIqAiKgIioIgIAgCICCACgAAAAACiAiiKoAAAAogCiAPsIDsqoAqoA0rKg0IqIqooKqKCqigqooiqigoigqoAqooKIoKIoCooCoIKAAAAAAAAAAgAAgAIACAIqAIqAgAIioCAAiKgIioCIqAiKgIioCIqAiKgCCAIqCIioIIAgIAqACiAKIoACgAAqAigAAAAA+ogrsqoIKqKCqgDSsqI0rKg0rKg0IoKqKCqiiKqKCiKCqgCqigKigKggoAKIoAAAAAAAIAAAgAIqAIqAIqAIqAgIAioCIqAIAIioCIqIIioCIqAiKgIioCIqAiKgggggioAAAAAAoACKIAoAAAACiiAiiAPqIDuqoCKqKCqigqooKqKIqooKqKCqigqooKACqiiKIoKACgIKACiKAACiKAAACAAAAAgACKgCKgCKgIACIqAIAIioCIqCiCICCAIIIIIAioCIIAisgVBEQRUVEAAQAAAAAUQBQAAFRRAFAAAAAB9BFV2FRQVWVEaEUGlZUGlQEaVFBVQBpUUFVAFVFQVUFRVRUFEUFABQAFRQAAAAVAAAAAARUAABAAEAEABAQBFQEBBRFQERUQRFQERUBEVARFQREVASoqIJUVARFqCICKgioAAAAAAAAAqAKAAAIKgCiKAADYDTsqoAqooiqigqpFBVRRFaZioKqKoqoqCqigqooKACqiiCooCooCooAAKAAAAAAAAACAAAgAAIACAgCKgCAKiKgICICKgIioCIqAiKgIioCJVRBEVBEQqIFRaiiIqKiACACgCAoAACAAAqAKAAAIAAAA+gCuygAqooiqigqooKsSKCqiiKqKCqigqooKqKCgAqoogqKAqKAqAKAAqAKAAAAAAgAAAIqAIqAIqAIqCiKgICICKgIioCAgCKgIioCIqAiKygJRKCJVRBEVBERUqiAioAKggCgAAAKIogAAAgKgCgAACAAPoCq7AAKqKIqxFBVRQWKkUFVFEVUUFVFBVRQVUUFEUFABVQEVUAUAFAAAAVAFAAQAAAAAQABFQURUARUQQAERUAQARFQERUBEVAEEAQQEqKiCJVSgiVUqCIqCIiooiKioICoACgAAAAAKIogAgAAKgCgAAA+igrqKiiCgCqigqooKsRQVUURVRQVUUFVFBVQBVRQURQUAFAEUABUUAAAAAAAAAAURUAABAAQBBAAQEARUBEVAEAERUBEVARFQESqiCIqAiVUQRBAEAEQRUEVFRAFAAAAAAAAAAFAEAEAAAAFEAfYBXQUAUFAUUBUUFVFEVUUFVFBVRQVUUFABVRQFRQUAFABRFAVAFAAAAAAAAABAAEVEAAEABAQBFQEABEVAQEARUBEVARFQERUQSotZAZqpUERUBEVARKqNIiKioAAIAAACoAoAAACoCKAAAgAAAA+4CugoAKAKqKCqigqooigoCooKqKCqigoAKqKAqKCiKCiKAqKAACgAAAAAAAAiAAAioACAIqAIqAIqAgAIioCIqAiKgICAIIAgiCJVSgiVUqCIqAiKiiIqKiIqKgioAAoAAAAKioAAAAKIogAgAAAA9ACugoAKigKKAqKIqooKqKCgoCgCqigoAKqKAqKAqKAqKAqKAAAqKAAAAAAgIqAAAIACKgCKgCKgIACIqAIqAiKgIioCIqAiKiCIqColVEESqlQRFRURFRREVlUEVFQQAAFUAAAAARFAAAAVARQAAEAAHpAV0AUAFAUBFVFAUAVUUFVFBQUBUUFBQFRQFRQFRQFRQFRQAAFRQAAAEAAEAABAAAQABABAAQEARUBAQBFQVEVARFQEqKiCIqAiVUqCMqiAgioIIoM1UqogIqACgAKAAAAACCoqAAAACiKIAAAIPSKNNgKACoCooCgCqigKKAqKCqigKAKqKAqKAqKCgAKigAAoAAAKAgAgKgAAAIAAAIACAAgAIioAgCoioCAgCKgIiogiKgJUVARmtM1BEVEERUURFRURFRURFRQAUAAAAAAAAAERQAAAFQEUAABB6lBpsABQAUAFVFAUEFVFBQUBUUFABVRQFRQFRQUABUUAAFAAAQAAAAAAAAQABFQAEABAEVBRFQEBAEVARFQEBAEBBEqpQZRUBEqpUERUQRFRREVFREVFERUVABQBAUQBQAAAABFEVAAAABRFEAAetQVsAAUAFAFBQFRUBRQFRQUAFVFAVFAUAUAFAAVFAABQEAAAAAAAABFQAABAARUFEVAEVAQAERUBAARFQERUBEVEERUBEqpUESqiCIqAiKiiIqKiIqKIioqACiAAAAoigAAACCoqAAAAAqAigA9gorYAIKACgAoCqCgKioCgCgoCooCooKACgAoACooAAKIqAAAAAAAACAAACoACAAgAIACAgCKgIioAgAiKgIiogiKgIiogiLUQRFQEQFERUURFSqiIqKgiooAAAAKgCgAACCoqAAAAAAIKgD3CitAACgAqKAqKAqKKoCCqigKigKACgCgAoAKAAqKAAgKigAAAAAAIAAAoioAACAAgAICAIqAgAIioCAAiKiCIqAiKgIioglZVEERUBARQZVFESqioICogCgAAAAACgAAAKgiKAAAAAAAI94orQAACgAoAKACgKigKioqgAoAKACgAoAKAAqKAAgAAoAAAAIAAKAAIACKgAAICAIqAIqAgAIioCAgCAgiKgIlVKCIIglRaiKiKgiIqKIio0IioqIAIgCgAAAAACgAAAAIigAAAAAACOgKK0igACgigAoAKACgCgAoKiiooAKACgAAoACooACAAAACoAAAoAAACAAIqAIqAIqAIqAIAIioAioCIqAiKiAgAjNaZBEWoglRURURUBEVGkRFRREVFRAFEAEAAAAAAURQAAAERQAAAAAABHRAVoBQAAFAAFABQAUAFAVFRRUUBUUBUUBUUAABQAAQAAAAABQAAAAAEAAQAEVAEVAEAEABEVAQAERUBEVEERUBEVBUqLUQRFRBEVFERUVERUURFRRAFRABAAAAAABUUAAABEUAAAAAAAR0gGmgABQQAUAABQAUAFABQBQEUUAFRQFRQAAUBAAAAAAFAAAAAAEVAAAQAEAAQAQAERUARUBEVAEAERUQRFQERUFRKqVBEVEERUURFRREVFREVFEAVEAEAAAAAAFRQAAAERQAAAAAABHSUGmgAAFBFBAVFABQAUAAFABQEVQAFRQFRQAAUBAAAAAAFAAAAAAEABFQAAEABAAQEARUBAARFQERUARURURUBEVARKqVBEEQEVFERUqiIqKIioqIAIgCoAAAAAAKigAAAIigAAAAAACOmA00CgAAAKgAAoACgAqKACgKiooACgAKAAAKAgAAAAACgAAAAAIAAioACAAAiKgCKgCACIqAIqAiKgoisoCKgIioCIqVBlFRARUURKCiIqKIioqIAIgCoAAAAAAKigAAAIigAAAAAACOoA0oAACigACggAoAAKAAqKAqKgKiigAKAAACgIAAAAAAoAAAAioAAAioAioAioAioAioCAAiKgCKgqIqAMqiAioCItZAZqpUERUQGVRRAFERUURFRUQBUQAQAAAAAAVFAAAARFAAAAAAAEdQUaVBQAAAFFAEBQABQAAUABUUBUVFAAUAAAFAQAAAAABQAAABFQAAEAARUARUARUARUBAARFQURUBEVARFRBAASstVkESqiCIqIIiooMtMqIBVERUVEAVEFQQAAAAAAVFAAAARFAAAAAAAEdUBpQAAAFAAVFRQABQAVFAABQAFBFAAUAAFAAAAQAAABQAAABAAABAAEABFQBABAAQAVEVAQAERUBEVEERUBKioCIqIIiogiKiiIqKIAoiKiogAgioqAAAAAACooAAACIoAAAAAAAjqgNKAoAAAAKAKAqAAAoAAoAAKAigKAAAqKAAAAgACgAAAAAIAAACAAgAIACAAgAqAAiKgICAIqAiKiCIqAiKlBEVEERUQRFRREVFEAURFRUQAQRUVAAAAAABUUAAABEUAAAAAAAR1QGlFAAAAFAAFFBAABQAFRQAAUBFFRQAAFRQAAAEAAUAAAAABAAEVAAAQAEABABUABEVAEVARFQBFQERUQRFQERUBEVEERUQRFRREVFEAURFRUQAQRUVAAAAAABUUAAABEUAAAAAAAR1gGlAAAAUAAAFARRUUAABQAABQEUVFAAAVFAAAAQABQAAAAAEAARUAABAAQAEAFQAERUARUBEVAQAERUQRFQESqgIiogiKiCIqKIiooiKigioogAyIqKgAAAAACgAAAAIigAAAAAACOsA0oAAqKAAAACgIoqKAACgAAoACKKigAAKigAIAAAAoAAAAACAAIqAAAgAIACACoACIqAIAIioCAAiKiCIqAiKgIiogiKiCIqKIiooiKigioogAyIqKgAAAAACgAAAAIigAAAAAACOsA0oAAqKAAAqKAAiqAAACgAKigAIqgAAAKAACAAAAKAAAAIqAAAIqAIqAAAgAIAKgAIioCAAiKgIioAiogiKgIioCIqIIiogiKiiIqKIiooIqKIAIIqKyAAAAAAoAAAACIoAAAAAAAjrANKAAKigAAKigAIqgAAAoACooACKoAAAKAAAgAAACgAAACKgAACKgCKgAAIAKgAIACIqAgAIioCIqAIqIIioCIqAiKiCIqIIiooiKiiIqKCKiiACCKisgAAAAAKAAAAAiKAAAAAAAI//9k="
                               quality={70}
                               width={200}
                               height={200}
                        />
                    </figure>
                    <article className="basis-2/3">
                        <p className="text-black content-center text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl pb-10">Stellar
                            Metal Machining&trade; offers custom machining services tailored to your needs. We craft
                            precision parts for various purposes, including engine components like spindles and custom
                            hardware, or fittings for furniture and fixtures. A few examples include:
                        </p>
                        <ul className="text-black text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl pb-10 space-y-4 list-disc">
                            <li>Custom hardware like bolts or brackets for audio equipment</li>
                            <li>Custom brackets for shelves</li>
                            <li>Specialized hooks for storage solutions</li>
                            <li>Unique components for lighting fixtures</li>
                        </ul>
                    </article>
                </section>

                <h3 className="text-black text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold border-t-4 border-gray-400 pt-10">Repair Work</h3>
                <section className="flex pt-16">
                    <figure className=" pr-16 basis-1/3 flex flex-col items-center">
                        <Image className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl"
                               src="/machineshop/metalNutAfter.jpg"
                               alt="Lathe Metal Nut After"
                               placeholder="blur"
                               blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAROAz4DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBQQD/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+YDqwAAAAAAAAAAAIAAAAoioAAgAAIqCgACKiAAAioAACACoAggACKgIACAAgCiAAgAIioAioAioCAAgAIAqIACAAgAIAAioAAAioAAAAAAAAgAAAAAAAIAAAAAAAAO0A6MgAAAAAAAAAACAAAAKIqAAIAACKgAAoiogAAIqAAAgAqAIIAAioCAAgAIAogAIACIqAIqAIqAgAIACAKiAAgAIACAAIqAAAIqAAAAAAAAIAAAAAAACAAAAAAAADtAOjIAAAAAAAAAAAgAAIqCgAACAAAgAACiKiAACAAAgAAqAIIAAioCAAgAIACAKIACIqAIqAIqAgAIACAKiIqAAAgAIAAioAAAioAAAAAAAAgAAAAAAAIAAAAAAAAO0A6MgAAAAAAAAAACACCgAAAACAACAAACiKiAACAAIqAACoAggACKgIACAAgAIAogAIioAioAioCAAgAIAqIioAACAAgACKgAACKgAAAAAAACAAAAAAAAgAAAAAAAA7QDoyAAAAAAAAAAAiAAAAKAAAICKgAAoACAIAIAAAioAAKgCCAAIqAgAIACAAgCiAAiKgCKgCKgIACAAgIqCKgCKgAAIAAioAAAgAAAAAAIAAAIAqAKCIKAAAAAAAAADtAOjIAAIAogCiAAAACAAKAAAgKIqAgAACgAIAgIqAAAIqAAgoAggACACAAgAIACAKICAIqAIqAIqAgAIACIqKgioAioACAAAgAAAIAAAAAAIIKIAqAAAAAAqCCgAAAAAAA7IDoyAAAAAAAAAAAIAAoIAqAAAgAAACiKiAAAioAACAAIqCgCCAAgAIACAAgAIACIqKCKgCKgCKgIACIqAIqKgioAioAioAACAAAgAAAACAAAAAgAAAAAAAICoAoigAAAA7IDoyAAAAAgKIAogCoCAAKAAAAAIAAAAqAIAAIAAACAAIqCgCCAAgAIACAAgAIACIqKCKgCKgCACAAiKgCKioIqAIqAIqAAAgACKgAACAAAAAgAAAAAAAAAIAAAACoAogDsgOjIAAAAAAAAAgAAACgAACAAAAAgCgCAioAAAioAAAioKAiAACAAgAIACAAgAIioAiooIqAgAIACIqAIqKgioAioAioACAAAgAAIAAAAAAgAAAAAAAAAIAAAAAAAAOyIOjKiAKIAogCiAKIIKICqIAoICiCCggAAAAoAggAAACKgAAIAiiKgAAIACAAgAIACAAiKgCKigioCAAgIAioAioIIqKCAAioAioAioAAAgAAAAACCCiAKIAAAogCgIAAAAAAAAOwA6MgAAAAAAAACAAKAAAAAIAAAAAAogIAAAAIAAACAIoioAACAAgAIACAAgAIioAiooIqAgAIioAioAioAioqIAAgAIqAIqAAAgAAAAIAAgAAAAAAAAAAoggoAAAAAOuA6MgAAAAAACAqAKICqIAogCiKgAgKIAACgCAAAioAAAioAAioAACAAAgAIACAAgAIioAioAioogAIioAioAioAgCIAogAIAAgAIqAAAAgAAACAAAAIAAACgAACAACiAKIA7Ag6MqIAogCiAKIIKAKAAAAAIAAAAAAoAgAAAgAAAAIAgACoAAioAACAAgAIACAAiKgCKgCKgIAoiKgCKgCKgIAIgAIAogAIACAAAAgAAAACIAAAAAAACgAACAAAAAADriDoyogCiKAAAAgACgAKgAoggoAAAAAoAgCAAAAAAIAAgAgoAAioAACAAgAIACAAiKgCKgCKgIAoiKgCKgIACACIACIqKAIACAAAIAAAAIAAiAAAACoAoigAgqiCCiKIACgAOsIOjKiKAAAAgACgAKIAogCgIAAAAAAoAgAAAAAgAAACAioKAAgACKgAAIACAAgAIioAioAioCAAiKigioCAAgAiIqAIqAIqKCKgAAIAACAACACAAAAAAAAAAAAgAAAAAA6wDogAAAgACgAKIoAAACAqAKIAogKoioAAAAAgAAAAgACiAAACAAIqAAgAIAACAAiKgCKgCACIqAIqKCKgIACIqCCKgCACAKCAAioAAAgAACAIgogCiAKIAogCgAAAAIAAAAOqA6AAgAAAAogCgAAAKggogCgAACgCAAAAAAAAAAgAgoAAioAAAgAIqAIqAIqAIqAIqAIqAgAIioAioAgKIioAioIIqAgAIACAAgACKgACggIgAAAAAAAAAAAAACiCCiAKADqANgAAAAqAKIoAAAAKIIKAAACiAqiKgAAAAAAAAAICAKAAIqAAAgACKgCKgCKgCKgCKgCKgIACIqAIqAgCiIqCCKgIACAgCKgAIAACAAIAAAgAAAAAAAAAAAAAAAAAAADqANAAAACiAKIoAAKIIKIoAAKICqAgAAAAogCiAKIIAAoAAACAAAAgACAAioAioAioAioCAAgAIioCAAiKgCKiiACIioAioAioAioACAAgAAgAACAogAAAAAqAKIoAAAAAAAAOmA0AAAAKIAogCgIKIAoACoAoiigCCiAKAAAAAAAgAAACiKgAAAIAACAAIqAIqAIqAgAIACAgCKgIACIqAIAIAqIioAioCAAgACAAioAAIIAAAAAAAAAAAAAAAAAAAAAOmINCiAKAAqAKIAoCCiAKACiAqgAoggoAAACoAoioAAAAoIAAAAAIqAAAgAIAAiogICiAAgAIioAioCAAiKgIACIqCCKiiAAgAICAAAgACAIAAAgAAAAAAKIAogCiAKIAoAAAOkINCiAKIoAAKIIKACiAKAKoigKggoigKgCiKAAAAgAAACgAAAAACAAACAIIAAgAgAIACAKIioAioCIqAIqAgAIioCACICKCKgCKgCAAioAAIIAAAAAAAAAAAAAAAAAAAAAOiA0KIAogCiKgKgCgAogKqoAoigKggoAKIoAAKIoACAAKAAAAAAAgACAioAACAAgAIACAAiKgCKiiAAiKgCKgIioAioCAAiKggiooIAIACAAIAgAAIAAAAAAAAAogCiKAAIAAAA6AgrSgAKgCiKAqAKIoKIAqoAoCCiKAqAKACiAKAgKgCgCgAAAAACAgAAIqAAAgAIACAAgAIioAioCAKIioCAAiKgCACIqAIqCICKAIAioACCAACAAAAAACAogCgCAAAAAAAAAAOgIK0oACoAoigKgCiKCiAKqAKAgoigoigKgCgICoAoAoACiAKIAoggAAAAgAAIAACAAgAIACIqAIqAgAIioogAIioCAAiKgIAIiKgCACAKCAAgCAICoAAAAAAAgAAAAAAqAKIAogDoCCtKIAoigogCgAoigogCqggqoAoAKIoKIoCoIKAKKgCgAAAAAAIAAAIAAAioAACAAgAIioAioAgAiKgCKgIioAiooiKgCKgICCCKgICAAgAIoAggAACAogCiAgAAqAKIoAAAAAAAAPcIqtCoAogCqgCiKCiKAqKgKigKgCqgCqgCgIKIooqKAAAqAKAAAgAAAAIAAACAAioACAAAiKgCKgIACIqAIqAiKgCACIqAgCiIqCIACIqAIqAIACAqAIAAAAICAKIoAAAAAAAAAAAAPcIK0ogCqgCiKCiANCKgoigogCqigKigKioCoCqqAKACiKAAAqCCiKACAqAAAAACAAIqAIqAIqAIqAIqAgAIioCAAiKgICAIqAiKgCAqIioAgAgAIioAAIgCgIAACAAAAAAAAgqAKIAogCiAPaArYqAKIoKIAqoIqqgCqigoigoigoioKIoKIoKIoCooAAKAgAAAAAAAAAAAgAACKgCKgCKgCKgCACAgCKgICAIqAiKgICAIqAiKgggKICAIqAIACAIIAACgICKgAAAogIogCiAKAAAAAD2CCuiiKCiCCqgCqgCqgCqigoigoioKIoKqAKqAKqAKACiKgKgCgAAAAAAAAAIqAAAgACAAgAIAICAIqAIAIioAgAiKgIioAggCKgIioIIqKICAAgAIIAAgCoAgKICKIAogCiAKAAAAAIAA9ggOqiAKqAKrKgqsqCqyoKqANCKgqoAqooCooCooKIoCooCoIKAAqAKAAAAAAACAAAgAAIACAAgAIioAioCAgCKgIioAgAiKgIioCAgCKgiAAiKgCAoIAggACAgAoAgiggKIAoAgAAACiAKIA9YgOqgAoigoigoigqoAqoqCiKCqigoigoigoAKqCCgAoAKIoAACooAAAACAAAAgAIqAAAgAICAIqAIqAiKgCKgIioCIqAIAIioCIqAIAIioIIAICAIqKgioACCKgKgAAAIAAAAAAogCiAKAD1CA6qIA0IAqoA0IoKqCCqigqsqCqigoigqoAqoqAqKCiKAqKAACgAAAKgAAAAAioAAAioAioAioAioAioggAIioCAAiKgIiooiKgCACIqAiKgCAIiKgCACAggCKAAggCACgAIAAKgCiKAAAAAAD0iKOyiAKqAKqAKqKiKrKgqooKqANCKCqigoioKACqgCqgCgAoACoAoAAAAAAAIAAAAgAIqAIqICKgCKgIACIqAgIAioCIqAiKgIioAgAiKiiIqCCACIqAIAggKCAIAgiiAKIoACoAAAAKgCiAKIA9IgOyiKCiKgqsqCqigqsqDQiiKqKCqyoNCKgqoAqooKIoKIoKIoCooAACoAoigAAIAAAACCAAIqAIqAIqAIAIioAioCIqAIIAioCIqAiKgIioCAgCKgIioqCCAIqCCKgggKAAgAAAAqAKIoAAgAoAAAA+6oI7KIA0IoKrKgqooKrKg0rKgqoqIqooKqAKqKCiKCqgCqigKigAAoAAAAAAAACAAAACAAIACKgCKgIACIqAgIAioCIqAiKgCCAIqAiKgIioCAgCAIiKgICKgCCAICiAiiAKAoAAAAogCgAAAACPsIDu0IAqoCNKyoKqKCqigqoqCqgDQiiKqKCqgCqigoigoAKACgAKigAAAIAAAAAACKgAAIACAAgIAioAioCIqAIqAiKgIioCIqAiKgCCAIqAiKgIioIgIAgCICCACgAAAAACiAiiKoAAAAogCiAPsIDsqoAqoA0rKg0IqIqooKqKCqigqooiqigoigqoAqooKIoKIoCooCoIKAAAAAAAAAAgAAgAIACAIqAIqAgAIioCAAiKgIioCIqAiKgIioCIqAiKgCCAIqCIioIIAgIAqACiAKIoACgAAqAigAAAAA+ogrsqoIKqKCqgDSsqI0rKg0rKg0IoKqKCqiiKqKCiKCqgCqigKigKggoAKIoAAAAAAAIAAAgAIqAIqAIqAIqAgIAioCIqAIAIioCIqIIioCIqAiKgIioCIqAiKgggggioAAAAAAoACKIAoAAAACiiAiiAPqIDuqoCKqKCqigqooKqKIqooKqKCqigqooKACqiiKIoKACgIKACiKAACiKAAACAAAAAgACKgCKgCKgIACIqAIAIioCIqCiCICCAIIIIIAioCIIAisgVBEQRUVEAAQAAAAAUQBQAAFRRAFAAAAAB9BFV2FRQVWVEaEUGlZUGlQEaVFBVQBpUUFVAFVFQVUFRVRUFEUFABQAFRQAAAAVAAAAAARUAABAAEAEABAQBFQEBBRFQERUQRFQERUBEVARFQREVASoqIJUVARFqCICKgioAAAAAAAAAqAKAAAIKgCiKAADYDTsqoAqooiqigqpFBVRRFaZioKqKoqoqCqigqooKACqiiCooCooCooAAKAAAAAAAAACAAAgAAIACAgCKgCAKiKgICICKgIioCIqAiKgIioCJVRBEVBEQqIFRaiiIqKiACACgCAoAACAAAqAKAAAIAAAA+gCuygAqooiqigqooKsSKCqiiKqKCqigqooKqKCgAqoogqKAqKAqAKAAqAKAAAAAAgAAAIqAIqAIqAIqCiKgICICKgIioCAgCKgIioCIqAiKygJRKCJVRBEVBERUqiAioAKggCgAAAKIogAAAgKgCgAACAAPoCq7AAKqKIqxFBVRQWKkUFVFEVUUFVFBVRQVUUFEUFABVQEVUAUAFAAAAVAFAAQAAAAAQABFQURUARUQQAERUAQARFQERUBEVAEEAQQEqKiCJVSgiVUqCIqCIiooiKioICoACgAAAAAKIogAgAAKgCgAAA+igrqKiiCgCqigqooKsRQVUURVRQVUUFVFBVQBVRQURQUAFAEUABUUAAAAAAAAAAURUAABAAQBBAAQEARUBEVAEAERUBEVARFQESqiCIqAiVUQRBAEAEQRUEVFRAFAAAAAAAAAAFAEAEAAAAFEAfYBXQUAUFAUUBUUFVFEVUUFVFBVRQVUUFABVRQFRQUAFABRFAVAFAAAAAAAAABAAEVEAAEABAQBFQEABEVAQEARUBEVARFQERUQSotZAZqpUERUBEVARKqNIiKioAAIAAACoAoAAACoCKAAAgAAAA+4CugoAKAKqKCqigqooigoCooKqKCqigoAKqKAqKCiKCiKAqKAACgAAAAAAAAiAAAioACAIqAIqAIqAgAIioCIqAiKgICAIIAgiCJVSgiVUqCIqAiKiiIqKiIqKgioAAoAAAAKioAAAAKIogAgAAAA9ACugoAKigKKAqKIqooKqKCgoCgCqigoAKqKAqKAqKAqKAqKAAAqKAAAAAAgIqAAAIACKgCKgCKgIACIqAIqAiKgIioCIqAiKiCIqColVEESqlQRFRURFRREVlUEVFQQAAFUAAAAARFAAAAVARQAAEAAHpAV0AUAFAUBFVFAUAVUUFVFBQUBUUFBQFRQFRQFRQFRQFRQAAFRQAAAEAAEAABAAAQABABAAQEARUBAQBFQVEVARFQEqKiCIqAiVUqCMqiAgioIIoM1UqogIqACgAKAAAAACCoqAAAACiKIAAAIPSKNNgKACoCooCgCqigKKAqKCqigKAKqKAqKAqKCgAKigAAoAAAKAgAgKgAAAIAAAIACAAgAIioAgCoioCAgCKgIiogiKgJUVARmtM1BEVEERUURFRURFRURFRQAUAAAAAAAAAERQAAAFQEUAABB6lBpsABQAUAFVFAUEFVFBQUBUUFABVRQFRQFRQUABUUAAFAAAQAAAAAAAAQABFQAEABAEVBRFQEBAEVARFQEBAEBBEqpQZRUBEqpUERUQRFRREVFREVFERUVABQBAUQBQAAAABFEVAAAABRFEAAetQVsAAUAFAFBQFRUBRQFRQUAFVFAVFAUAUAFAAVFAABQEAAAAAAAABFQAABAARUFEVAEVAQAERUBAARFQERUBEVEERUBEqpUESqiCIqAiKiiIqKiIqKIioqACiAAAAoigAAACCoqAAAAAqAigA9gorYAIKACgAoCqCgKioCgCgoCooCooKACgAoACooAAKIqAAAAAAAACAAACoACAAgAIACAgCKgIioAgAiKgIiogiKgIiogiLUQRFQEQFERUURFSqiIqKgiooAAAAKgCgAACCoqAAAAAAIKgD3CitAACgAqKAqKAqKKoCCqigKigKACgCgAoAKAAqKAAgKigAAAAAAIAAAoioAACAAgAICAIqAgAIioCAAiKiCIqAiKgIioglZVEERUBARQZVFESqioICogCgAAAAACgAAAKgiKAAAAAAAI94orQAACgAoAKACgKigKioqgAoAKACgAoAKAAqKAAgAAoAAAAIAAKAAIACKgAAICAIqAIqAgAIioCAgCAgiKgIlVKCIIglRaiKiKgiIqKIio0IioqIAIgCgAAAAACgAAAAIigAAAAAACOgKK0igACgigAoAKACgCgAoKiiooAKACgAAoACooACAAAACoAAAoAAACAAIqAIqAIqAIqAIAIioAioCIqAiKiAgAjNaZBEWoglRURURUBEVGkRFRREVFRAFEAEAAAAAAURQAAAERQAAAAAABHRAVoBQAAFAAFABQAUAFAVFRRUUBUUBUUBUUAABQAAQAAAAABQAAAAAEAAQAEVAEVAEAEABEVAQAERUBEVEERUBEVBUqLUQRFRBEVFERUVERUURFRRAFRABAAAAAABUUAAABEUAAAAAAAR0gGmgABQQAUAABQAUAFABQBQEUUAFRQFRQAAUBAAAAAAFAAAAAAEVAAAQAEAAQAQAERUARUBEVAEAERUQRFQERUFRKqVBEVEERUURFRREVFREVFEAVEAEAAAAAAFRQAAAERQAAAAAABHSUGmgAAFBFBAVFABQAUAAFABQEVQAFRQFRQAAUBAAAAAAFAAAAAAEABFQAAEABAAQEARUBAARFQERUARURURUBEVARKqVBEEQEVFERUqiIqKIioqIAIgCoAAAAAAKigAAAIigAAAAAACOmA00CgAAAKgAAoACgAqKACgKiooACgAKAAAKAgAAAAACgAAAAAIAAioACAAAiKgCKgCACIqAIqAiKgoisoCKgIioCIqVBlFRARUURKCiIqKIioqIAIgCoAAAAAAKigAAAIigAAAAAACOoA0oAACigACggAoAAKAAqKAqKgKiigAKAAACgIAAAAAAoAAAAioAAAioAioAioAioAioCAAiKgCKgqIqAMqiAioCItZAZqpUERUQGVRRAFERUURFRUQBUQAQAAAAAAVFAAAARFAAAAAAAEdQUaVBQAAAFFAEBQABQAAUABUUBUVFAAUAAAFAQAAAAABQAAABFQAAEAARUARUARUARUBAARFQURUBEVARFRBAASstVkESqiCIqIIiooMtMqIBVERUVEAVEFQQAAAAAAVFAAAARFAAAAAAAEdUBpQAAAFAAVFRQABQAVFAABQAFBFAAUAAFAAAAQAAABQAAABAAABAAEABFQBABAAQAVEVAQAERUBEVEERUBKioCIqIIiogiKiiIqKIAoiKiogAgioqAAAAAACooAAACIoAAAAAAAjqgNKAoAAAAKAKAqAAAoAAoAAKAigKAAAqKAAAAgACgAAAAAIAAACAAgAIACAAgAqAAiKgICAIqAiKiCIqAiKlBEVEERUQRFRREVFEAURFRUQAQRUVAAAAAABUUAAABEUAAAAAAAR1QGlFAAAAFAAFFBAABQAFRQAAUBFFRQAAFRQAAAEAAUAAAAABAAEVAAAQAEABABUABEVAEVARFQBFQERUQRFQERUBEVEERUQRFRREVFEAURFRUQAQRUVAAAAAABUUAAABEUAAAAAAAR1gGlAAAAUAAAFARRUUAABQAABQEUVFAAAVFAAAAQABQAAAAAEAARUAABAAQAEAFQAERUARUBEVAQAERUQRFQESqgIiogiKiCIqKIiooiKigioogAyIqKgAAAAACgAAAAIigAAAAAACOsA0oAAqKAAAACgIoqKAACgAAoACKKigAAKigAIAAAAoAAAAACAAIqAAAgAIACACoACIqAIAIioCAAiKiCIqAiKgIiogiKiCIqKIiooiKigioogAyIqKgAAAAACgAAAAIigAAAAAACOsA0oAAqKAAAqKAAiqAAACgAKigAIqgAAAKAACAAAAKAAAAIqAAAIqAIqAAAgAIAKgAIioCAAiKgIioAiogiKgIioCIqIIiogiKiiIqKIiooIqKIAIIqKyAAAAAAoAAAACIoAAAAAAAjrANKAAKigAAKigAIqgAAAoACooACKoAAAKAAAgAAACgAAACKgAACKgCKgAAIAKgAIACIqAgAIioCIqAIqIIioCIqAiKiCIqIIiooiKiiIqKCKiiACCKisgAAAAAKAAAAAiKAAAAAAAI//9k="
                               quality={70}
                               width={200}
                               height={200}
                        />
                    </figure>
                    <article className="basis-2/3">
                        <p className="text-black content-center text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl pb-10">Stellar
                            Stellar Metal Machining™ specializes in precise and reliable repair work to restore your machinery and equipment to optimal condition. Our experienced team can handle a variety of repairs, ensuring durability and functionality. A few examples of our repair work include:

                        </p>
                        <ul className="text-black text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl pb-10 space-y-4 list-disc">
                            <li>Restoration of worn-out engine parts: We repair and refurbish spindles, shafts, and other engine components to extend their lifespan.</li>
                            <li>Custom repair solutions for unique items: We design and fabricate custom parts for specific repair needs, ensuring a perfect fit for your items. A few examples include home appliances, sports equipment, bicycles, 3d printer parts, garden tools, and furniture.</li>
                            <li>Welding repairs: We fix broken or damaged metal parts with precision welding techniques.</li>
                            <li>Precision machining for damaged components: We restore parts with precise machining to ensure they meet original specifications.</li>
                        </ul>
                    </article>
                </section>
                <figure>
                    <figcaption></figcaption>
                </figure>
            </section>
        </article>
    )
}