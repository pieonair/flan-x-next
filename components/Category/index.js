import CategoryCard from './CategoryCard';

const placeHolders = 
[
    {
        name: "Design & Art",
        picture:"~/styles/img/Categories/Design_Art.jpg"
    },
    {
        name: "IT & Programming",
        picture: "~/styles/img/Categories/IT_Programming.jpg"
    },
    {
        name: "Sales & Marketing",
        picture: "~/styles/img/Categories/Sales_Marketing.jpg"
    },   
    {
        name: "Writing & Translation",
        picture: "~/styles/img/Categories/Writing_Translation.jpg"
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