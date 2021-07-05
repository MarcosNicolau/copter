import React, { useCallback, useState } from "react";
import Question from "../question";
import Questions from "../questions";
import { QuestionText } from "../text";

const Basic = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);

	const handleBitcoinRedirect = useCallback(() => window.open("https://bitcoin.org/es/"), []);
	const handleInstagramRedirect = useCallback(
		() => window.open("https://www.instagram.com/copter_news/"),
		[]
	);

	return (
		<Questions name="Información básica">
			<Question
				question="¿Qué es bitcoin?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={1}
			>
				<QuestionText>
					Bitcoin te permite enviar dinero de forma online a cualquier persona en el
					mundo, de manera gratuita. Bitcoin es la primera divisa digital que es
					completamente distribuida.
				</QuestionText>
				<QuestionText>
					La red está formada por usuarios como vos, de manera tal que ningún banco o
					procesador de pagos es requerido para hacer una transacción entre vos y
					cualquier otra persona. Esta descentralización es la base de la seguridad y la
					libertad del bitcoin. Alrededor del mundo la gente está intercambiando cientos
					de miles de dólares en bitcoin, sin intermediarios o compañías de tarjetas de
					crédito.
				</QuestionText>
				<QuestionText>
					En resumen, nadie maneja bitcoin. Bitcoin es manejado colectivamente por los
					usuarios, y cualquier cambio en el sistema bitcoin debe ser aprobado por la
					mayoría de los usuarios antes de ser implementado.
				</QuestionText>
			</Question>
			<Question
				question="¿Cuál es mi dirección de bitcoin?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={2}
			>
				<QuestionText>
					Al igual que en Mercado Pago puedes enviar dinero entre amigos con solo su
					número de celular, en la red de bitcoin cualquier usuario puede crear sin costo
					una dirección única para recibir pagos desde todo el mundo.
				</QuestionText>
				<QuestionText>
					Un ejemplo de dirección puede ser:
					<QuestionText isBold={true} style={{ margin: 0 }}>
						1FGPvex55rJHtrvMxGijOJBTp7ERT14Cs
					</QuestionText>
				</QuestionText>
				<QuestionText>
					Esta la podrás encontrar en la sección de billeteras haciendo click en bitcoin y
					luego en depositar. Ahi tambien podras ver el código QR de tu billetera.
				</QuestionText>
			</Question>
			<Question
				question="¿Qué es una clave privada?"
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={3}
			>
				<QuestionText>
					Todas las direcciones de bitcoin tienen una clave privada asociada. La clave
					privada está relacionada con la dirección de bitcoin, y está diseñada para que
					la dirección de bitcoin pueda ser calculada a partir de la clave privada, pero
					la operación contraria sea imposible de hacer. Esto significa que nadie puede
					saber tu clave privada viendo tu dirección de bitcoin. Debido a que la clave
					privada es la llave que te permite gastar los bitcoins, es importante guardarla
					de forma segura.
				</QuestionText>
			</Question>
			<Question
				question="Si todavía no entendés mucho sobre bitcoin y criptomonedas."
				openedQuestion={openedQuestion}
				setOpenedQuestion={setOpenedQuestion}
				questionNumber={4}
			>
				<QuestionText>
					Te invitamos a que visites el sitio web{" "}
					<span className="btn--text" onClick={handleBitcoinRedirect}>
						{" "}
						bitcoin.org
					</span>{" "}
					y nos sigas en{" "}
					<span className="btn--text" onClick={handleInstagramRedirect}>
						{" "}
						instagram
					</span>{" "}
					donde tenemos mucho contenido informativo y sobre todas las novedades del
					mercado.
				</QuestionText>
			</Question>
		</Questions>
	);
};

export default Basic;
