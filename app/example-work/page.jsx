'use client'
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import {lora} from "@/app/fonts";

export default function ExampleWork() {
    return (
        <article className="bg-white">

            <header className="border-b-8 border-gray-500">
                <NavigationBar />

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

                <div className="flex flex-col text-center items-center p-10 justify-center">
                    <p className={`${lora.className} font-extrabold text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-32 pt-10`}>&quot;Precision in Every Detail&quot;</p>
                    <h1 className="font-bold bg-blue-950 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Example
                        Work Gallery</h1>
                </div>
            </header>

            <section className="flex flex-col justify-center text-center p-8 bg-zinc-200 m-4">
                <div className="flex justify-center text-center pb-10 pt-10">
                    <h2 className="underline decoration-yellow-200 font-extrabold text-black bg-zinc-200 p-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Here are Some of Our Projects:</h2>
                </div>

                <main className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row w-2/3 self-center">

                    <figure className="bg-off-white shadow-gray-600 shadow-xl m-7 rounded-lg">
                        <Image className="p-7 justify-center"
                               src="/machineshop/cylinder.jpg"
                               width={600}
                               height={600}
                               alt="Cylinder turned down in our lathe"
                        />
                        <figcaption className="p-4 text-black font-extrabold"></figcaption>
                    </figure>

                    <figure className="bg-off-white shadow-gray-600 shadow-xl m-7 rounded-lg">
                        <Image className="p-7 justify-center"
                               src="/machineshop/work-example-1.jpg"
                               width={600}
                               height={600}
                               alt="This is an example of a handle made on our lathe and drill"
                        />
                        <figcaption className="p-4 text-black font-extrabold">Here is a Custom Handle we Made. It was Turned Down and on Our Lathe, With any Necessary Holes Drilled With Our Pillar Drill</figcaption>
                    </figure>

                    <figure className="bg-off-white shadow-gray-600 shadow-xl m-7 rounded-lg">
                        <Image className="p-7 justify-center"
                               src="/machineshop/rod-drill.jpg"
                               width={600}
                               height={600}
                               alt="A rod that was turned down in lathe, then drilled"
                        />
                        <figcaption className="p-4 text-black font-extrabold"></figcaption>
                    </figure>

                    <figure className="relative bg-off-white shadow-gray-600 shadow-xl m-7 rounded-lg">
                        <Image className="p-7 justify-center"
                               src="/machineshop/turningDown.jpg"
                               width={600}
                               height={600}
                               alt="turning down"
                        />
                        <figcaption className="p-4 text-black font-extrabold">Here is a Rod that Needed to Be a Pressed Fit, Which was Turned Down in Our Lathe</figcaption>
                    </figure>
                </main>
            </section>
        </article>
    )
}