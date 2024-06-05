import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function QuoteButton() {
    return (
        <div className="flex flex-row items-center">
            <div>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#a6d0f3"}} size=""/>
            </div>
            <Link href="/request-quote" aria-label="Go to our quote page" className="text-yellow-200">Request Quote</Link>
        </div>
    )
}