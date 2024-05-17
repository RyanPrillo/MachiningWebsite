'use client'

import Image from 'next/image';
import HamburgerAnimated from "@/components/HamburgerAnimated";
import ScrollablePage from "@/components/ScrollablePage";
import Carousel from "@/components/Carousel";
import AvailableServices from "@/components/AvailableServices";
import Contacts from "@/components/Contacts";
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";
import Services from "@/components/Services";

// 1946 American Pacemaker
// 1979 Bridgeport Series 1

export default function Home() {
    // ScrollablePage({
    //     trackedElement: 'page-bottom',
    //     containerElement: 'page-container'
    // },)
  return (
      // creating the div containing the full page
      <div className="justify-center h-full bg-zinc-200 w-full shadow-[0_35px_90px_-15px_rgba(0,0,0,0.3)] shadow-black" id="page-container">
          <header className="z-50 self-start w-full">
              <NavigationBar/>
          </header>

          {/*This section contains the elements above the fold*/}
          <section className="h-screen w-full">
              <article className="grid grid-rows-6 grid-cols-1 h-full w-full relative">

                  {/*Slogan*/}
                  <h1 className="flex font-extrabold text-yellow-200 row-start-2 row-end-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl z-10 text-center justify-self-center items-center backdrop-blur-lg backdrop-opacity-100 backdrop-saturate-50 self-start">Crafting
                      Precision in Every Detail</h1>

                  {/*Identifies our goals and the purpose of the shop*/}
                  <section
                      className="z-10 flex flex-col shadow-black shadow-xl items-center w-2/3 row-start-3 row-end-4 justify-self-center h-fit p-4 bg-grayish-blue">
                      <button
                          className="bg-blue-400 rounded-2xl h-1/3 font-extrabold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl m-4 p-2">Request
                          A Quote Now!
                      </button>
                      <h2 className="font-extrabold text-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-grayish-blue tracking-wide pb-4">Tailored
                          Machining Services for Your Specific Needs:</h2>
                      <p className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-grayish-blue">Stellar
                          Metal&#8482; Takes on Many Jobs that Bigger Machine Shops Decline Due to Small Volume. We Help
                          Small Businesses and Startups Prototype and Produce Parts</p>
                  </section>

                  {/*the background image, above the fold*/}
                  <Image
                      src="/machineshop/lathe-in-motion.jpg"
                      fill
                      style={{objectFit: "cover"}}
                      className="absolute inset-0 z-0"
                      alt="Stellar Metal Machine Shop Lathe in Motion"
                  />

                  {/*call to action*/}
                  <p className="w-full font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl row-start-6 row-end-7 self-end bg-blue-950 p-2 md:p-8 text-white border-t-4 border-b-4 border-gray-200 text-center z-20">
                      <Link href="contact" className="font-extrabold text-yellow-200">Click Here To Contact Us
                          Today! </Link> We Work Directly with Each Customer to Provide Them With Exactly What They Need
                  </p>
              </article>
          </section>

          {/*contains before and after photos from a project, as well as a description of some of our core values*/}
          <section className="border-4 border-t-gray-400 flex bg-off-white h-1/3 xs:h-1/4 w-full items-center">
              <div className="relative left-4 md:left-10 lg:left-20 scale-50 md:scale-75 lg:scale-100">
                  <figure className="flex flex-col md:flex-row">
                      <Image className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl"
                             src="/machineshop/metalNutBefore.jpg"
                             alt="Lathe Metal Nut Before"
                             width={200}
                             height={200}
                      />
                      <figcaption className="flex text-xl text-black items-center">Start of Lathe Work</figcaption>
                      <Image className="overflow-hidden rounded-xl shadow-black shadow-xl m-4"
                             src="/machineshop/metalNutAfter.jpg"
                             alt="Lathe Metal Nut After"
                             width={200}
                             height={200}
                      />
                      <figcaption className="flex text-xl text-black items-center">Finished Product</figcaption>
                  </figure>
              </div>
              <article className="grid columns-1 rows-4 w-4/6 text-center h-full">
                  <h4 className="font-bold text-xl self-start pt-5 mr-5 mt-5 sm:text-xl md:text-2xl lg:text-3xl text-black tracking-normal lg:tracking-wide underline underline-offset-4">From
                      Metal, To Masterpiece!</h4>
                  <p className="font-semibold m-5 row-start-2 row-end-4 text-black w-3/5 justify-self-center text-sm md:text-sm lg:text-xl leading-normal md:leading-7 lg:leading-8">At
                      Stellar Metal Machining, every project is a journey towards perfection. We take great pride in
                      everything we do, from turning metal into finely crafted pieces, to repairing broken metal
                      components. Our meticulous attention to detail ensures that every job, big or small, meets our
                      high standards of quality and precision. Let us turn your concepts into reality, contact us
                      today!</p>
              </article>
          </section>

          <section className="flex flex-col justify-center w-full p-4 border-b-4 border-off-white h-1/2 items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-extrabold text-center underline p-6 h-1/3 decoration-blue-400">
                  A Few of Our Projects:
              </h2>

              <article className="grid grid-col-2 md:grid-rows-2 md:grid-cols-3 w-2/3">

                  <figure className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl">
                      <Image className="justify-center"
                             src="/machineshop/cylinder.jpg"
                             width={400}
                             height={400}
                             alt="Cylinder turned down in our lathe"
                      />
                      <figcaption className="p-4 text-black font-extrabold text-center text-sm md:text-lg lg:text-xl xl:text-2xl"></figcaption>
                  </figure>

                  <figure className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl">
                      <Image className="justify-center"
                             src="/machineshop/work-example-1.jpg"
                             width={400}
                             height={400}
                             alt="This is an example of a handle made on our lathe and drill"
                      />
                      <figcaption className="p-4 text-black font-extrabold text-center text-sm md:text-lg lg:text-xl xl:text-2xl">Here is a Custom Handle We Made. It was
                          Turned Down and on Our Lathe, With any Necessary Holes Drilled With Our Pillar Drill
                      </figcaption>
                  </figure>

                  <figure className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl">
                      <Image className="justify-center"
                             src="/machineshop/rod-drill.jpg"
                             width={400}
                             height={400}
                             alt="A rod that was turned down in lathe, then drilled"
                      />
                      <figcaption className="p-4 text-black font-extrabold text-center text-sm md:text-lg lg:text-xl xl:text-2xl"></figcaption>
                  </figure>

                  <figure className="m-4 overflow-hidden rounded-xl shadow-black shadow-xl">
                      <Image className="justify-center"
                             src="/machineshop/turningDown.jpg"
                             width={400}
                             height={400}
                             alt="turning down"
                      />
                      <figcaption className="p-4 text-black font-extrabold text-center text-sm md:text-lg lg:text-xl xl:text-2xl">Here is a Rod that Needed to Be a Press
                          Fit, Which was Turned Down in Our Lathe
                      </figcaption>
                  </figure>
              </article>

          </section>

          {/*A basic description of what the company specializes in*/}
          <h3 className="flex font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl border-4 border-gray-400 w-full p-2 leading-4 md:leading-loose z-10 row-start-1 row-end-2 text-center justify-self-center backdrop-blur-sm backdrop-opacity-100 backdrop-saturate-50 bg-blue-950">
              <div className="justify-center self-center"><strong className="text-yellow-200">Stellar Metal
                  Machining</strong> Specializes in Product Prototyping, Small Parts Fabrication, Shaft + Spindle Repair, and Broken Bolt Removal
              </div>
          </h3>

          <section className="flex h-screen mx-auto relative text-center shadow-black shadow-xl">

              {/*the background image*/}
              <Image
                  src="/machineshop/lathe.jpg"
                  height={450}
                  width={450}
                  style={{objectFit: "cover"}}
                  className="z-0 rounded overflow-hidden basis-1/2"
                  alt="Stellar Metal Machine Shop Lathe"
              />
              <figure className="h-full flex flex-1 items-start z-20 p-5 justify-center">
                  <Services/>
              </figure>

          </section>

          <section className="border-4 border-t-gray-400">
              <h5 className="text-black font-bold text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide pt-10">Overview
                  of Our Services</h5>
          </section>
      </div>
  );
}
