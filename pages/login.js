import LoginForm from "../components/AuthForms/LoginForm";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

const login = () => {
    const router = useRouter();
    useEffect(() => {
        if (sessionStorage.getItem("tok") !== null) router.replace("/");
    }, []);
    return (
        <div>
            <Header />
            <LoginForm></LoginForm>
        </div>
    );
};

export default login;
