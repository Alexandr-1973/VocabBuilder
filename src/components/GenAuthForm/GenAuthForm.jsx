import css from "./GenAuthForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const GenAuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <p>{errors.firstName?.message}</p>

        <input {...register("age")} />
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default GenAuthForm;
