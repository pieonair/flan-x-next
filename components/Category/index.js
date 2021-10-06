import CategoryCard from './CategoryCard';

const placeHolders = 
[
    {
        name: "Business",
        picture:""
    },
    {
        name: "Graphic Design",
        picture: ""
    },
    {
        name: "Digital Marketing",
        picture: ""
    },   
    {
        name: "Writing and Translation",
        picture: ""
    },
    {
        name: "Video & Animation",
        picture: ""
    },
    {
        name: "Music & Audio",
        picture: ""
    },
];

/**
 * 
 * @param {function} onSearch -   Function that will take the result of the search for the
 * keyword/phrase and use it to load results 
 * 
 * @param {function} onError - Function that will take any generated errors and showcase them
 * 
 * @returns The category section of the landing page populated with all the category cards
 * 
 */

const Categories = () => {
    
    const cards = placeHolders.map((service)=> <CategoryCard key = {service.name} name={service.name} picture={service.picture}/>);
    return(
        <div>
            {cards}
        </div>
    );
};

export default Categories;