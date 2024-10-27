import CustomSelect from "../CustomSelect/CustomSelect";
import css from "./Filters.module.css"

const Filters =()=>{

	return (
		<div className={css.genDiv}>
			<input className={css.findInput} type="text" placeholder="Find the word" />
			<CustomSelect/>
		</div>
	)
	
}

export default Filters;