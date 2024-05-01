import {useLayoutEffect} from "react";

export default function ScrollablePage ({
    trackedElement,
    containerElement,
}, callback) {
    useLayoutEffect(() => {
        const ele = document.getElementById(trackedElement);

        let container = window;
        if (containerElement) {
            container = document.getElementById(containerElement);
        }

        // Get window innerHeight or height of container (if provided)
        let currentHeight;
        if (containerElement) {
            currentHeight = container.getBoundingClientRect().height;
        } else {
            currentHeight = container.innerHeight;
        }

        const handleScroll = () => {
            const elePos = ele.getBoundingClientRect().y;
            if (elePos <= currentHeight) {
                if (typeof callback === 'function') callback();
            }
        }

        container.addEventListener("scroll", handleScroll, {passive: true})

        return () => container.removeEventListener('scroll', handleScroll, { passive: true });
    });
}