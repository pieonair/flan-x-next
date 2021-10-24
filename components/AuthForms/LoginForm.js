import {useForm} from "react-hook-form";
import propTypes from 'prop-types';
import axios from "axios";


const LoginForm = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        let jwt;
        try{
            const {user, password} = data;
            jwt = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+ "/login", {username:user, password:password});
        }
        catch(err){
            //implement better error handling
            console.log(err);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("user")}/>
                <input type="password" {...register("password")}/>
                <input type="submit" value="log in"/>
            </form> 
        </div>
    )
}

export default LoginForm;