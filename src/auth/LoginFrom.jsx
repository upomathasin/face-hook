import React from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginFrom() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFrom = (formData) => {
    console.log("From Data : ", formData);

    const user = { ...formData };
    setAuth({ user });
    navigate("/");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitFrom)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label="Email" error={errors.email}>
          <input
            className={`auth-input ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            {...register("email", { required: "Email  is required" })}
            type="email"
            name="email"
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long!",
              },
            })}
            className={`auth-input ${
              !!errors.password ? "border-red-400" : "border-gray-200"
            }`}
            type="password"
            id="password"
            name="password"
          />
        </Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
