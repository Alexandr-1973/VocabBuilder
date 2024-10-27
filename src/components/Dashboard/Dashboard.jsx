import css from "./Dashboard.module.css"
import Filters from "../Filters/Filters"

const Dashboard=()=>{
	return (
		<div className={css.genDiv}>
			<Filters />
		</div>
		
	)
}

export default Dashboard