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

    const mappingFunction = (item) => {
        if (typeof item === typeof {}){

        }
    }
}
