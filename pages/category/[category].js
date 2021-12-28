import axios from "axios";

export async function getStaticPaths() {
    const paths = [
        {
            params: {
                category: "Business"
            }
        },
        {
            params: {
                category: "Graphic Design"
            }
        },
        {
            params: {
                category: "Digital Marketing"
            }
        },
        {
            params: {
                category: "Writing and Translation"
            }
        },
        {
            params: {
                category: "Video & Animation"
            }
        },
        {
            params: {
                category: "Music & Audio"
            }
        }
    ];

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { category } = params;
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/category/" + category;
    const response = await axios.get(url);
    //TODO add error checking here
    const results = await response.data;
    return {
        props: {
            rawResults: results
        },
        revalidate: 10
    };
}

const Page = ({ rawResults }) => {
    if (!rawResults) return <div>naw</div>;

    const results = rawResults.map((result) => (
        <div key={result.username}>
            {result.username}
            {result.languages}
        </div>
    ));

    return <div>{results}</div>;
};

export default Page;
