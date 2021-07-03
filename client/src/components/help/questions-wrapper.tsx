import React from "react";
import Basic from "./question-type/basic";
import KYC from "./question-type/kyc";
import BuySell from "./question-type/buy-sell";
import DepositWithdraw from "./question-type/deposit-withdraw";
import DownloadApp from "./question-type/download-app";
import Support from "./question-type/support";

const QuestionsWrapper = () => {
	return (
		<div className="flex-row help__questions-wrapper">
			<Basic />
			<KYC />
			<BuySell />
			<DepositWithdraw />
			<Support />
			<DownloadApp />
		</div>
	);
};

export default QuestionsWrapper;
