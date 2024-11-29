import { Circle } from "rc-progress";

const ProgressBar =({value})=>{
	return (
		<Circle
		percent={Number(value)}
		strokeWidth={12}
		trailWidth={12}
		trailColor="#D4F8D3"
		strokeColor="#2bd627"
		style={{ width: "25px", height: "25px" }}
	  />
	)
}

export default ProgressBar