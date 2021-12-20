import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Header from "../components/Header";

const Favorites = () => {
    return (
        <div>
            <Header/>
            <div>Your Favorites</div>
            {/* add profiles from favorite list */}
        </div>
    )
};

export default Favorites;