import { useRouter } from "next/router";
import { useEffect } from "react";
import VerifyForm from "../components/VerifyForm";
const verify = () => {
    return (
        <div>
            Please enter the verification code mailed to you to verify your
            account.
            <VerifyForm />
        </div>
    );
};

export default verify;
