import FreelancerResult from "./FreelancerResult";
import propTypes from 'prop-types';

const FreelancerList = ({freelancers}) => {
    list = freelancers.map(
        (user) => {
            return <FreelancerResult key={user.username} freelancer={user}/>;
        }
    );
    return list;
}


FreelancerList.propTypes = {
    freelancers: propTypes.arrayOf(propTypes.object).isRequired
};

export default FreelancerList;