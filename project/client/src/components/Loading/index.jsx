import loading from "../../assets/animations/loading.svg"

import * as S from "./styles"

const Loading = ({ width = "100%", height = "100%" }) => {
	return (
		<S.Loading width={width} height={height}>
			<img src={loading} alt="loading" />
		</S.Loading>
	)
}

export default Loading
