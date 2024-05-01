import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faEnvelope, faBriefcase, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

const HamburgerAnimated = () => {
    let [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    return (
        // <div className={`${isOpen ? 'fixed h-full w-4/12' : 'h-12 w-12'}`}>
        // bg-white pt-7 pb-7 pl-7

        <div className={`fixed ${isOpen ? 'fixed h-full w-4/12 bg-white border-black border-4 border-opacity-20' : ''}`}>
            <div className={`bg-white m-7`}>
                <button className={`justify-center focus:outline-none`} onClick={toggleMenu}>
                    {/*${isOpen ? 'ring-gray-300 ring-2' : 'ring-2'}*/}
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
                {isOpen && <div className="">
                    <FontAwesomeIcon icon={faInfo} style={{color: "#6b7be8"}} size="3x" className="inline pt-10 pr-4"/>
                    <div className="inline text-black text-4xl">
                        About Our Shop
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faFolderOpen} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="inline text-black text-4xl">
                        Example Work
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faBriefcase} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="inline text-black text-4xl">
                        Services
                    </div>
                    <br/>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#6b7be8"}} size="3x" className="pt-10 pr-4"/>
                    <div className="inline text-black text-4xl">
                        Contact Us
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default HamburgerAnimated;