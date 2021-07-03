import React from "react";
import { Clause, List, Point, Text } from "../content";

const UserAccount = () => {
	return (
		<Point title="2. Your User Account">
			<Clause>2.1 Creating a User Account</Clause>
			<List text="To use the Services, you must first create your registered User Account and have it activated.">
				<li>
					To set up your User Account you must provide your name, an email address, set a
					password and affirm your acceptance of these Terms and Conditions and the
					Privacy Policy by clicking the “Sign Up” button. We also strongly recommend that
					you enable the “2-factor authentication” option in the ‘Security Settings’.
				</li>
				<li>
					To have your User Account activated, we must receive the following verified
					information:
					<List>
						<li>
							for an individual, your full name, gender, date of birth and occupation,
							and driver’s licence or passport number
						</li>
						<li>
							for an entity, your legal registration number and GST registration
							number (if applicable)
						</li>
						<li>your phone number</li>
						<li>your residential or business address and previous addresses</li>
						<li>
							confirmation as to whether you are the beneficial owner of the account
							(that is, confirmation that are you the sole person who exercises
							effective control over the account and owns the account) and, if not,
							the equivalent information for each other beneficial owner of the
							account
						</li>
						<li>
							any additional information, such as photo identification, needed to
							comply with laws (such as enhanced due diligence requirements under the
							anti-money laundering laws, or source of funds information).
						</li>
					</List>
				</li>
			</List>
			<Clause>2.2 Purpose of your User Account</Clause>
			<List text="Once established, you can access the Services through your User Account. Specifically, your User Account:">
				<li>
					is linked to your Legal Tender Account and your Digital Currency Wallet (see
					clauses 3 and 4 below); and
				</li>
				<li>contains a record of your Transactions.</li>
			</List>

			<Text>
				We recommend that you only log into your User Account directly through the Copter
				Site and only access the Copter Exchange through the trading site. This will
				minimize the risk of you inadvertently exposing your User Account or Copter Wallets
				to unauthorized access or attacks.
			</Text>
			<Clause>2.3 Your promises in relation to your User Account</Clause>
			<List text="You confirm that:">
				<li>
					Copter may make inquiries directly or through third parties which we consider
					necessary to verify your identity and/or to protect against fraud, terrorism
					financing or money-laundering;
				</li>
				<li>
					You understand that you are responsible for maintaining the security of your
					User Account login and password, any forms of multi-factor authentication and
					your private key(s);
				</li>
				<li>
					You understand that anyone accessing your User Account will be able to enter
					Copter&apos;s Wallets which is caused by your negligence or breach of these into
					Transactions using your Copters Wallets, and ​ Copter has no obligation to
					verify or take any steps to verify any instruction received from you or
					appearing to be sent by you;
				</li>
				<li>
					You understand that, by using the Services, you are fully responsible for and
					accept all risks of unauthorized access to your User Account or to your
					Copter&apos;s Wallets which is caused by your negligence or breach of these
					Terms and Conditions.
				</li>
			</List>
		</Point>
	);
};

export default UserAccount;
