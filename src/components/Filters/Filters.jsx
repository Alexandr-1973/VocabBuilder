import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import css from "./Filters.module.css";
import CustomRadio from "../CustomRadio/CustomRadio";

const Filters = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);
  const verbArray = ["Regular", "Irregular"];

  return (
    <div className={css.genDiv}>
      <input
        className={css.findInput}
        type="text"
        placeholder="Find the word"
      />
      <CustomSelect />
      <ul className={css.radioUl}>
        {verbArray.map((kindVerb, index) => {
          return (
            <li
              key={index}
              className={css.radioLi}
              onClick={() => setSelectedRadio(kindVerb)}
            >
              <CustomRadio
                classRadio={
                  selectedRadio === kindVerb ? "radioActive" : "radio"
                }
                kindVerb={kindVerb}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
