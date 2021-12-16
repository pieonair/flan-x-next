import FreelancerResult from "./FreelancerResult";
import propTypes from 'prop-types';

const FreelancerList = ({freelancers}) => {
    const list = freelancers.map(
        (user) => {
            return <FreelancerResult key={user.username} freelancer={user}/>;
        }
    );
    console.log('what')
    return list;
}


FreelancerList.propTypes = {
    freelancers: propTypes.arrayOf(propTypes.object).isRequired
};

export default FreelancerList;