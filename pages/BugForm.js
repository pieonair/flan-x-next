import {useForm} from "react-hook-form";
import router, { useRouter } from "next/router";

const BugForm = () => {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm();

    const onSubmit = async (data) => {
        try{
            const { description, url, steps, consent } = data;
            console.log(data);
            router.push('/bugSuccess');
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Submit a Bug</div>
            <div>Subject/Title*</div>
            <div>Can you describe the bug in one sentence? </div>
            <input required={true} type="text" placeholder="i.e. Saved List does not work, External Links do not work" {...register("description")}/>
            <div>Relevant URL*</div>
            <div>Can you provide the URL where you faced the problem?</div>
            <input required={true} type="text" placeholder="Copy and Paste URL here" {...register("url")}/>
            <div>Steps*</div>
            <div>What steps did you take to face this problem?</div>
            <input required={true} type="text" placeholder="i.e. 1. Main info page 2. Click external link 3. XXX failed to work" {...register("steps")}/>
            <div>Screenshots*</div>
            <div>Can you provide the screenshots relevant to the bug?</div>
            {/* drag & drop */}
            <div>Consent To Your Account*</div>
            <input name="consent" type="checkbox" {...register("consent")}/>
            <label htmlFor="consent">I give Flan consent to access my account, for developers to investigate and resolve this issue.</label>
            <input type="submit" value="Submit"></input>
        </form> 
        </>
    )
}

export default BugForm;

