import css from "./DictionaryRecommendPage.module.css";

import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";
import WordsPagination from "../../components/WordsPagination/WordsPagination";


// import { useState } from "react";

const DictionaryRecommendPage = () => {
  

  
	
  return (
    <div className={css.genDiv}>
      <Dashboard />

      <WordsTable />
      <WordsPagination
       
      />
    </div>
  );
};

export default DictionaryRecommendPage;
