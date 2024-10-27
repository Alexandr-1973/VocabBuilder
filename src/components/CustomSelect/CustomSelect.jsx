import css from "./CustomSelect.module.css"
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CustomSelect = () => {
  const [visibleCategories, setVisibleCategories] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("Categories");
  const categoriesArray = [
    "Verb",
    "Participle",
    "Noun",
    "Adjective",
    "Pronoun",
    "Numerals",
    "Adverb",
    "Preposition",
    "Conjunction",
    "Phrasal verb",
    "Functional phrase",
  ];

  useEffect(() => {
    setVisibleCategories(false);
  }, [chosenCategory]);

  return (
    <div className={css.genDiv} onClick={() => setVisibleCategories(!visibleCategories)}>
		<MdOutlineKeyboardArrowDown className={css.arrow}/>
      <div onClick={() => setVisibleCategories(!visibleCategories)} className={css.startCategoryDiv}>
        <p>{chosenCategory}</p>
      </div>
      {visibleCategories &&<ul className={css.categoryUl}>
        
          {categoriesArray.map((category, index) => {
            return (
              <li key={index} onClick={() => setChosenCategory(category)} className={css.categoryLi}>
                <p className={css.categoryP}>{category}</p>
              </li>
            );
          })}
      </ul>}
    </div>
  );
};

export default CustomSelect;
