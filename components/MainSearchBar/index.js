import {useForm} from "react-hook-form";
import propTypes from 'prop-types';
import { useRouter } from "next/router";
/**
 * 
 * @param {string} placeholder - A string that will be used as the placeholder on the
 * search bar
 * 
 * @param {function} onSearch -  A function that will take the keyword/phrase 
 * and use it to load results
 * 
 */


const MainSearchBar = ({placeholder, onSearch}) => {
    const router = useRouter();
	const {
		register,
		handleSubmit
	} = useForm();

	const onSubmit = async (data) =>{
            const {search} = data;
            router.push("/query/"+search);
	};

	return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("search")}  />
            <button>Submit</button>
        </form>
    </div>
	);
};

MainSearchBar.propTypes = {
    placeholder: propTypes.string.isRequired,
    onSearch: propTypes.func.isRequired,
};

export default MainSearchBar;