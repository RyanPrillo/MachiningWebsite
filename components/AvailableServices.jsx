import {useState, useEffect, useRef} from 'react';

const AvailableServices = () => {
    let servicesList = ["Small Parts Fabrication", "Shaft + Spindle Repair", "Broken Bolt Removal"]
    let servicesNotDisplayed = servicesList;
    let toolsList = ["Lathe", "Drill Press", "Engine Re-surfacer"]
    let toolsNotDisplayed = toolsList;

    const selectRandomNoRepeats = (notDisplayedList, fullList) => {

        // if all the items in the not displayed list were displayed, start again and allow any item to be displayed again
        if (notDisplayedList.length === 0) notDisplayedList = fullList;

        // remove this item from the list, so it isn't able to display again until the rest of the items in the not displayed list are displayed
        let selectedItem = notDisplayedList.splice(Math.floor(Math.random() * notDisplayedList.length), 1);

        // return the selected item to display it
        return selectedItem[0];
    }

    const [currentServiceText, setServiceText] = useState("Small Parts Fabrication");
    const [currentToolText, setToolText] = useState("Lathe");

    useEffect(() => {
        const interval = setInterval(() => {
            setServiceText(selectRandomNoRepeats(servicesNotDisplayed, servicesList))
        }, 3000)

        return () => clearInterval(interval);
        });

    useEffect(() => {
        const interval = setInterval(() => {
            setToolText(selectRandomNoRepeats(toolsNotDisplayed, toolsList))
        }, 4000)

        return () => clearInterval(interval);
    });

    return (
        <div className="grid grid-cols-2 gap-4 mx-10 bg-white">
            <div className="bg-white text-black text-center p-4 font-bold shadow-white rounded">
                <h3 className="text-4xl">Our Services</h3>
            </div>

            <div className="bg-white text-black text-center p-4 font-bold shadow-white rounded">
                <h3 className="text-4xl">Our Tools</h3>
            </div>

            <div className="bg-white text-black text-center p-4 font-extralight shadow-white rounded">
                <h3 className="text-2xl">{currentServiceText}</h3>
            </div>

            <div className="bg-white text-black text-center p-4 font-extralight shadow-white rounded">
                <h3 className="text-2xl">{currentToolText}</h3>
            </div>

        </div>
    )
}

export default AvailableServices;