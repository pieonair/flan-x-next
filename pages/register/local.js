import { useRouter } from "next/router";
import {useEffect} from "react";

const Local = () => {
    const router = useRouter();
    console.log(router.query);
    const {email} = router.query;
    useEffect(()=>{
        if (!email) router.push("/register");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <>
        {email}
        </>
    )
}


export default Local;