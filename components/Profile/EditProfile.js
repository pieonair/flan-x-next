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
        profilePicture: { type: String },
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

const EditProfile = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
        clearErrors
    } = useForm();

    const onSubmit = async (data) => {
        try{
            clearErrors();
            const {username, name,  email, type, about, personalInfo, freelancerSites, skills, services, career, savedList, private, mailing} = data;
            let response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+ "/edit", 
            {username:username, name:name, email:email, type:type, about:about, personalInfo:personalInfo, freelancerSites:freelancerSites, skills:skills, services:services, career:career, savedList:savedList, private:private, mailing:mailing});
            const jwt = response.data.token;
            sessionStorage.setItem('tok', jwt);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} />
            <input {...register("email")} />
            <input {...register("type")} />
            <input {...register("about")} />
            <input {...register("personalInfo")} />
            <input {...register("freelancerSites")} />
            <input {...register("skills")} />
            <input {...register("services")} />
            <input {...register("career")} />
            <input {...register("savedList")} />
            <input {...register("private")} />
            <input {...register("mailing")} />
            <input type="submit" value="editProfile" />
          </form>
        </div>
      );
    // const mappingFunction = (item) => {
    //     if (typeof item === typeof {}){
    //     }
    // }
}
