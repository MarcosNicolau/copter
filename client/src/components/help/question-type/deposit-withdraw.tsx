import React, { useState } from "react";
import Question from "../question";
import Questions from "../questions";
import ShowMore from "../show-more";
import { QuestionText } from "../text";

const DepositWithdraw = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);
	const [isShowMore, setIsShowMore] = useState(false);

	return (
		<Questions name="Depósitos y retiros">
			<Question
				question="¿Cómo hago para depositar criptomonedas?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={1}
			>
				<ol>
					<li>
						<QuestionText>Haga click en billetera.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en la moneda que desea depositar.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en depositar.</QuestionText>
					</li>
					<li>
						<QuestionText>Copie su dirección.</QuestionText>
					</li>
					<li>
						<QuestionText>
							Introduzca su dirección en la aplicación de donde enviará las
							criptomonedas.
						</QuestionText>
					</li>
					<li>
						<QuestionText>
							Espere a que la red verifique su transferencia y verá las criptomonedas
							depositadas en su balance.
						</QuestionText>
					</li>
				</ol>
			</Question>
			<Question
				question="¿Cómo hago para retirar criptomonedas?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={2}
			>
				<ol>
					<li>
						<QuestionText>Haga click en billetera.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en la moneda que desea retirar.</QuestionText>
					</li>
					<li>
						<QuestionText>Haga click en retirar.</QuestionText>
					</li>
					<li>
						<QuestionText>Introduzca su código de doble autenticación.</QuestionText>
					</li>
					<li>
						<QuestionText>Introduzca la dirección a donde se retirará.</QuestionText>
					</li>
					<li>
						<QuestionText>
							Espere a que la red verifique su transferencia y verá las criptomonedas
							depositadas en su balance.
						</QuestionText>
					</li>
				</ol>
			</Question>

			{isShowMore && (
				<>
					<Question
						question="¿Que redes se pueden utilizar?"
						openedQuestion={openedQuestion}
						setOpenedQuestion={setOpenedQuestion}
						questionNumber={3}
					>
						<ul>
							<li>
								<QuestionText>ERC-20</QuestionText>
							</li>
							<li>
								<QuestionText>BTC</QuestionText>
							</li>
						</ul>
					</Question>
					<Question
						question="¿Cómo depositar pesos/usd?"
						openedQuestion={openedQuestion}
						setOpenedQuestion={setOpenedQuestion}
						questionNumber={4}
					>
						<ol>
							<li>
								<QuestionText>Haga click en billetera.</QuestionText>
							</li>
							<li>
								<QuestionText>Haga click en FIAT.</QuestionText>
							</li>
							<li>
								<QuestionText>Seleccione la moneda FIAT a depositar.</QuestionText>
							</li>
							<li>
								<QuestionText>
									Haga la transferencia a los datos mostrados en la ventana.
								</QuestionText>
							</li>
							<li>
								<QuestionText>
									Una vez hecha la transferencia introduzca el monto que ha
									enviado.
								</QuestionText>
							</li>
						</ol>
					</Question>
					<Question
						question="¿Cómo retirar pesos/usd?"
						openedQuestion={openedQuestion}
						setOpenedQuestion={setOpenedQuestion}
						questionNumber={5}
					>
						<ol>
							<li>
								<QuestionText>Haga click en billetera.</QuestionText>
							</li>
							<li>
								<QuestionText>Haga click en FIAT.</QuestionText>
							</li>
							<li>
								<QuestionText>Seleccione la moneda FIAT a retirar.</QuestionText>
							</li>
							<li>
								<QuestionText>Introduzca su CBU, CVU o alias.</QuestionText>
							</li>
							<li>
								<QuestionText>Introduzca el monto que desea retirar.</QuestionText>
							</li>
						</ol>
					</Question>
					<Question
						question="Tiempo de acreditación y retiro."
						openedQuestion={openedQuestion}
						setOpenedQuestion={setOpenedQuestion}
						questionNumber={6}
					>
						<QuestionText>
							Los depósitos y retiros son aprobados en 15 minutos si se encuentra
							dentro de horas hábiles. De lo contrario, pueden demorar hasta 24 hs.
						</QuestionText>
					</Question>
				</>
			)}
			<ShowMore isShowMore={isShowMore} setIsShowMore={setIsShowMore} />
		</Questions>
	);
};

export default DepositWithdraw;
