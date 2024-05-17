export default function Services() {
    return (
        <div className="w-full h-4/5">
            <article className="w-full h-full z-10">
                <div className="flex flex-col justify-between h-5/6 w-full">
                    <h2 className="font-extrabold text-center text-lg sm:text-xl md:text-2xl xl:text-4xl tracking-wide col-start-2 justify-self-start mb-10 md:p-4 bg-blue-400 border-black border-2 shadow-black shadow-xl">Overview
                        of Our Services
                    </h2>

                    <article className="flex flex-col justify-self-center pl-2 pr-2 h-3/5 md:pb-3 xl:pb-5">
                        <h2 className="flex font-extrabold bg-blue-400 text-[13px] sm:text-lg md:text-xl xl:text-3xl text-center justify-center shadow-black shadow-lg rounded-lg p-2 m-3 border-2 border-gray-500">
                            Repair Work:
                        </h2>

                        <ul className="font-bold text-black list-disc text-xs sm:text-[16px] md:text-lg/[24px] xl:text-xl h-full text-start pb-2 md:pb-4 xl:pb-8 pl-6">
                            <li>Motor Shaft Repair</li>
                            <li>Spindle Repair</li>
                            <li>Bolt Threads Repair</li>
                            <li>Metal Crack or Break Repair</li>
                            <li>Heli-Coil Fix</li>
                        </ul>
                    </article>

                    <article className="flex flex-col justify-self-center pl-2 pr-2 h-3/5 md:pb-3 xl:pb-5">
                        <h2 className="flex font-extrabold bg-blue-400 text-[13px] sm:text-lg md:text-xl xl:text-3xl text-center justify-center shadow-black shadow-lg rounded-lg p-2 m-3 border-2 border-gray-500">
                            Basic Fabrication:
                        </h2>

                        <ul className="font-bold text-black list-disc text-xs sm:text-[16px] md:text-lg/[24px] xl:text-xl h-full text-start pb-2 md:pb-4 xl:pb-8 pl-6">
                            <li>Welding</li>
                            <li>Lathe Work</li>
                            <li>Drilling</li>
                            <li>Resurfacing</li>
                        </ul>
                    </article>

                    <article className="flex flex-col justify-self-center pl-2 pr-2 h-3/5 md:pb-3 xl:pb-5">
                        <h2 className="flex font-extrabold bg-blue-400 text-[13px] sm:text-lg md:text-xl xl:text-3xl text-center justify-center shadow-black shadow-lg rounded-lg p-2 m-3 border-2 border-gray-500">
                            Precision Machining:
                        </h2>

                        <ul className="font-bold text-black list-disc text-xs sm:text-[16px] md:text-lg/[24px] xl:text-xl h-full text-start pb-2 md:pb-4 xl:pb-8 pl-6">
                            <li>Thread Milling or Tapping</li>
                            <li>Custom Screws, Bolts, or Fittings</li>
                        </ul>
                    </article>
                </div>
            </article>
        </div>
    )
}