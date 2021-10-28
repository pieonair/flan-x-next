import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import RegisterForm from "../components/AuthForms/RegisterForm";
import Header from "../components/Header";



const register = ()=>{
    const router = useRouter()
    useEffect(()=>{
        if (sessionStorage.getItem('tok')!==null)
            router.replace("/");
    }, [])
    return(
        <div>
            <Header/>
            <RegisterForm ></RegisterForm>
        </div>
    )
}

export default register;