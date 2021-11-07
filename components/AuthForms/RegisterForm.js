import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterForm = () => {
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
    const { name, username, email, password, confirmPassword, type } = data;
    //send the data to the backend
      let response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/signup",
        { username: username, password: password, name: name, email:email, confirmPassword:confirmPassword, type:type}

      );
      const jwt = response.data.token;
      //store jwt in sessionStorage
      sessionStorage.setItem("tok", jwt);
      //redirect to success page
      router.push("/verify");

    } catch (err) {
        const { message, type } = err.response.data;
        //if there are multiple errors handle here
    //     if (typeof type == typeof []) {
    //       for (let i of type) {
    //         console.log(i);
    //         setError(
    //           i,
    //           {
    //             type: "manual",
    //             message: message,
    //           },
    //           { shouldFocus: true }
    //         );
    //       }
    //       //if there is a single error
    //     } else
    //     setError(
    //         type,
    //         {
    //             type: "manual",
    //             message: message,
    //         },
    //         { shouldFocus: true }
    //         );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required: true})} />
        {errors.name && errors.name.message}
        <input {...register("username", {required: true})} />
        {errors.username && errors.username.message}
        <input {...register("email", {required: true})} />
        {errors.email && errors.email.message}
        <input type="password" {...register("password", {required: true})} />
        {errors.password && errors.password.message}
        <input type="password" {...register("confirmPassword", {required: true})} />
        {errors.confirmPassword && errors.confirmPassword.message}
        <input {...register("type", {required: true})}  type="radio" value="freelancer" />
        <label for="freelancer">I am a freelancer</label>
        <input {...register("type", {required: true})}  type="radio" value="client" />
        <label for="client">I am a client</label>

        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default RegisterForm;
