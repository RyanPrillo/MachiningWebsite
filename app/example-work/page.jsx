'use client'
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";

export default function ExampleWork() {
    return (
        <article className="bg-white">

            <header className="border-b-8 border-gray-500">
                <NavigationBar />

                <figure className="flex justify-center pt-4 pb-4">
                    <Image className="p-4 m-8 border-4 justify-center"
                           src="/StellarMetalLogoExtended.svg"
                           width={500}
                           height={100}
                           alt="Stellar Metal Machining Logo"
                    />
                </figure>

                <div className="flex text-center p-10 justify-center">
                    <h1 className="font-bold bg-blue-950 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Example Work Gallery</h1>
                </div>
            </header>

            <section className="flex flex-col justify-center text-center p-8 bg-zinc-200 m-4">
                <div className="flex justify-center text-center p-10">
                    <h2 className="underline decoration-yellow-200 font-extrabold text-black bg-zinc-200 p-6 w-1/2 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Here are Some of Our Projects:</h2>
                </div>

                <main className="grid grid-rows-2 grid-cols-3">

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

                    <figure className="relative bg-off-white shadow-gray-600 shadow-xl m-7 h-2/3 rounded-lg">
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