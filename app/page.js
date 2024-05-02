'use client'

import Image from 'next/image';
import HamburgerAnimated from "@/components/HamburgerAnimated";
import ScrollablePage from "@/components/ScrollablePage";
import Carousel from "@/components/Carousel";
import AvailableServices from "@/components/AvailableServices";
import Contacts from "@/components/Contacts";

export default function Home() {
    ScrollablePage({
        trackedElement: 'page-bottom',
        containerElement: 'page-container'
    })
  return (
      //bg-gradient-radial from-gray-700 to-black
      <div className="bg-white" id="page-container">
          <div className="">
              <HamburgerAnimated/>
              <div className="flex-1 text-center pt-4 pb-4">
                  <Contacts/>
                  <div className="flex justify-center">
                      <Image className="p-7 justify-center"
                             src="/WickedMachiningLogo.jpg"
                             width={700}
                             height={200}
                             alt=""
                      />
                  </div>
                  <div style={{fontSize: "x-large"}} className="text-black">Striving towards Excellent Quality Machining at an Affordable Cost!</div>
              </div>
          </div>
          <div style={{display: "flex", justifyContent: "center", padding: "2em"}} className="border-t-8">
              <Image className="p-7 justify-center shadow-xl shadow-gray-600"
                     src="/machineshop/lathe.jpg"
                     width={600}
                     height={600}
                     alt="Lathe"
              />
          </div>
          <div className="text-4xl text-center p-5">What We Can Provide for You</div>
          <AvailableServices />
          <div id="page-bottom">
          </div>
      </div>
  );
}
