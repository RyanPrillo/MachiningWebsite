'use client'

import Image from 'next/image';
import HamburgerAnimated from "@/components/HamburgerAnimated";
import ScrollablePage from "@/components/ScrollablePage";
import Carousel from "@/components/Carousel";
import AvailableServices from "@/components/AvailableServices";

export default function Home() {
    ScrollablePage({
        trackedElement: 'page-bottom',
        containerElement: 'page-container'
    })
  return (
      <div id="page-container">
          <div className="">
              <HamburgerAnimated/>
              <div className="flex-1 text-center pt-4 pb-4">
                  <div style={{fontSize: "xx-large"}} className="">Prillo Machining</div>
              </div>
              {/*<div className="flex-1 bg-white"></div>*/}
          </div>
          <div>
          </div>
          <div style={{display: "flex", justifyContent: "center", padding: "2em"}} className="border-t-8">
              <Image className="p-7 justify-center"
                     src="/lathe.jpg"
                     width={600}
                     height={600}
                     alt="Lathe"
              />
          </div>
          <AvailableServices />
          <div id="page-bottom">
          </div>
      </div>
  );
}
