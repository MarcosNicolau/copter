import React, { useState } from "react";
import Question from "../question";
import Questions from "../questions";
import { QuestionText } from "../text";

const Support = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);

	return (
		<Questions name="Soporte">
			<Question
				question="¿Cómo me puedo comunicar con el soporte?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={1}
			>
				<QuestionText>
					Nos podes escribir al mail support@exhcangecopter.com y te responderemos los mas
					rápido posible.
				</QuestionText>
			</Question>
			<Question
				question="¿Cuáles son nuestros horarios?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={2}
			>
				<QuestionText>
					Tanto para los depósitos en pesos/usd como para los retiros y soporte técnico el
					exchange trabaja de lunes a viernes entre las 9 hs y 19 hs. El trading es 24/7.
				</QuestionText>
			</Question>
		</Questions>
	);
};

export default Support;
