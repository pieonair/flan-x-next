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
 * @param {function} onSearch - The function that's called when the
 * card is clicked.
 * 
 * @returns A card for the category to showcase on the Landing page 
 */


const CategoryCard = ({picture, name}) => {
    //TODO add freelancers on top
    return(
        <Link href={`/category/${name}`}>
            <div>
                <Image src={picture} alt={`A picture that represents the ${name} category`} />
                <div>    
                    {name} 
                </div>
            </div>
        </Link>
    );
};

CategoryCard.propTypes = {
    picture: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    onSearch: propTypes.func.isRequired
};


export default CategoryCard;