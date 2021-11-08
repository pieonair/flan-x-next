import {useForm} from "react-hook-form";
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
    savedList: { type: [UserReference], default: [] } ,
    private: { type: Boolean, default: false },
    mailing: { type: Boolean },
}

const EditProfileForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
        clearErrors
    } = useForm();
    const router = useRouter()
    useEffect(() => {
        () =>{
            if (!sessionStorage.getItem('tok'))
                router.replace('/');
            //send request to get current details

        }    }, []);

        const onSubmit = async (data) => {
        try{
            clearErrors();
            const {username, name,  email, type, about, personalInfo, freelancerSites, skills, services, career, savedList, private, mailing} = data;
            const tok = sessionStorage.getItem('tok'); // add this to the axios header
            let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+ "/edit", 
            {tok:tok, username:username, name:name, email:email, type:type, about:about, personalInfo:personalInfo, freelancerSites:freelancerSites, skills:skills, services:services, career:career, savedList:savedList, private:private, mailing:mailing},
            {headers: {'Authorization': tok}});
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username"), defaultValue = {username}}/>
            <input {...register("email"), defaultValue = {email}} />
            <input {...register("type"), defaultValue = {type}} /> 
            <input {...register("about"), defaultValue = {about}} />
            <input {...register("personalInfo"), defaultValue = {personalInfo}} />
            <input {...register("freelancerSites"), defaultValue = {freelancerSites}} />
            <input {...register("skills"), defaultValue = {skills}} />
            <input {...register("services"), defaultValue = {services}} />
            <input {...register("career"), defaultValue = {career}} />
            <input {...register("savedList"), defaultValue = {savedList}} />
            <input {...register("private"), defaultValue = {private}} />
            <input {...register("mailing"), defaultValue = {mailing}} />
            <input type="submit" value="editProfile" />
          </form>
        </div>
      );
}

export default EditProfileForm;
