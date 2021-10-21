import axios from "axios";

export async function getStaticPaths() {
   const paths = [
    { params: {
        query: "Business"
        
        }
    },
    { params: {
        query: "Graphic Design"
        
    }},
    { params: {
        query: "Digital Marketing"
        
    }},   
    { params: {
        query: "Writing and Translation"
        
    }},
    { params: {
        query: "Video & Animation"
        
    }},
    { params: {
        query: "Music & Audio"
        
    }},
    ];

    return {paths, fallback: true};
}

export async function getStaticProps({ params }) {
    const {query} = params;
    const url = process.env.NEXT_PUBLIC_BACKEND_URL+"/query/"+query;
    const response = await axios.get(url);
    //TODO add error checking here
    const results = await response.data;
    return{
        props: {
            rawResults: results
        },
        revalidate: 10
    }
}



const Page = ({rawResults}) => {
    if (!rawResults)
        return <div>naw</div>

    const results = rawResults.map(
        (result) => 
            <div key={result.username}>
                {result.username}
                {result.languages}
            </div>
    )


    return(
        <div>
           {results} 
        </div>
    ) 
}

export default Page;