import { useRouter } from "next/router";
import axios from 'axios';
import {useForm} from 'react-hook-form';

const VerifyForm = () => {
    const {
        register,
        handleSubmit
    } = useForm();
    const router = useRouter();
    const onSubmit = async (data) => {
        try{
            const {verificationCode} = data;
            let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ "/verify/"+verificationCode);
            const jwt = response.data.token;
            sessionStorage.setItem('tok', jwt);
            router.push("/");
        }
        catch(err){
            //implement better error handling
            console.log(err);
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("verificationCode")}/>
                <input type="submit" value="verify"/>
            </form> 
        </div>
    )
} 

export default VerifyForm;