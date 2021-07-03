import React from "react";
import { List, Point, Text } from "../content";

const Amendments = () => {
	return (
		<Point title="17. Amendments to these Terms and Conditions">
			<List text="We may amend these Terms and Conditions (including the Fee Schedule which is incorporated by reference) at any time in the following circumstances:">
				<li>to meet our legal obligations;</li>
				<li>
					to accommodate the reasonable requirements of our service providers or business
					partners;
				</li>
				<li>
					to reflect changes to our Services, the Digital Currencies, the networks
					underlying the Digital Currencies, or the risks presented by them; and
				</li>
				<li>in the case of the Fee Schedule, our costs of business.</li>
			</List>
			<Text>
				If we amend these Terms and Conditions, we will publish the updated Privacy Policy
				on our Site. Any subsequent access to or use by you of the Site will constitute an
				acceptance of the amended Privacy Policy.
			</Text>
			<Text>
				Where it is possible to do so, we will notify you of any changes to this Privacy
				Policy by sending an email to the email address linked to your User Account.
			</Text>
		</Point>
	);
};

export default Amendments;
