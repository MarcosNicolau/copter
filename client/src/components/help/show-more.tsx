import React from "react";
import { SetState } from "../shared/types/set-state";

interface Props {
	isShowMore?: boolean;
	setIsShowMore: SetState<boolean>;
}

const ShowMore: React.FC<Props> = ({ setIsShowMore, isShowMore }) => {
	const handleShowMore = () => setIsShowMore((prev) => !prev);

	return (
		<button onClick={handleShowMore} className="btn--text text-center width-100">
			Mostrar {isShowMore ? "menos" : "mas"}
		</button>
	);
};

export default ShowMore;
