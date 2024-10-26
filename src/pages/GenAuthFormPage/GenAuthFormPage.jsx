import { yupResolver } from "@hookform/resolvers/yup";
import css from "./GenAuthFormPage.module.css";
import { useForm } from "react-hook-form";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

import * as yup from "yup";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

const GenAuthFormPage = () => {
  const [type, setType] = useState("password");
  // const [authToggle, setAuthToggle] = useState(true);
  const location = useLocation();
  const navigate=useNavigate();

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={css[location.pathname === "/login"
        // authToggle
         ? "genDivLogin" : "genDivRegistration"]}
    >
      <div className={css[location.pathname === "/login"
        // authToggle
         ? "picDivLogin"  : "picDivRegistration"]}>
        <picture className={css.img}>
          <source
            srcSet="/images/illustration-desk-1x.jpg 1x, /images/illustration-desk-2x.jpg 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="/images/illustration-mob-1x.jpg 1x, /images/illustration-mob-2x.jpg 2x"
            media="(max-width: 767px)"
          />
          <img
            src="/images/illustration-mob-1x.jpg"
            alt="Boy and girl read books"
          />
        </picture>

        <p className={css[location.pathname === "/login"
          // authToggle
           ? "decorLogin" : "decorRegistration"]}>
          Word · Translation · Grammar · Progress
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.h}>
          {location.pathname !== "/login" && "Register"}
          {location.pathname === "/login" && "Login"}
        </h2>
        <p className={css[location.pathname === "/login"
          // authToggle
           ? "pLogin" : "pRegistration"]}>
          {location.pathname !== "/login" &&
            "To start using our services, please fill out the registration form below. All fields are mandatory:"}
          {location.pathname === "/login" &&
            "Please enter your login details to continue using our service:"}
        </p>
        {location.pathname !== "/login" && (
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
          {location.pathname !== "/login" && "Register"}
          {location.pathname === "/login" && "Login"}
        </button>
        {/* <Toaster /> */}
        <div className={css.toggleDiv}>
          <p onClick={() => location.pathname === "/login"? navigate("/register"):navigate("/login")
            //  setAuthToggle(!authToggle)
             } className={css.toggleP}>
            {location.pathname === "/login" && "Register"}
            {location.pathname !== "/login" && "Login"}
          </p>
        </div>
      </form>
      <picture className={css.blur}>
        <source srcSet="/images/blur-desk.svg" media="(min-width: 1440px)" />
        <source srcSet="/images/blur.svg" media="(min-width: 768px)" />
        <img src="" alt="" />
      </picture>
    </div>
  );
};

export default GenAuthFormPage;
