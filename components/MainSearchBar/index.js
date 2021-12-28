import { useForm } from "react-hook-form";
import propTypes from "prop-types";
import { useRouter } from "next/router";
/**
 *
 * @param {string} placeholder - A string that will be used as the placeholder on the
 * search bar
 */

const MainSearchBar = ({ placeholder }) => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const { search } = data;
        router.push("/query/" + search);
    };

    return (
        <ul className="flex items-center">
            <div className="container h-screen flex justify-center">
                <div className="relative">
                    <div className="absolute top-4 left-3">
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                    <form
                        className="mr-32 mt-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            className="border-2 border-blue-200 h-10 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                            placeholder="I am looking for..."
                            {...register("search")}
                        />
                        <div className="ml-80 absolute top-2">
                            <button className="mt-2 h-10 w-24 text-white rounded-lg bg-button-blue">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ul>
    );
};

MainSearchBar.propTypes = {
    placeholder: propTypes.string.isRequired
};

export default MainSearchBar;
