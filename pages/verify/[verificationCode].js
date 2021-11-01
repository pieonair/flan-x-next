import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";

const verifyFromCode = () => {
    const router = useRouter();
    const {verificationCode} = router.query;
    useEffect(()=>{
        if (sessionStorage.getItem('tok')!==null){
            router.replace("/");
            return;
        }
        try{
            let response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+ "/verify/"+verificationCode);
            const jwt = response.data.token;
            sessionStorage.setItem('tok', jwt);
            router.replace("/");
        }
        catch(err){
            //TODO better error handling
            console.log(error);
        }
    });
}

export default verifyFromCode;