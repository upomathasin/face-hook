import React from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";

export default function LoginFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFrom = (formData) => {
    console.log("From Data : ", formData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitFrom)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label="Email">
          <input
            className={`auth-input ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            {...register("email", { required: "Email id is required" })}
            type="email"
            name="email"
          />
        </Field>
        <Field label="Password">
          <input
            className={`auth-input ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            {...register("password", { required: "Email id is required" })}
            type="password"
            name="password"
          />
        </Field>
        <button
          class="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
