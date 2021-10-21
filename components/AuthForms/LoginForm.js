import {useForm} from "react-hook-form";
import propTypes from 'prop-types';


const LoginForm = ({login}) => {
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = async (data) => {
        try{
            const {user, password} = data;
            login(user, password);
        }
    }

}

LoginForm.propTypes = {
    login: propTypes.func.isRequired
}

export default LoginForm;