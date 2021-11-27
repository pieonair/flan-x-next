import {useForm} from "react-hook-form";
import axios from "axios";


const LoginForm = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        try{
            const {user, password} = data;
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
        <div> 
            {/* page */}
            <div className="flex-1 flex flex-col">
                <nav className="px-4 flex justify-between bg-flan-purple h-24">
                    <ul className="flex items-center">
                        <li className="h-auto w-auto">
                            <nextimg className="h-full w-full mx-auto" src="~/styles/img/flan_logo.jpg" alt="flan logo"/>
                        </li>
                    </ul>
                    <ul className="flex items-center">
                        <li>
                            <h2 className="font-VisbyCFMedium">Login</h2>
                        </li>
                        <li>
                            <button className="h-12 w-32 text-white rounded-lg bg-button-blue">Create Account</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("user")}/>
                    <input type="password" {...register("password")}/>
                    <input type="submit" value="log in"/>
                </form> 
            </div>
        </div>
    )
}

export default LoginForm;