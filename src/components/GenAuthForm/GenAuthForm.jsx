import { yupResolver } from "@hookform/resolvers/yup";
import css from "./GenAuthForm.module.css";
import { useForm } from "react-hook-form";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

import * as yup from "yup";
import { useState } from "react";

const schemaRegistration = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(6, "must be at least 6 characters long")
      .required(),
  })
  .required();

const schemaLogin = yup
  .object({
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .min(6, "must be at least 6 characters long")
      .required(),
  })
  .required();

const GenAuthForm = () => {
  const [type, setType] = useState("password");
  const [authToggle, setAuthToggle] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={css.genDiv}>
      <picture className={css.img}>
        {/* <source
          srcset="./images/img6.jpg 1x, ./images/img6-2x-opt.jpg 2x"
          media="(min-width: 1158px)"
        />
        <source
          srcset="
                      ./images/img6-tablet-opt.jpg    1x,
                      ./images/img6-tablet-2x-opt.jpg 2x
                    "
          media="(min-width: 768px)"
        /> */}
        <source
          srcSet="
                      /illustration-mob-1x.jpg 1x,
                      /illustration-mob-2x.jpg 2x
                    "
          media="(max-width: 767px)"
        />
        <img
          //   className={css.img}
          src="/illustration-mob-1x.jpg"
          alt="Boy and girl read books"
          //   width="360"
          //   height="300"
        />
      </picture>

      {!authToggle && <p className={css.loginLi}>Word  ·  Translation  ·  Grammar  ·  Progress</p>}

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.h}>
          {authToggle && "Register"}
          {!authToggle && "Login"}
        </h2>
        <p className={css.p} style={{"marginBottom":!authToggle&&"40px"}}>
          {authToggle &&
            "To start using our services, please fill out the registration form below. All fields are mandatory:"}
          {!authToggle &&
            "Please enter your login details to continue using our service:"}
        </p>
        {authToggle && (
          <>
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className={css.input}
            />
            <p className={css.yupP}>{errors.name?.message}</p>
          </>
        )}
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className={css.input}
        />
        <p className={css.yupP}>{errors.email?.message}</p>
        <label className={css.passwordLabel}>
          <input
            {...register("password")}
            placeholder="Password"
            type={type}
            className={css.passwordInput}
          />
          {type === "password" && (
            <LuEyeOff className={css.eye} onClick={() => setType("text")} />
          )}
          {type === "text" && (
            <LuEye className={css.eye} onClick={() => setType("password")} />
          )}
        </label>
        <p className={css.yupPassword}>{errors.password?.message}</p>

        <button type="submit" className={css.btn}>
          {authToggle && "Register"}
          {!authToggle && "Login"}
        </button>
        {/* <Toaster /> */}
        <p onClick={() => setAuthToggle(!authToggle)} className={css.toggleP}>
        {!authToggle && "Register"}
        {authToggle && "Login"}
      </p>
      </form>
      
    </div>
  );
};

export default GenAuthForm;