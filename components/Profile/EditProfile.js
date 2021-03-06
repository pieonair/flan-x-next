import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const fields = {
    username: { type: String, required: 1 },
    name: { type: String, required: 1 },
    email: String,
    type: { type: String },
    about: { type: String },
    personalInfo: {
        profilePicture: { type: Stringh },
        professionalTitle: { type: String },
        categories: { type: Array },
        country: { type: String },
        languages: { type: [Language] },
        location: { type: String },
        hourlyPay: { type: Number },
        websiteLinks: { type: [WebsiteLink] }
    },
    freelancerSites: { type: [FreelancingSite] },
    skills: { type: [String] },
    services: { type: [Service] },
    career: { type: [Experience] },
    savedList: { type: [UserReference], default: [] },
    private: { type: Boolean, default: false },
    mailing: { type: Boolean }
};

const EditProfileForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        clearErrors
    } = useForm();
    const router = useRouter();
    useEffect(() => {
        async () => {        
            if (!sessionStorage.getItem("tok")) router.replace("/");
            //send request to get current details
            const data = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (data) => {
        try {
            clearErrors();
            const {
                username,
                name,
                email,
                type,
                about,
                personalInfo,
                freelancerSites,
                skills,
                services,
                career,
                savedList,
                is_private,
                mailing
            } = data;
            const tok = sessionStorage.getItem("tok"); // add this to the axios header
            let response = await axios.post(
                process.env.NEXT_PUBLIC_BACKEND_URL + "/edit",
                {
                    tok: tok,
                    username: username,
                    name: name,
                    email: email,
                    type: type,
                    about: about,
                    personalInfo: personalInfo,
                    freelancerSites: freelancerSites,
                    skills: skills,
                    services: services,
                    career: career,
                    savedList: savedList,
                    is_private: is_private,
                    mailing: mailing
                },
                { headers: { Authorization: tok } }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        // is error checking for valid username/password already being done automatically below?
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("username")} />
                {errors.username && errors.username.message}
                <input type="text" {...register("email")} />
                {errors.email && errors.email.message}
                <input {...register("type")} />
                {errors.type && errors.username.type}
                <input type="text" {...register("about")} />
                {errors.about && errors.username.about}
                <input {...register("personalInfo")} />
                {errors.personalInfo && errors.personalInfo.message}
                <input {...register("freelancerSites")} />
                {errors.freelancerSites && errors.freelancerSites.message}
                <input type="text" {...register("skills")} />
                {errors.skills && errors.skills.message}
                <input {...register("services")} />
                {errors.services && errors.services.message}
                <input {...register("career")} />
                {errors.career && errors.career.message}
                <input {...register("savedList")} />
                {errors.savedList && errors.savedList.message}
                <input {...register("is_private")} />
                {errors.private && errors.private.message}
                <input {...register("mailing")} />
                {errors.mailing && errors.mailing.message}
                <input type="submit" value="editProfile" />
            </form>
        </div>
    );
};

export default EditProfileForm;
