import {useForm} from "react-hook-form";
import propTypes from 'prop-types';
import { useRouter } from "next/router";
/**
 * 
 * @param {string} placeholder - A string that will be used as the placeholder on the
 * search bar
 */


const MainSearchBar = ({placeholder}) => {
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
};

export default MainSearchBar;