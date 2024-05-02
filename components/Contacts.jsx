import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
    return (
        <div className="fixed right-10">
            <div className="text-black">Contact Us!</div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#a6d0f3"}} size="3x"/>
            </div>
        </div>
    )
}