import React, { useState } from "react";
import Question from "../question";
import Questions from "../questions";
import { QuestionText } from "../text";

const BuySell = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);

	return (
		<Questions name="Compra y venta">
			<Question
				question="¿Cómo hago para comprar?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={1}
			>
				<ol>
					<li>
						<QuestionText>Haga click en billetera.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en la moneda que desea comprar.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en comprar.</QuestionText>
					</li>
					<li>
						<QuestionText>
							Seleccione el par, por ejemplo si eligió bitcoin elija con qué moneda
							pagará.
						</QuestionText>
					</li>
					<li>
						<QuestionText>Vea el detalle de la operación.</QuestionText>
					</li>
					<li>
						<QuestionText>Confirme la compra.</QuestionText>
					</li>
				</ol>
			</Question>
			<Question
				question="¿Cómo hago para vender?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={2}
			>
				<ol>
					<li>
						<QuestionText>Haga click en billetera.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en la moneda que desea vender.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en vender.</QuestionText>
					</li>
					<li>
						<QuestionText>
							Seleccione el par, por ejemplo si eligió bitcoin elija la moneda que
							desea recibir por la venta.
						</QuestionText>
					</li>
					<li>
						<QuestionText>
							Vea el detalle, verifique que recibirá lo pretendido.
						</QuestionText>
					</li>
					<li>
						<QuestionText>Confirme la venta.</QuestionText>
					</li>
				</ol>
			</Question>
		</Questions>
	);
};

export default BuySell;
