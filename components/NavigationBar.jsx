import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faEnvelope, faFolderOpen, faHome, faInfo} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Contacts from "@/components/Contacts";
import {useInView} from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";
export default function NavigationBar() {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    const navBarRef = useRef(null);

    const [navBarHeight, setPlaceHolderHeight] = useState(0);

    useEffect(() => {
        if (navBarRef.current) {
            setPlaceHolderHeight(navBarRef.current.clientHeight);
        }
    }, []);

    return (
        <div className="h-40">
            <div className={`bg-orange-400 h-40`} style={{ height: `${navBarHeight}px`}}></div>
            {/* Invisible div at the top of the content to observe */}
            <div ref={ref} className="">
                <div ref={navBarRef} className={`transition-all ease-in-out duration-300 ${inView ? "" : ""} ${navBarHeight === 0 ? "invisible" : ""} h-40 fixed top-0 flex w-full z-50 bg-blue-950 border-b-2 border-gray-400 items-center justify-evenly`}>

                    <div className="flex items-center z-50 h-full text-center">

                        <div className="flex items-center p-1 md:p-2 lg:p-3">
                            <Image className=""
                                   src="/StellarMetalLogoSquare.svg"
                                   loading="eager"
                                   width={150}
                                   height={150}
                                   alt="Stellar Metal Machining Logo"
                            />
                        </div>

                        <div className="flex p-2 md:p-3 lg:p-4">
                            <div className={``}>
                                <Link href="/" aria-label="Go to Homepage">
                                    <FontAwesomeIcon icon={faHome} style={{color: "#6b7be8"}} className="inline text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"/>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="grid lg:flex lg:space-x-8 lg:items-center lg:justify-center h-full p-4">

                        {/*The first grid, switches to have no columns at device sizes greater than 1024px in order to make the nav links in-line*/}
                        <div className="grid grid-cols-2 lg:grid-cols-none gap-8 lg:flex lg:space-x-4 items-center">
                            <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold md:whitespace-nowrap whitespace-normal text-white">
                                <Link href="/about-us" aria-label="Learn about our shop">About Our Shop</Link>
                            </div>

                            {/*<FontAwesomeIcon icon={faFolderOpen} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>*/}

                            <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold md:whitespace-nowrap whitespace-normal text-white">
                                <Link href="/example-work" aria-label="View our example work">Example Work</Link>
                            </div>
                        </div>


                        {/*The second grid, which just like the above one, switches at device sizes greater than 1024px to have no columns in order to make the nav links in-line*/}
                        <div className="grid grid-cols-2 lg:grid-cols-none gap-8 lg:flex lg:space-x-4 items-center">

                            <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold md:whitespace-nowrap whitespace-normal text-white">
                                <Link href="/services" aria-label="View our list of services">Services</Link>
                            </div>

                            <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold md:whitespace-nowrap whitespace-normal">
                                {/*A React component which has an email icon, as well as the link to the contacts page*/}
                                <Contacts />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}