import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullseye, faHammer, faToolbox} from "@fortawesome/free-solid-svg-icons";

export const servicesList = {
    "Repair Services":
        <ul className="accordion-body list-disc text-start text-black">
            <li>Motor Shaft Repair</li>
            <li>Spindle Repair</li>
            <li>Bolt Threads Repair</li>
            <li>Metal Crack or Break Repair</li>
            <li>Heli-Coil Fix</li>
        </ul>,

    "Basic Fabrication":
        <ul className="accordion-body list-disc text-start text-black">
            <li>Welding</li>
            <li>Lathe Work</li>
            <li>Drilling</li>
            <li>Resurfacing</li>
        </ul>,

    "Precision Machining":
        <ul className="accordion-body list-disc text-start text-black">
            <li>Thread Milling or Tapping</li>
            <li>Custom Screws, Bolts, or Fittings</li>
        </ul>
}

export const servicesIconList = {
    0: <FontAwesomeIcon icon={faToolbox} style={{color: "#6b7be8"}} className="inline text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"/>,
    1: <FontAwesomeIcon icon={faHammer} style={{color: "#6b7be8"}} className="inline text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"/>,
    2: <FontAwesomeIcon icon={faBullseye} style={{color: "#6b7be8"}} className="inline text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"/>,
}