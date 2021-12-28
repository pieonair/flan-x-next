import Link from "next/link";

const success = () => {
    return (
        <div>
            Registration succesfull please check your email for the verification
            code.
            <Link href="/">
                <div>Back to Homepage</div>
            </Link>
        </div>
    );
};

export default success;
