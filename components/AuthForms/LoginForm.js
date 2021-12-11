import {useForm} from "react-hook-form";
import axios from "axios";
import Header from '/components/Header';
import { setCookies, getCookie } from 'cookies-next';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm();
    
    setValue("user", getCookie("userName"));
    const onSubmit = async (data) => {
        try{
            const {user, password} = data;
            if (data.checkbox) setCookies("userName", user);
            else setCookies("userName", null);
            
            let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+ "/login", {username:user, password:password});
            const jwt = response.data.token;
            sessionStorage.setItem('tok', jwt);
        }
        catch(err){
            //implement better error handling
            console.log(err);
        }
    }
    
    return (
        <>
        <Header/>
        <section className= "bg-loginPage w-screen h-screen"> 
            <div className="pl-96 ml-96 pt-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email / Username" {...register("user")}/>
                    <input type="text" placeholder="Password" {...register("password")}/>
                    <div className="flow-root">
                    <input type="submit" className= "h-12 w-64 text-white rounded-lg bg-button-blue" value="Continue with Email"></input>
                    </div>
                    <div className="flow-root">
                    <button className="text-button-blue">Forgot your password?</button>
                    </div>
                    <div className="flow-root">
                    <input type="checkbox" {...register("save")}/>
                    <button className="text-button-blue">Create Account</button>
                    </div>
                </form> 
            </div>
        </section>
        </>
    )
}

export default LoginForm;

