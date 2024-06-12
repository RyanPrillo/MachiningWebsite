import Link from "next/link";

export default function RequestQuoteButton() {
    return (
        <Link passHref href="/request-quote">
            <button className="bg-bright-orange rounded-2xl w-7/12 h-1/3 font-extrabold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl m-1 sm:m-2 md:mb-4 lg:m-6 xl:m-8 p-2 hover:bg-darkened-bright-orange border-4 text-shadow-sm text-white border-white"
                aria-label="Receive a quote">Request A Quote Now!
            </button>
        </Link>
    )
}