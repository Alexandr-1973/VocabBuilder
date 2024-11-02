import css from "./Dictionary.module.css"

import Dashboard from "../../components/Dashboard/Dashboard";
import WordsTable from "../../components/WordsTable/WordsTable";



const DictionaryPage=()=>{
	return (
		<div className={css.genDiv}>
			<Dashboard/>

			<WordsTable/>
		</div>
	)
}

export default DictionaryPage;