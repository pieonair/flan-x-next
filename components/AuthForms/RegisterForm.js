import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const router = useRouter()
  const onSubmit = async (data) => {
    try {
    //clear any errors previously shown
      clearErrors();
    //get all the params the user should have inputted into variables
    const { name, username, email, password, confirmPassword } = data;
    //send the data to the backend
      let response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/signup",
        { username: username, password: password, name: name, email:email, confirmPassword:confirmPassword}
      );
      const jwt = response.data.token;
      //store jwt in sessionStorage
      sessionStorage.setItem("tok", jwt);
      //redirect to success page
      router.push("/success");
    } catch (err) {
        const { message, type } = err.response.data;
        //if there are multiple errors handle here
        if (typeof type == typeof []) {
          for (let i of type) {
            console.log(i);
            setError(
              i,
              {
                type: "manual",
                message: message,
              },
              { shouldFocus: true }
            );
          }
          //if there is a single error
        } else
        setError(
            type,
            {
                type: "manual",
                message: message,
            },
            { shouldFocus: true }
            );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        {errors.name && errors.name.message}
        <input {...register("username")} />
        {errors.username && errors.username.message}
        <input {...register("email")} />
        {errors.email && errors.email.message}
        <input type="password" {...register("password")} />
        {errors.password && errors.password.message}
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && errors.confirmPassword.message}
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default LoginForm;
