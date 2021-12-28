import Link from "next/link";

const Success = () => {
    return (
        <div>
            Registration succesfull please check your email for the verification
            code.
            <Link href="/">
                Back to Homepage
            </Link>
        </div>
    );
};

export default Success;
