//Some currencies can only be bought on OTC.
//In those cases we want to show a message to let the user know that.

interface IOTCText {
	[index: string]: string;
}

export const OTCText: IOTCText = {
	RSRARS: "Compra RSR con pesos a traves de la mesa OTC enviando un correo a support@exchangecopter.com",
	RSVARS: "Compra RSV con pesos a traves de la mesa OTC enviando un correo a support@exchangecopter.com",
};
