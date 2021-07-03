import React, { useState } from "react";
import Question from "../question";
import Questions from "../questions";
import { QuestionText } from "../text";

const Basic = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);

	return (
		<Questions name="Creación de cuenta y KYC">
			<Question
				question="Me cree una cuenta. ¿Cómo empiezo a operar en Copter?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={1}
			>
				<QuestionText>
					Primero deberás navegar a las configuraciones de tu cuenta (el icono de usuario
					arriba a la derecha) y activar el factor de doble autenticación. Esto es
					obligatorio para brindarle una mayor seguridad a tu cuenta.
				</QuestionText>
				<QuestionText>
					Una vez hecho el paso anterior, en la misma sección deberás completar el
					“conozca a su cliente” o “KYC” haciendo click en cualquiera de los niveles de
					cuenta, Basico, Trader o Pro Trader.
				</QuestionText>
			</Question>
			<Question
				question="¿Por qué debo verificar mi cuenta?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={2}
			>
				<QuestionText>
					Copter está obligado a pedir esta información por reglamentación local e
					internacional, con el propósito de prevenir el lavado de dinero.
				</QuestionText>
			</Question>
			<Question
				question="¿Cuánto tiempo tengo que esperar para que verifiquen mi cuenta?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={3}
			>
				<QuestionText>
					El proceso de verificación de cuenta puede tardar hasta 24 hs hábiles.
				</QuestionText>
			</Question>
		</Questions>
	);
};

export default Basic;
