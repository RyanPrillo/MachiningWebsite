import {useState} from "react";

export default function Accordion({displayItems}) {

    // initialize a boolean array with the amount of display items given, all set to false because we want the sections to be closed by default
    const [openSections, setOpenSections] = useState(new Array(Object.keys(displayItems).length).fill(false));

    const updateAccordion = (index) => {
        const newOpenSections = [...openSections];
        newOpenSections[index] = !openSections[index];
        setOpenSections(newOpenSections);
    }

    return (
        <div className="flex flex-col h-full items-center text-black justify-evenly w-2/3">

            {openSections.map((isOpen, index) => (
                <div key={index} className="flex flex-col justify-between items-center w-full">
                    <button onClick={() => updateAccordion(index)} className="accordion-button" aria-label="Expand repair work list">
                        <span className="accordion-plus-icon">{isOpen ? "-" : "+"}</span>
                        <span className="accordion-header-text">{Object.keys(displayItems)[index]}</span>
                    </button>
                    <article className={`w-full ${isOpen ? "" : "hidden"} `}>
                        {displayItems[Object.keys(displayItems)[index]]}
                    </article>
                </div>
            ))}
        </div>
    );
}