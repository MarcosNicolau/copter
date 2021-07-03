import React, { useEffect, useMemo, useRef, useState } from "react";
import { SetState } from "../shared/types/set-state";
import dropdown from "../../assets/miscellaneous/navigation/dropdown.svg";

interface Props {
	question: string;
	questionNumber: number;
	openedQuestion: number;
	setOpenedQuestion: SetState<number>;
}

const Question: React.FC<Props> = ({
	question,
	children,
	questionNumber,
	openedQuestion,
	setOpenedQuestion,
}) => {
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);
	const isOpen = useMemo(() => openedQuestion === questionNumber, [openedQuestion]);

	const handleClick = () => setOpenedQuestion(isOpen ? 0 : questionNumber);

	useEffect(() => {
		if (!contentRef.current) return;
		//Get the content height and add 20.
		//The reason we have to add 20 is because some content isn't shown.
		setContentHeight(contentRef.current.clientHeight + 25);
	}, [contentRef]);

	return (
		<div className="help__question">
			<div
				className="flex-row align-center width-100 help__question-title"
				onClick={handleClick}
			>
				<p>{question}</p>
				<img
					src={dropdown}
					alt="mas"
					className={`help__question-arrow ${isOpen && "help__question-arrow--active"}`}
				/>
			</div>
			<div
				className={`help__question-content`}
				//Based on its open we set height to the content or 0.
				//The transition is added on scss
				style={{ height: isOpen ? contentHeight : "0" }}
			>
				<div ref={contentRef}>{children}</div>
			</div>
		</div>
	);
};

export default Question;
