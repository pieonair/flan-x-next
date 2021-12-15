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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email / Username" {...register("user")}/>
            <input type="text" placeholder="Password" {...register("password")}/>
            <input type="submit" value="Continue with Email"></input>
            <input type="checkbox" {...register("save")}/>
        </form> 
        </>
    )
}

export default LoginForm;

