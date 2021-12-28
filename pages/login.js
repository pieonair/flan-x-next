import LoginForm from "../components/AuthForms/LoginForm";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
    const router = useRouter();
    useEffect(() => {
        if (sessionStorage.getItem("tok") !== null) router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Header />
            <LoginForm></LoginForm>
        </div>
    );
};

export default Login;
