import React from "react";
import { Point, List, Clause, Text } from "../content";

const Prohibited = () => {
	return (
		<Point title="11. No Prohibited Use">
			<Clause>11.1 Prohibited Use</Clause>
			<List text="It is prohibited to use the Site or to access any Service for any of the following purposes or uses (each a Prohibited Use):">
				<li>To conduct or engage in any illegal activity;</li>
				<li>To hide or disguise the proceeds of any illegal activity;</li>
				<li>
					To infringe our proprietary intellectual property, or the proprietary
					intellectual property of any other person;
				</li>
				<li>To engage in gambling;</li>
				<li>
					In relation to any Digital Currency that Copter does not support at the relevant
					time;
				</li>
				<li>
					To engage in any deceptive, fraudulent or malicious activity, including by
					launching malware or viruses, or seeking to hack into any Wallets or steal any
					Digital Currencies or funds held by any other Approved User;
				</li>
				<li>
					To reverse-engineer, decompile, disable, or disassemble any software running on
					the Site;
				</li>
				<li>To promote any securities;</li>
				<li>To harm ​Copter any person associated with Copter or any third party;</li>
				<li>If you are not an Approved User;</li>
				<li>
					To offer, or to purport to offer, any Service to any person who is not an
					Approved User; or
				</li>
				<li>
					To engage in any other use or activity which breaches these Terms and
					Conditions.
				</li>
			</List>
			<Clause>11.2 Consequences of engaging in any Prohibited Use</Clause>
			<Text>
				Copter may block or refuse any person (including any Approve User) from accessing
				the Site and/or any Services or any Transaction if it believes in good faith that
				such person, Service or Transaction is connected with any Prohibited Use. Copter
				does not need to provide any prior notice or explanation if it invokes this right.
			</Text>
		</Point>
	);
};

export default Prohibited;
