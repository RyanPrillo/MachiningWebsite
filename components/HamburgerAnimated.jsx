import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faEnvelope, faBriefcase, faFolderOpen, faHome} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HamburgerAnimated = () => {
    let [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`fixed ${isOpen ? 'h-full w-4/12 bg-white border-black border-4 border-opacity-20' : ''}`}>
            <div className={`rounded-xl border-white bg-white border-8 m-7 whitespace-normal`}>
                <button className={`justify-center focus:outline-none`} onClick={toggleMenu}>
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12 transition-all bg-slate-700 duration-200 shadow-md">
                        <div className="flex flex-col justify-between w-7 h-7 transition-all duration-300 origin-center overflow-hidden">
                            <div className={`bg-white h-1 w-9 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10' : ''}`}></div>
                            <div className={`bg-white h-1 w-9 rounded transition-all duration-300 ${isOpen ? 'translate-x-10 delay-75' : ''}`}></div>
                            <div className={`bg-white h-1 w-9 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10 delay-150' : ''}`}></div>

                            <div className={`absolute items-center transition-all duration-500 top-5 ${isOpen ? 'translate-x-0 translate-y-0' : 'translate-x-10'} w-12`}>
                                <div className={`absolute bg-white h-1 w-7 transform transition-all duration-500 delay-300 ${isOpen ? 'rotate-45' : ''}`}></div>
                                <div className={`absolute bg-white h-1 w-7 transform transition-all duration-500 delay-300 ${isOpen ? '-rotate-45' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                </button>
                {isOpen && <div className="whitespace-normal">
                    <FontAwesomeIcon icon={faHome} style={{color: "#6b7be8"}} size="3x" className="inline pt-10 pr-4"/>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl inline text-black">
                        <Link href="/" >Home Page</Link>
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faInfo} style={{color: "#6b7be8"}} size="3x" className="inline pt-10 pr-4"/>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl inline text-black">
                        About Our Shop
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faFolderOpen} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl inline text-black">
                        <Link href="/example-work" >Example Work</Link>
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faBriefcase} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl inline text-black">
                        Services
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl inline text-black">
                        Contact Us
                    </div>
                </div>}
            </div>
        </div>
    );
}


export default HamburgerAnimated;