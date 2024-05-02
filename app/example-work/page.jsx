'use client'
import HamburgerAnimated from "@/components/HamburgerAnimated";
import Image from "next/image";

export default function ExampleWork() {
    return (
        <div className="bg-white">
            <div className="">
                <div className="">
                    <HamburgerAnimated/>
                    <div className="flex-1 text-center pt-4 pb-4">
                        <div style={{fontSize: "xxx-large"}} className="text-black">Example Work Gallery</div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", padding: "2em"}} className="border-t-8">
                <div>
                    <div className="bg-zinc-200 shadow-gray-600 shadow-xl m-7">
                        <Image className="p-7 justify-center"
                               src="/machineshop/cylinder.jpg"
                               width={600}
                               height={600}
                               alt="Cylinder"
                        />
                    </div>
                    <div className="bg-zinc-200 shadow-gray-600 shadow-xl m-7">
                        <Image className="p-7 justify-center"
                               src="/machineshop/work-example-1.jpg"
                               width={600}
                               height={600}
                               alt="Handle"
                        />
                    </div>
                </div>
                <div>
                    <div className="bg-zinc-200 shadow-gray-600 shadow-xl m-7">
                        <Image className="p-7 justify-center"
                               src="/machineshop/rod-drill.jpg"
                               width={600}
                               height={600}
                               alt="Rod"
                        />
                    </div>

                    <div className="bg-zinc-200 shadow-gray-600 shadow-xl p-7">
                        <Image className="justify-center"
                               src="/machineshop/turningDown.jpg"
                               width={600}
                               height={600}
                               alt="turning down"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}