import propTypes from 'prop-types';

const FreelancerResult = ({freelancer}) => {
    return(
        <div>
            <div className="FR-left">
                <img src={freelancer.personalInfo.profilePicture}/>
                <div>
                    {freelancer.personalInfo.location}
                </div>
                <div className="FR-languages">
                    {freelancer.personalInfo.languages.map((language)=><div key={language}>{language}</div>)}
                </div>
            </div>
            <div className="FR-middle">
                <div>
                    <div>
                        {freelancer.name}
                    </div>
                    <div>
                        Enlisted Websites {freelancer.freelancerSites.length}
                    </div>
                </div>
                <div>
                    {freelancer.personalInfo.professionalTitle}
                </div>
                <div>
                    {freelancer.about}
                </div>
                <div>
                    {freelancer.skills.map((skill)=><div key={skill}>{skill}</div>)}

                </div>
            </div>
            <div className="FR-right">
                <div>
                    Star
                </div>
                <div>
                    <a href={()=>"/"+freelancer.username}>Learn More</a>
                </div>
                <div>
                    {freelancer.personalInfo.hourlyPay}
                </div>
            </div>
        </div>
    );
};


FreelancerResult.propTypes = {
    freelancer: propTypes.shape({
        personalInfo: propTypes.shape({
            profilePicture: propTypes.string.isRequired,
            location: propTypes.string.isRequired,
            languages: propTypes.array.isRequired,
            professionalTitle: propTypes.string.isRequired,
            hourlyPay: propTypes.number.isRequired
        }),
        freelancerSites: propTypes.array.isRequired,
        skills: propTypes.array.isRequired,
        name: propTypes.string.isRequired,
        about: propTypes.string.isRequired,
        username: propTypes.string.isRequired
    })

};

export default FreelancerResult;