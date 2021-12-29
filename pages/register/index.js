import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import emailCheck from "../../utils/emailCheck";


const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
        clearErrors
    } = useForm();

    const router = useRouter();
    useEffect(() => {
        if (sessionStorage.getItem("tok") !== null) router.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (data) => {
        clearErrors();
        const {email} = data;
        try{
            if (emailCheck(email)){
                setError(
                    "email",
                    {
                        type: "manual",
                        message: "Invalid email address"
                    },
                    { shouldFocus: true }
                );
                return;
            } 
            await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/check/email", {params: {email:email}});
            router.push({pathname: "/register/local", query: {email:email}},"/register/local");
        }
        catch(err){
            const {type, message} = err.response.data;
            setError(
                type,
                {
                    type: "manual",
                    message: message
                },
                { shouldFocus: true }
            );
        }
    };

    return (
        <div>
            <div>
                <Link href="/register/google">
                    <a>
                    Google
                        </a>
                </Link>
            </div>
            <div>
                <Link href="/register/facebook">
                    <a>
                    Facebook
                        </a>
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                /> 
                {errors.email && errors.email.message} 
                <input type="submit"></input>
                <input type="checkbox" {...register("save")} />
            </form>
        </div>
    );
};

export default Register;
