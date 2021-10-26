import { useForm } from "react-hook-form";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      clearErrors();
      const { name, username, email, password, confirmPassword } = data;
      const all = name && username && email && password && confirmPassword;
      if (!confirmPassword) throw { type: "confirmPassword", message:"required"};
      if (password !== confirmPassword)
        throw { type: "confirmPassword", message: "Passwords must match" };
      let response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/signup",
        { username: username, password: password, name: name, email:email}
      );
      const jwt = response.data.token;
      sessionStorage.setItem("tok", jwt);
    } catch (err) {
      if (err.response) {
        const { message, type } = err.response.data;
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
        } else
          setError(
            type,
            {
              type: "manual",
              message: message,
            },
            { shouldFocus: true }
          );
      } else {
        const { message, type } = err;
        setError(
          type,
          { type: "manual", message: message },
          { shouldFocus: true }
        );
      }
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
