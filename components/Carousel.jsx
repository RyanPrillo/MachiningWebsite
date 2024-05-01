import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft, faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useRef} from "react";
export default function Carousel() {

    // where the carousel is currently at (keeps the carousel from going past limits)
    let carouselCurrentScroll = 0;
    let carouselRef = useRef(null);

    //the logic to move the carousel element below
    const moveCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (carousel) {
            let carouselFullWidth = carousel.scrollWidth;

            // take the width of a single carousel divided by 2, use as the amount to move scroll by
            let carouselScrollChange = carousel.offsetWidth / carousel.getElementsByTagName('*').length;

            // if direction is -1, move carousel left
            if (direction == -1 && carouselCurrentScroll - carouselScrollChange > 0) {
                /* if the current scroll of the carousel minus the change from hitting the arrow is greater than 0, move the carousel,
                * if the value is less than 0, don't move it and just move the carousel to the beginning
                */
                carouselCurrentScroll = (carouselCurrentScroll - carouselScrollChange > 0) ? carouselCurrentScroll - carouselScrollChange : 0;
            }

            // if direction is 1, move carousel right
            else if (direction == 1) {
                /* if the current scroll of the carousel plus the change from hitting the arrow is less than the max width of the carousel, move the carousel,
                * if the value is greater than the max width, don't move it and just move the carousel to the end
                */
                console.log(carouselScrollChange, carouselFullWidth, carouselCurrentScroll + carouselScrollChange < carouselFullWidth)
                carouselCurrentScroll = (carouselCurrentScroll + carouselScrollChange < carouselFullWidth) ? carouselCurrentScroll + carouselScrollChange : carouselFullWidth;
            }

            console.log(carouselCurrentScroll)

            carousel.scrollTo({
                left: carouselCurrentScroll,
                behavior: "smooth"
            })
        }
    }

    return (
            <div className="flex 1 justify-center h-40 flex-wrap">
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">Lathe Work</h1>
                        <p style={{color: "black"}} className="text-center"></p>
                    </div>
                </div>
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">Fabricating</h1>
                        <p style={{color: "black"}} className="text-center">We can fabricate small to medium sized
                            parts
                            for and anything from engine parts to </p>
                    </div>
                </div>
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">3D Printed Parts</h1>
                        <p style={{color: "black"}} className="text-center">3</p>
                    </div>
                </div>
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white w-full">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">3D Printed Parts</h1>
                        <p style={{color: "black"}} className="text-center">4</p>
                    </div>
                </div>
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white w-full">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">3D Printed Parts</h1>
                        <p style={{color: "black"}} className="text-center">last</p>
                    </div>
                </div>
                <div className="flex min-w-[275] h-full p-3 m-2 bg-white rounded shadow-white w-full">
                    <div>
                        <h1 style={{color: "black"}} className="font-bold text-center">3D Printed Parts</h1>
                        <p style={{color: "black"}} className="text-center">last</p>
                    </div>
                </div>
            </div>
    )
}