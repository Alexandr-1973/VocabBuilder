import css from "./CustomRadio.module.css";

const CustomRadio = ({ classRadio, kindVerb }) => {
  console.log(classRadio);

  return (
    <>
      <div className={css[`${classRadio}Div`]}>
        <div className={css[`${classRadio}`]}></div>
      </div>
      <p className={css.p}>{kindVerb}</p>
    </>
  );
};

export default CustomRadio;
