import { useForm } from "react-hook-form";
import router, { useRouter } from "next/router";
// import { SMTPClient } from 'emailjs';

const ReportForm = () => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        try {
            const {
                falseInformation,
                plagiarizedContent,
                doesNotBelong,
                enlistedWebsites,
                explain
            } = data;
            console.log(data);
            router.push("/reportSuccess");

            // const client = new SMTPClient({
            //     user: "flanwork.official@gmail.com",
            //     password: "NYUKaist123",
            //     host: "smtp.gmail.com",
            //     ssl: true
            // });

            // client.send(
            //     {
            //         text: 'hi',
            //         from: "flanwork.official@gmail.com",
            //         to: "flanwork.official@gmail.com",
            //         subject: "test"
            //     }
            // )
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>Why Are You Reporting This User?</div>
                <input
                    name="falseInformation"
                    type="checkbox"
                    {...register("falseInformation")}
                />
                <label htmlFor="falseInformation">
                    This user's profile/portfolio contains false information
                </label>
                <input
                    name="plagiarizedContent"
                    type="checkbox"
                    {...register("plagiarizedContent")}
                />
                <label htmlFor="plagiarizedContent">
                    This user's profile/portfolio contains plagiarized content
                </label>
                <input
                    name="doesNotBelong"
                    type="checkbox"
                    {...register("doesNotBelong")}
                />
                <label htmlFor="doesNotBelong">
                    This user's profile picture/portfolio image does not belong
                    to this user
                </label>
                <input
                    name="enlistedWebsites"
                    type="checkbox"
                    {...register("enlistedWebsites")}
                />
                <label htmlFor="enlistedWebsites">
                    This user does not work on the enlisted websites that are
                    written on their profile
                </label>
                <div>Please Explain Further</div>
                <input
                    type="text"
                    placeholder="Please use this space to explain further..."
                    {...register("explain")}
                />
                <input type="submit" value="Report Freelancer"></input>
            </form>
        </>
    );
};

export default ReportForm;
