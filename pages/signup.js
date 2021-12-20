import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import RegisterForm from "../components/AuthForms/RegisterForm";
import Header from "../components/Header";
import LoginForm from "../components/AuthForms/LoginForm";
import TermsOfService from "../pages/termsOfService";
import Policy from "../pages/policy";


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
            By Joining, you agree to Flan's <TermsOfService>Terms of Service</TermsOfService> and acknowledge that you have read the <Policy>Privacy Policy</Policy>.
            Already Have an Account? <LoginForm></LoginForm>
        </div>
    )
}

export default register;