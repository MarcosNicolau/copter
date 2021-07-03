import React, { useCallback, useState } from "react";
import Questions from "../questions";
import Question from "../question";
import { QuestionText } from "../text";

const DownloadApp = () => {
	const [openedQuestion, setOpenedQuestion] = useState(0);

	const handlePWARedirect = useCallback(
		() => window.open("https://web.dev/progressive-web-apps/"),
		[]
	);

	return (
		<Questions name="Descargar app">
			<div className="help__question-content">
				<Question
					question="¿Tienen app?"
					openedQuestion={openedQuestion}
					setOpenedQuestion={setOpenedQuestion}
					questionNumber={1}
				>
					<QuestionText>
						De momento, no contamos con una aplicación nativa. Sin embargo, creamos una
						aplicación web implementando las ultimas tecnologías, haciendo posible que
						te la puedas descargar en cualquier dispositivo y lo mejor de todo es que no
						te va a ocupar nada de espacio.
					</QuestionText>
					<QuestionText>
						Si sos un curioso y te interesa saber como funcionan las PWA(progressive web
						apps)
						<span className="btn--text" onClick={handlePWARedirect}>
							{" "}
							podes leer aca.
						</span>
					</QuestionText>
				</Question>
				<Question
					question="¿Cómo hago para descargarla?"
					openedQuestion={openedQuestion}
					setOpenedQuestion={setOpenedQuestion}
					questionNumber={2}
				>
					<QuestionText isBold={true} style={{ marginBottom: "0.5rem" }}>
						Como descargar la aplicación en iOS:
					</QuestionText>
					<ol style={{ margin: 0 }}>
						<QuestionText isList={true}>
							Presionar el botón de la flecha en la barra inferior.
						</QuestionText>
						<QuestionText isList={true}>
							Presionar &quot;añadir a pantalla de inicio&quot;.
						</QuestionText>
						<QuestionText isList={true}>
							Eso es todo, descargaste la aplicación y no te ocupa nada de espacio.
						</QuestionText>
					</ol>
					<QuestionText isBold={true} style={{ marginBottom: "0.5rem" }}>
						Como descargar la aplicación en Android:
					</QuestionText>
					<ol style={{ margin: 0 }}>
						<QuestionText isList={true}>Inicia la app.</QuestionText>
						<QuestionText isList={true}>
							En la parte inferior te va a saltar un cartel que dice &quot;añadir a
							pantalla de inicio&quot;.
						</QuestionText>
						<QuestionText isList={true}>Aceptalo.</QuestionText>
						<QuestionText isList={true}>
							Eso es todo, descargaste la aplicación y no te ocupa nada de espacio.
						</QuestionText>
					</ol>
				</Question>
			</div>
		</Questions>
	);
};

export default DownloadApp;
