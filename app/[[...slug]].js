import ClientOnly from './client';
import Page from "../index"

export async function getStaticPaths() {
    // This function defines the dynamic paths that should be pre-rendered at build time
    return {
        paths: [
            { params: { slug: ['./example-work/ExampleWorkLanding'] } }, // For the projects page (We want this to be pre-generated)
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // This function fetches data for the dynamic page based on the params
    // You can fetch data from an API or perform any other async operations here
    return {
        props: {
            // Pass any data needed for the page component
        }
    };
}

export default function DynamicPage() {
    return (
        <div>
            <h1>Dynamic Page</h1>
        </div>
    );
}
