import css from "./Edit.module.css"
import { FiEdit2 } from "react-icons/fi";

const Edit=()=>{
	return(
		<button className={css.edit}><FiEdit2 className={css.editIcon} />Edit</button>
	)
}

export default Edit;