import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import RegisterForm from "../components/AuthForms/RegisterForm";
import LoginForm from "../components/AuthForms/LoginForm";
import TermsOfService from "./TermsOfService";
import Policy from "./Policy";

const Register = () => {
    const router = useRouter();
    useEffect(() => {
        if (sessionStorage.getItem("tok") !== null) router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <RegisterForm></RegisterForm>
            By Joining, you agree to Flan&apos;s{" "}
            <TermsOfService>Terms of Service</TermsOfService> and acknowledge
            that you have read the <Policy>Privacy Policy</Policy>. Already Have
            an Account? <LoginForm></LoginForm>
        </div>
    );
};

export default Register;
