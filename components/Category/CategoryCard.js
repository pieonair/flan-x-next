import React from 'react';
import propTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
/**
 * 
 * @param {string} picture - Path URL of the picture of the category
 * 
 * @param {string} name - The name of the catagory
 * 
 * 
 * @returns A card for the category to showcase on the Landing page 
 */


const CategoryCard = ({picture, name}) => {
    //TODO add freelancers on top
    return(
        <div>
                <Link href={`/category/${name}`}>
                {/* <Image src={picture} alt={`A picture that represents the ${name} category`} height={500} width={500} /> */}
                <div>    
                    {name} 
                </div>
                </Link>
        </div>
    );
};

CategoryCard.propTypes = {
    picture: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
};


export default CategoryCard;