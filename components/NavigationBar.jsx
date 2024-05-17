import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faEnvelope, faFolderOpen, faHome, faInfo} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Contacts from "@/components/Contacts";
export default function NavigationBar() {

    const homeButton = useRef(null);
    const [homeButtonIsSticky, setHomeButtonSticky] = useState(false);
    const handleScroll = () => {
        if (homeButton.current) {
            setHomeButtonSticky(homeButton.current.getBoundingClientRect().top <= 0)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },);

    return (
        <div className="flex w-full z-50 h-40 bg-blue-950 border-b-2 border-gray-400 items-center justify-evenly">

            <div className="flex items-center z-50 h-full text-center">

                <div className="flex items-center p-1 md:p-2 lg:p-3">
                    <Image className=""
                           src="/StellarMetalLogoSquare.svg"
                           width={150}
                           height={150}
                           alt="Stellar Metal Machining Logo"
                    />
                </div>

                <div className="flex p-2 md:p-3 lg:p-4" ref={homeButton}>
                    <div className={`transition-all duration-300 ${homeButtonIsSticky ? 'fixed top-0 left-0 w-full p-2 bg-white z-50' : ""}`}>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHome} style={{color: "#6b7be8"}} className="inline text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"/>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="grid lg:flex lg:space-x-8 lg:items-center lg:justify-center h-full p-4">

                {/*The first grid, switches to have no columns at device sizes greater than 1024px in order to make the nav links in-line*/}
                <div className="grid grid-cols-2 lg:grid-cols-none gap-8 lg:flex lg:space-x-4 items-center">
                    <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold md:whitespace-nowrap whitespace-normal">
                        <Link href="/about-us">About Our Shop</Link>
                    </div>

                    {/*<FontAwesomeIcon icon={faFolderOpen} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>*/}

                    <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold md:whitespace-nowrap whitespace-normal">
                        <Link href="/example-work">Example Work</Link>
                    </div>
                </div>


                {/*The second grid, which just like the above one, switches at device sizes greater than 1024px to have no columns in order to make the nav links in-line*/}
                <div className="grid grid-cols-2 lg:grid-cols-none gap-8 lg:flex lg:space-x-4 items-center">

                    <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold md:whitespace-nowrap whitespace-normal">
                        <Link href="/services">Services</Link>
                    </div>

                    <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold md:whitespace-nowrap whitespace-normal">
                        {/*A React component which has an email icon, as well as the link to the contacts page*/}
                        <Contacts />
                    </div>

                </div>

            </div>
        </div>
    )
}