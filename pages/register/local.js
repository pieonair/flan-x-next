import { useRouter } from "next/router";
import {useEffect} from "react";
import RegisterForm from "../../components/AuthForms/RegisterForm";

const Local = () => {
    const router = useRouter();
    console.log(router.query);
    const {email} = router.query;
    useEffect(()=>{
        if (!email) router.push("/register");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
       <RegisterForm email={email}></RegisterForm> 
    )
}


export default Local;